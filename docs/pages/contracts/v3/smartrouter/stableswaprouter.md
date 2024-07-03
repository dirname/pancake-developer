---
description: Router for stateless execution of swaps against PancakeSwap StableSwap
---

# StableSwapRouter

## Solidity API

### stableSwapFactory

```solidity
address stableSwapFactory
```

### stableSwapInfo

```solidity
address stableSwapInfo
```

### SetStableSwap

```solidity
event SetStableSwap(address factory, address info)
```

### constructor

```solidity
constructor(address _stableSwapFactory, address _stableSwapInfo) internal
```

### setStableSwap

```solidity
function setStableSwap(address _factory, address _info) external
```

设置 Pancake 稳定币交换工厂和信息

_只有合约所有者可以调用_

### exactInputStableSwap

```solidity
function exactInputStableSwap(address[] path, uint256[] flag, uint256 amountIn, uint256 amountOutMin, address to) external payable returns (uint256 amountOut)
```

**参数**

| 名称         | 类型       | 描述                                       |
| ------------ | ---------- | ------------------------------------------ |
| path         | address\[] |                                            |
| flag         | uint256\[] | 稳定币交换池中的代币数量。2 表示 2pool，3 表示 3pool          |
| amountIn     | uint256    |                                            |
| amountOutMin | uint256    |                                            |
| to           | address    |                                            |

### exactOutputStableSwap

```solidity
function exactOutputStableSwap(address[] path, uint256[] flag, uint256 amountOut, uint256 amountInMax, address to) external payable returns (uint256 amountIn)
```

**参数**

| 名称        | 类型       | 描述                                       |
| ----------- | ---------- | ------------------------------------------ |
| path        | address\[] |                                            |
| flag        | uint256\[] | 稳定币交换池中的代币数量。2 表示 2pool，3 表示 3pool          |
| amountOut   | uint256    |                                            |
| amountInMax | uint256    |                                            |
| to          | address    |                                            |