# SmartChefInitializable

## 合约角色

| 角色              | 描述                |
| ----------------- | ------------------ |
| 合约拥有者 (onlyOwner) | 合约的拥有者 |

### 合约拥有者

地址因池子不同而可能不同，但通常是 `0xad9d97fc7bf0ac6dc68d478dcb3709454519b358`

这个地址由阈值 3/6 的 Gnosis 多签合约控制

## 函数

### `emergencyRewardWithdraw` - 合约拥有者

```typescript
    function emergencyRewardWithdraw(uint256 _amount) external onlyOwner {
        rewardToken.safeTransfer(address(msg.sender), _amount);
    }
```

在紧急情况下，**合约拥有者**可以从池子合约中提取奖励。

### `recoverWrongTokens` - 合约拥有者

```typescript
 function recoverWrongTokens(address _tokenAddress, uint256 _tokenAmount) external onlyOwner {
        require(_tokenAddress != address(stakedToken), "Cannot be staked token");
        require(_tokenAddress != address(rewardToken), "Cannot be reward token");

        IBEP20(_tokenAddress).safeTransfer(address(msg.sender), _tokenAmount);

        emit AdminTokenRecovery(_tokenAddress, _tokenAmount)
```

**合约拥有者**可以使用该函数回收误发送到合约中的非 `stakedToken` 和 `rewardToken` 代币。

### `stopRewards` - 合约拥有者

```typescript
    function stopReward() external onlyOwner {
        bonusEndBlock = block.number;
    }
```

如果需要在奖励分发结束前停止奖励分发，**合约拥有者**可以调用此函数。

### `updatePoolLimitPerUser` - 合约拥有者

```typescript
function updatePoolLimitPerUser(bool _hasUserLimit, uint256 _poolLimitPerUser) external onlyOwner {
        require(hasUserLimit, "Must be set");
        if (_hasUserLimit) {
            require(_poolLimitPerUser > poolLimitPerUser, "New limit must be higher");
            poolLimitPerUser = _poolLimitPerUser;
        } else {
            hasUserLimit = _hasUserLimit;
            poolLimitPerUser = 0;
        }
        emit NewPoolLimit(poolLimitPerUser);
    }
```

**合约拥有者**可以调用此函数更新每个池子的质押限制。质押限制只能增加，不能减少。这确保了没有用户质押数量超过质押限制。

### `UpdateRewardPerBlock` - 合约拥有者

```typescript
 function updateRewardPerBlock(uint256 _rewardPerBlock) external onlyOwner {
        require(block.number < startBlock, "Pool has started");
        rewardPerBlock = _rewardPerBlock;
        emit NewRewardPerBlock(_rewardPerBlock);
    }
```

可以由 **合约拥有者** 调用，但只能在池子开始前调用。一旦池子开始，这个参数不能再修改。

### `updateStartAndEndBlocks` - 合约拥有者

```typescript
   function updateStartAndEndBlocks(uint256 _startBlock, uint256 _bonusEndBlock) external onlyOwner {
        require(block.number < startBlock, "Pool has started");
        require(_startBlock < _bonusEndBlock, "New startBlock must be lower than new endBlock");
        require(block.number < _startBlock, "New startBlock must be higher than current block");

        startBlock = _startBlock;
        bonusEndBlock = _bonusEndBlock;

        // Set the lastRewardBlock as the startBlock
        lastRewardBlock = startBlock;

        emit NewStartAndEndBlocks(_startBlock, _bonusEndBlock);
    }
```

可以由 **合约拥有者** 调用，但只能在池子开始前调用。一旦池子开始，这个参数不能再修改。

### `transferOwnership` - 合约拥有者

```typescript
        transferOwnership(_admin);
    }
```

如果 **合约拥有者** 需要更改合约的所有权，他们可以调用此函数。