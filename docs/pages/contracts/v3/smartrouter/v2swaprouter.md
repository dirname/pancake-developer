---
description: 无状态执行 PancakeSwap V2 上的交换的路由器
---

# V2SwapRouter

## Solidity API

### swapExactTokensForTokens

```solidity
function swapExactTokensForTokens(uint256 amountIn, uint256 amountOutMin, address[] path, address to) external payable returns (uint256 amountOut)
```

将 `amountIn` 的一种代币换成尽可能多的另一种代币

_将 `amountIn` 设置为 0 会使合约查找其自身的余额，并交换全部金额，这使合约可以在调用此函数之前发送代币。_

**参数**

|