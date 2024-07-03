# Lottery Contract

## 合约角色：

| 角色                           | 描述                                         |
| ------------------------------ | ------------------------------------------- |
| injectorAddress (onlyInjector) | Injector 是用于定期注资彩票的地址                 |
| operatorAddress (onlyOperator) | 用于运行常规操作的彩票调度账户                    |
| treasuryAddress (onlyTreasury) | 接收销毁资产的地址                             |
| Owner (onlyOwner)              | 合约拥有者                                    |

### Owner

`0xad9d97fc7bf0ac6dc68d478dcb3709454519b358`

由 gnosis 多重签名合约控制，阈值为 3/6

### Operator Address

`0x566a7e38b300E903dE71389C2b801AcDBA5268dB`

调度地址 - 全自动化且无人参与。不在多重签名范围内，没有访问敏感合约操作的权限。

### Treasury Address

`0xe2086f890e7bd20e07fc0036a437dc4813e88b09`

由 gnosis 多重签名合约控制，阈值为 3/6

### Injector Address （目前与 Owner 相同）

`0xaD9d97fc7BF0ac6dC68d478dcB3709454519b358`

由 gnosis 多重签名合约控制，阈值为 3/6

## 函数

### `injectFunds` - **Injector** 和 **Owner**

```typescript
function injectFunds(uint256 _lotteryId, uint256 _amount) external override onlyOwnerOrInjector {
    require(_lotteries[_lotteryId].status == Status.Open, "Lottery not open");

    cakeToken.safeTransferFrom(address(msg.sender), address(this), _amount);
    _lotteries[_lotteryId].amountCollectedInCake += _amount;

    emit LotteryInjection(_lotteryId, _amount);
}
```

**Injector** 或 **Owner** 可以调用此函数向指定的 _lotteryId_ 注入特定数量的 _CAKE_。

### `startLottery` - **Operator**

```typescript
function startLottery(
    uint256 _endTime,
    uint256 _priceTicketInCake,
    uint256 _discountDivisor,
    uint256[6] calldata _rewardsBreakdown,
    uint256 _treasuryFee
) external override onlyOperator {
    require(
        (currentLotteryId == 0) || (_lotteries[currentLotteryId].status == Status.Claimable),
        "Not time to start lottery"
    );

    require(
        ((_endTime - block.timestamp) > MIN_LENGTH_LOTTERY) && ((_endTime - block.timestamp) < MAX_LENGTH_LOTTERY),
        "Lottery length outside of range"
    );

    require(
        (_priceTicketInCake >= minPriceTicketInCake) && (_priceTicketInCake <= maxPriceTicketInCake),
        "Outside of limits"
    );

    require(_discountDivisor >= MIN_DISCOUNT_DIVISOR, "Discount divisor too low");
    require(_treasuryFee <= MAX_TREASURY_FEE, "Treasury fee too high");

    require(
        (_rewardsBreakdown[0] +
            _rewardsBreakdown[1] +
            _rewardsBreakdown[2] +
            _rewardsBreakdown[3] +
            _rewardsBreakdown[4] +
            _rewardsBreakdown[5]) == 10000,
        "Rewards must equal 10000"
    );

    currentLotteryId++;

    _lotteries[currentLotteryId] = Lottery({
        status: Status.Open,
        startTime: block.timestamp,
        endTime: _endTime,
        priceTicketInCake: _priceTicketInCake,
        discountDivisor: _discountDivisor,
        rewardsBreakdown: _rewardsBreakdown,
        treasuryFee: _treasuryFee,
        cakePerBracket: [uint256(0), uint256(0), uint256(0), uint256(0), uint256(0), uint256(0)],
        countWinnersPerBracket: [uint256(0), uint256(0), uint256(0), uint256(0), uint256(0), uint256(0)],
        firstTicketId: currentTicketId,
        firstTicketIdNextLottery: currentTicketId,
        amountCollectedInCake: pendingInjectionNextLottery,
        finalNumber: 0
    });

    emit LotteryOpen(
        currentLotteryId,
        block.timestamp,
        _endTime,
        _priceTicketInCake,
        currentTicketId,
        pendingInjectionNextLottery
    );

    pendingInjectionNextLottery = 0;
}
```

`startLottery` 函数仅供 **Operator** 调用，以启动新的彩票轮次。

### `closeLottery` - Operator

```typescript
function closeLottery(uint256 _lotteryId) external override onlyOperator nonReentrant {
    require(_lotteries[_lotteryId].status == Status.Open, "Lottery not open");
    require(block.timestamp > _lotteries[_lotteryId].endTime, "Lottery not over");
    _lotteries[_lotteryId].firstTicketIdNextLottery = currentTicketId;

    // 根据种子请求生成器生成随机数
    randomGenerator.getRandomNumber(uint256(keccak256(abi.encodePacked(_lotteryId, currentTicketId))));

    _lotteries[_lotteryId].status = Status.Close;

    emit LotteryClose(_lotteryId, currentTicketId);
}
```

由 **Operator** 调用以结束彩票轮次。

### `drawFinalNumberAndMakeLotteryClaimable` - Operator

```typescript
function drawFinalNumberAndMakeLotteryClaimable(uint256 _lotteryId, bool _autoInjection)
    external
    override
    onlyOperator
    nonReentrant
{
    require(_lotteries[_lotteryId].status == Status.Close, "Lottery not close");
    require(_lotteryId == randomGenerator.viewLatestLotteryId(), "Numbers not drawn");

    // 基于 ChainLink 的随机生成器计算 finalNumber
    uint32 finalNumber = randomGenerator.viewRandomResult();

    // 初始化一个计数前一个等级地址数量的变量
    uint256 numberAddressesInPreviousBracket;

    // 计算扣除 Treasury 费用后的分配金额
    uint256 amountToShareToWinners = (
        ((_lotteries[_lotteryId].amountCollectedInCake) * (10000 - _lotteries[_lotteryId].treasuryFee))
    ) / 10000;

    // 初始化提取到 Treasury 的金额
    uint256 amountToWithdrawToTreasury;

    // 从最高等级开始计算每个等级的 CAKE 奖金
    for (uint32 i = 0; i < 6; i++) {
        uint32 j = 5 - i;
        uint32 transformedWinningNumber = _bracketCalculator[j] + (finalNumber % (uint32(10)**(j + 1)));

        _lotteries[_lotteryId].countWinnersPerBracket[j] =
            _numberTicketsPerLotteryId[_lotteryId][transformedWinningNumber] -
            numberAddressesInPreviousBracket;

        // A. 如果该等级的用户数量大于 0
        if (
            (_numberTicketsPerLotteryId[_lotteryId][transformedWinningNumber] - numberAddressesInPreviousBracket) !=
            0
        ) {
            // B. 如果该等级的奖励 > 0，进行计算；否则，报告前级地址数
            if (_lotteries[_lotteryId].rewardsBreakdown[j] != 0) {
                _lotteries[_lotteryId].cakePerBracket[j] =
                    ((_lotteries[_lotteryId].rewardsBreakdown[j] * amountToShareToWinners) /
                        (_numberTicketsPerLotteryId[_lotteryId][transformedWinningNumber] -
                            numberAddressesInPreviousBracket)) /
                    10000;

                // 更新前级地址数量
                numberAddressesInPreviousBracket = _numberTicketsPerLotteryId[_lotteryId][transformedWinningNumber];
            }
            // A. 没有 CAKE 分发，将其加入提取到 Treasury 的金额
        } else {
            _lotteries[_lotteryId].cakePerBracket[j] = 0;

            amountToWithdrawToTreasury +=
                (_lotteries[_lotteryId].rewardsBreakdown[j] * amountToShareToWinners) /
                10000;
        }
    }

    // 更新彩票的内部状态
    _lotteries[_lotteryId].finalNumber = finalNumber;
    _lotteries[_lotteryId].status = Status.Claimable;

    if (_autoInjection) {
        pendingInjectionNextLottery = amountToWithdrawToTreasury;
        amountToWithdrawToTreasury = 0;
    }

    amountToWithdrawToTreasury += (_lotteries[_lotteryId].amountCollectedInCake - amountToShareToWinners);

    // 将 CAKE 转移到 Treasury 地址
    cakeToken.safeTransfer(treasuryAddress, amountToWithdrawToTreasury);

    emit LotteryNumberDrawn(currentLotteryId, finalNumber, numberAddressesInPreviousBracket);
}
```

**Operator** 使用 ChainLink VRF 函数进行最终号码抽奖。

### `recoverWrongTokens` - Owner

```typescript
function recoverWrongTokens(address _tokenAddress, uint256 _tokenAmount) external onlyOwner {
    require(_tokenAddress != address(cakeToken), "Cannot be CAKE token");

    IERC20(_tokenAddress).safeTransfer(address(msg.sender), _tokenAmount);

    emit AdminTokenRecovery(_tokenAddress, _tokenAmount);
}
```

如果错误地将非 CAKE 代币发送到彩票合约，**Owner** 可以使用此函数找回。

***

### `setMinAndMaxTicketPriceInCake` - Owner

```typescript
function setMinAndMaxTicketPriceInCake(uint256 _minPriceTicketInCake, uint256 _maxPriceTicketInCake)
    external
    onlyOwner
{
    require(_minPriceTicketInCake <= _maxPriceTicketInCake, "minPrice must be < maxPrice");

    minPriceTicketInCake = _minPriceTicketInCake;
    maxPriceTicketInCake = _maxPriceTicketInCake;
}
```

防止 **Operator** 在闪崩/闪涨事件期间将票价设置为任意价格。

### `setMaxNumberTicketsPerBuy` - Owner

```typescript
function setMaxNumberTicketsPerBuy(uint256 _maxNumberTicketsPerBuy) external onlyOwner {
    require(_maxNumberTicketsPerBuy != 0, "Must be > 0");
    maxNumberTicketsPerBuyOrClaim = _maxNumberTicketsPerBuy;
}
```

**Owner** 可以修改每笔交易的最大票数。当 BSC 区块大小增加或减少时可能需要进行调整。

### `setOperatorAndTreasuryAndInjectorAddresses` - Owner

```typescript
function setOperatorAndTreasuryAndInjectorAddresses(
    address _operatorAddress,
    address _treasuryAddress,
    address _injectorAddress
) external onlyOwner {
    require(_operatorAddress != address(0), "Cannot be zero address");
    require(_treasuryAddress != address(0), "Cannot be zero address");
    require(_injectorAddress != address(0), "Cannot be zero address");

    operatorAddress = _operatorAddress;
    treasuryAddress = _treasuryAddress;
    injectorAddress = _injectorAddress;

    emit NewOperatorAndTreasuryAndInjectorAddresses(_operatorAddress, _treasuryAddress, _injectorAddress);
}
```

设置 **Operator**、**Treasury** 和 **Injector** 地址的函数。

### `changeRandomGenerator` - Owner

```typescript
function changeRandomGenerator(address _randomGeneratorAddress) external onlyOwner {
    require(
        (currentLotteryId == 0) || (_lotteries[currentLotteryId].status == Status.Claimable),
        "Lottery not in claimable"
    );

    // 根据种子请求生成器生成随机数
    IRandomNumberGenerator(_randomGeneratorAddress).getRandomNumber(
        uint256(keccak256(abi.encodePacked(currentLotteryId, currentTicketId)))
    );

    // 基于 ChainLink 的随机生成器计算 finalNumber
    IRandomNumberGenerator(_randomGeneratorAddress).viewRandomResult();

    randomGenerator = IRandomNumberGenerator(_randomGeneratorAddress);

    emit NewRandomGenerator(_randomGeneratorAddress);
}
```

由 **Owner** 更新 RandomNumberGenerator 合约，以在需要更新抽奖逻辑或发布更新时使用。