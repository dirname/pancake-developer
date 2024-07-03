---
description: v2
---

# 彩票

## 合约信息

**合约名称:** PancakeSwapLottery\
**合约地址:** 0x5aF6D33DE2ccEC94efb1bDF8f92Bd58085432d2c\
**随机数生成器地址:** 0x8c6375Aab6e5B26a30bF241EBBf29AD6e6c503c2\
(_随机数生成器合约必须首先部署_)

查看 [BscScan 上的 PancakeSwapLottery.sol](https://bscscan.com/address/0x5aF6D33DE2ccEC94efb1bDF8f92Bd58085432d2c#code)。

查看 [BscScan 上的 PancakeSwap: Lottery 合约](https://bscscan.com/address/0x5aF6D33DE2ccEC94efb1bDF8f92Bd58085432d2c)。

## 审计

PancakeSwap 彩票 V2 目前已经被审计过两次。查看以下结果：

[Peckshield 的彩票 V2 审计报告](https://github.com/peckshield/publications/blob/master/audit\_reports/PeckShield-Audit-Report-PancakeswapLottery-v1.0.pdf)

[Slowmist 的彩票 V2 审计报告](https://github.com/slowmist/Knowledge-Base/blob/master/open-report/Smart%20Contract%20Security%20Audit%20Report%20-%20PancakeSwap%20Lottery.pdf)

## 彩票状态

彩票具有四种 `Status` 状态：`Pending`, `Open`, `Close` 和 `Claimable`，这些状态决定了在特定时间可以执行哪些操作。

## 读取/查看函数

### viewCurrentLotteryId

```
function viewCurrentLotteryId() external view override returns (uint256);
```

返回当前彩票轮次的 Id# 作为整数。轮次 Id# 对应轮次编号，且是递增的，例如，第九轮彩票的 Id# 为 `9`。

### viewLottery

```
function viewLottery(uint256 _lotteryId) external view returns (Lottery memory);
```

返回指定彩票轮次的信息作为一个元组（见下面的 Lottery 结构）。

```
        uint256 startTime;
        uint256 endTime;
        uint256 priceTicketInCake;
        uint256 discountDivisor;
        uint256[6] rewardsBreakdown; // 0: 1 个匹配的号码 // 5: 6 个匹配的号码
        uint256 treasuryFee; // 500: 5% // 200: 2% // 50: 0.5%
        uint256[6] cakePerBracket;
        uint256[6] countWinnersPerBracket;
        uint256 firstTicketId;
        uint256 firstTicketIdNextLottery;
        uint256 amountCollectedInCake;
        uint32 finalNumber;
```

| 名称                     | 类型        | 描述                                                                                                                                              |
| ------------------------ | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `startTime`              | uint256     | 彩票轮次的起始区块。                                                                                                                               |
| `endTime`                | uint256     | 彩票轮次的结束区块（约为轮次开始后的 12 小时）。                                                                                                   |
| `priceTicketInCake`      | uint256     | 单张彩票的价格（约为 $5 USD）。                                                                                                                   |
| `discountDivisor`        | uint256     | 用于计算批量购票折扣的除数。                                                                                                                       |
| `rewardsBreakdown`       | uint256\[6] | 不同档次的奖金分配（总和必须是 10,000）。                                                                                                           |
| `treasuryFee`            | uint256     | 从每轮募集的资金中提取并转入国库地址的金额（最高 3000）。                                                                                          |
| `cakePerBracket`         | uint256\[6] | 分配给每个档次中奖者的 CAKE 数量。                                                                                                                 |
| `countWinnersPerBracket` | uint256\[6] | 从最高档次开始统计每个档次的中奖者数量，当值 > 0 时有效。                                                                                           |
| `firstTicketId`          | uint256     | 彩票轮次开始时设置的第一张彩票的 Id，决定当前轮次的有效彩票范围。                                                                                   |
| `firstTicketIdNextLottery`| uint256    | 当前轮次结束时设置的第一张彩票的 Id，决定下一轮次的有效彩票范围。                                                                                   |
| `amountCollectedInCake`  | uint256     | 当前彩票轮次通过售票募集的 CAKE 数量。                                                                                                             |
| `finalNumber`            | uint32      | 从随机数生成器合约（[RandomNumberGenerator.sol](https://bscscan.com/address/0x8c6375Aab6e5B26a30bF241EBBf29AD6e6c503c2)）中获得的`randomResult`确定的最终号码。 |

### viewNumbersAndStatusesForTicketIds

```
function viewNumbersAndStatusesForTicketIds(uint256[] calldata _ticketIds)
    external
    view
    returns (uint32[] memory, bool[] memory);
```

返回由 `ticketId` 数组定义的彩票的对应号码和状态。

### viewRewardsForTicketId

```
function viewRewardsForTicketId(
    uint256 _lotteryId,
    uint256 _ticketId,
    uint32 _bracket;
```

在抽奖后根据 `lotteryId`、`ticketId` 和 `bracket` 计算一张彩票的奖励。填充和查询将提供一个指向 [BscScan](https://bscscan.com/address/0x5aF6D33DE2ccEC94efb1bDF8f92Bd58085432d2c#readContract) 上详细价格信息的链接。

| 名称        | 类型    | 描述                                    |
| ----------- | ------- | --------------------------------------- |
| `lotteryId` | uint256 | 彩票的 id。                             |
| `ticketId`  | uint256 | 彩票的 id。                             |
| `bracket`   | uint32  | 用于验证认领和计算奖励的 `ticketId` 档次。|

### viewUserInfoForLotteryId

```
    function viewUserInfoForLottery(
        address _user,
        uint256 _lotteryId,
        uint256 _cursor,
        uint256 _size
    )
        external
        view
        returns (
            uint256[] memory,
            uint32[] memory,
            bool[] memory,
            uint256
        )
```

返回用户在给定彩票轮次（由 `lotteryID` 定义）的 `lotteryTicketIds`、`ticketNumbers` 和 `ticketStatuses`。

| 名称        | 类型    | 描述                             |
| ----------- | ------- | -------------------------------- |
| `user`      | address | 用户的地址。                      |
| `lotteryId` | uint256 | 彩票的 id。                       |
| `cursor`    | uint256 | 检索彩票时的起始光标。            |
| `size`      | uint256 | 要检索的彩票数量。                |

### calculateRewardsForTicketId

```
    function _calculateRewardsForTicketId(
        uint256 _lotteryId,
        uint256 _ticketId,
        uint32 _bracket
    ) internal view returns (uint256);
```

在抽奖后根据 `lotteryId`、`ticketId` 和 `bracket` 计算一张彩票的奖励。

| 名称        | 类型    | 描述                                    |
| ----------- | ------- | --------------------------------------- |
| `lotteryId` | uint256 | 彩票的 id。                             |
| `ticketId`  | uint256 | 彩票的 id。                             |
| `bracket`   | uint32  | 用于验证认领和计算奖励的 `ticketId` 档次。|

### calculateTotalPriceForBulkTickets

```
    function calculateTotalPriceForBulkTickets(
        uint256 _discountDivisor,
        uint256 _priceTicket,
        uint256 _numberTickets
    ) external pure returns (uint256);
```

计算一组彩票的价格，考虑批量折扣。

discountDivisor:

$$totalPriceForBulkTickets = priceSingleTicket \cdot numberTickets \cdot \frac{(discountDivisor + 1 - numberTickets)}{discountDivisor}$$

填充和查询将提供 BscScan 上详细价格信息的链接。

| 名称              | 类型    | 描述                         |
| ----------------- | ------- | ---------------------------- |
| `discountDivisor` | uint256 | 折扣的除数。                 |
| `priceTickets`    | uint256 | 单张彩票的价格（CAKE）。    |
| `numberTickets`   | uint256 | 要购买的彩票数量。           |

## 写函数（用户）

### buyTickets

```
function buyTickets(uint256 _lotteryId, uint32[] calldata _ticketNumbers) external override notContract nonReentrant;
```

为当前 `Open` 状态的彩票轮次购买彩票（每次购买 1 到 100 张）。使用 `calculateTotalPriceForBulkTickets` 计算每张彩票的价格。

| 名称            | 类型    | 描述                                   |
| --------------- | ------- | -------------------------------------- |
| `lotteryId`     | uint256 | 彩票的 id。                            |
| `ticketNumbers` | uint32  | 介于 1,000,000 和 1,999,999 之间的彩票号码数组。 |

### claimTickets

```
    function claimTickets(
        uint256 _lotteryId,
        uint256[] calldata _ticketIds,
        uint32[] calldata _brackets
    ) external override notContract nonReentrant;
```

为 `Claimable` 状态的彩票轮次认领奖励。检查 `lotteryId` 以确定轮次是否可认领，`ticketId` 的所有权，彩票的资格（`ticketId` 介于 `firstTicketId` 和 `firstTicketIdNextLottery` 之间），以及 `ticketId` 是否在符合要求的奖品 `bracket` 之内（介于 0 和 5 之间）。

| 名称        | 类型    | 描述                            |
| ----------- | ------- | ------------------------------- |
| `lotteryId` | uint256 | 彩票的 id。                     |
| `ticketIds` | uint32  | `ticketId` 数组。               |
| `brackets`  | uint32  | 彩票 id 的档次数组。           |

## 写函数（操作员/管理员）

### closeLottery

```
function closeLottery(uint256 _lotteryId) external override onlyOperator;
```

将 `Open` 状态的彩票关闭为 `Close` 状态。发出 `LotteryClose` 事件。

| 名称        | 类型    | 描述                |
| ----------- | ------- | ------------------- |
| `lotteryId` | uint256 | 彩票的 id。         |

### drawFinalNumberAndMakeLotteryClaimable

```
    function drawFinalNumberAndMakeLotteryClaimable(uint256 _lotteryId, bool _autoInjection) external override onlyOperator nonReentrant;
```

彩票必须处于 `Close` 状态。根据 `randomResult` 抽取最终的彩票号码，计算扣除国库费用后的各档次奖励，使彩票状态变为 `Claimable`，并将国库费用转移到国库地址。

| 名称            | 类型    | 描述                         |
| --------------- | ------- | ---------------------------- |
| `lotteryId`     | uint256 | 彩票的 id。                  |
| `autoInjection` | bool    | 自动注入状态。              |

### changeRandomNumberGenerator

```
    function changeRandomGenerator(address _randomGeneratorAddress) external onlyOwner;
```

更改随机数生成器合约地址。彩票必须为 `Claimable`。

| 名称                     | 类型    | 描述                          |
| ------------------------ | ------- | ----------------------------- |
| `randomGeneratorAddress` | address | 随机生成器合约的地址。        |

### injectFunds

```
function injectFunds(uint256 _lotteryId, uint256 _amount) external override onlyOwner;
```

向彩票注入资金。彩票必须为 `Open`。

| 名称        | 类型    | 描述                             |
| ----------- | ------- | -------------------------------- |
| `lotteryId` | uint256 | 彩票的 id。                      |
| `amount`    | uint256 | 以 CAKE 计算的注入金额。         |

### startLottery

```
    function startLottery(
        uint256 _endTime,
        uint256 _priceTicketInCake,
        uint256 _discountDivisor,
        uint256[6] calldata _rewardsBreakdown,
        uint256 _treasuryFee
    ) external override onlyOperator;
```

启动彩票，将其设置为 `Open` 状态。状态必须为 `Claimable`。

| 名称                 | 类型        | 描述                                                         |
| -------------------- | ----------- | ------------------------------------------------------------ |
| `endTime`            | uint256     | 彩票的结束时间。                                            |
| `priceTicketInCake`  | uint256     | 单张彩票的价格（CAKE）。                                    |
| `discountDivisor`    | uint256     | 计算批量优惠幅度的除数。                                     |
| `rewardsBreakdown`   | uint256\[6] | 每个档次的奖金分配（总和必须为 10,000）。                    |
| `trasuryFee`         | uint256     | 国库费用（10,000 = 100%，100 = 1%）。                        |

### recoverWrongTokens

```
function recoverWrongTokens(address _tokenAddress, uint256 _tokenAmount) external onlyOwner;
```

允许管理员回收错误发送到地址的代币。不能是 CAKE 代币。

| 名称           | 类型    | 描述                          |
| -------------- | ------- | ----------------------------- |
| `tokenAddress` | address | 要提取的代币地址。            |
| `tokenAmount`  | uint256 | 要提取的代币数量。            |

### setMinAndMaxTicketPriceInCake

```
function recoverWrongTokens(address _tokenAddress, uint256 _tokenAmount) external onlyOwner;
```

允许管理员设置彩票价格的上下限。最低价必须低于最高价。

| 名称                   | 类型    | 描述                         |
| ---------------------- | ------- | ---------------------------- |
| `minPriceTicketInCake` | uint256 | CAKE 中彩票的最低价。        |
| `maxPriceTicketInCake` | uint256 | CAKE 中彩票的最高价。        |

### setMaxNumberTicketsPerBuy

```
function setMaxNumberTicketsPerBuy(uint256 _maxNumberTicketsPerBuy) external onlyOwner;
```

设置一次性可购买的彩票数量上限（目前为 100）。最大数量必须大于 0。

| 名称                     | 类型    | 描述                                       |
| ------------------------ | ------- | ------------------------------------------ |
| `maxNumberTicketsPerBuy` | uint256 | 一次性购买的最大彩票数量。                 |

### setOperatorAndTreasuryAndInjectorAddress

```
function setOperatorAndTreasuryAddresses(address _operatorAddress, address _treasuryAddress) external onlyOwner;
```

设置彩票运营者的地址。

| 名称              | 类型    | 描述                      |
| ----------------- | ------- | ------------------------- |
| `operatorAddress` | address | 运营者的地址。            |
| `treasuryAddress` | address | 国库的地址。              |
| `injectorAddress` | address | 注入者的地址。            |

## 事件（用户）

### TicketsPurchase

```
TicketsPurchase(address indexed buyer, uint256 indexed lotteryId, uint256 numberTickets);
```

彩票被购买。

触发器：`buyTickets` [跳转到 buyTickets](#buytickets)

### TicketsClaim

```
TicketsClaim(address indexed claimer, uint256 amount, uint256 indexed lotteryId, uint256 numberTickets);
```

彩票在抽奖后被认领。

触发器：`claimTickets` [跳转到 claimTickets](#claimtickets)

## 事件（管理员）

### AdminTokenRecovery

```
AdminTokenRecovery(address token, uint256 amount);
```

管理员从彩票地址回收错误代币。

触发器：`recoverWrongTokens` [跳转到 recoverWrongTokens](#recoverwrongtokens)

### LotteryClose

```
LotteryClose(uint256 indexed lotteryId, uint256 firstTicketIdNextLottery);
```

彩票关闭。lotteryId 被索引，`firstTicketIdNextLottery` 由 `currentTicketId` 确定。

触发器：`closeLottery` [跳转到 closeLottery](#closelottery)

### LotteryInjection

```
LotteryInjection(uint256 indexed lotteryId, uint256 amount);
```

资金注入彩票。

触发器：`injectFunds` [跳转到 injectFunds](#injectfunds)

### LotteryOpen

```
LotteryOpen(
        uint256 indexed lotteryId,
        uint256 startTime,
        uint256 endTime,
        uint256 priceTicketInCake,
        uint256 firstTicketId
    );
```

彩票开启。`firstTicketId` 从 `currentTicketId` 设置，

触发器：`startLottery` [跳转到 startLottery](#startlottery)

### LotteryNumberDrawn

```
LotteryNumberDrawn(uint256 indexed lotteryId, uint256 finalNumber, uint256 countWinningTickets);
```

彩票轮次的号码被抽取。

触发器：`drawFinalNumberAndMakeLotteryClaimable` [跳转到 drawFinalNumberAndMakeLotteryClaimable](#drawfinalnumberandmakelotteryclaimable)

### NewOperatorAndTreasuryAndInjectorAddresses

```
NewOperatorAndTreasuryAndInjectorAddresses(address operator, address treasury);
```

新运营者地址已设置。

触发器：`setOperatorAndTreasuryAndInjectorAddresses` [跳转到 setOperatorAndTreasuryAndInjectorAddresses](#setoperatorandtreasuryandinjectoraddress)

### NewRandomNumberGenerator

```
NewRandomGenerator(address indexed randomGenerator);
```

新随机数生成器地址已设置。

触发器：`changeRandomGenerator` [跳转到 changeRandomGenerator](#changerandomnumbergenerator)