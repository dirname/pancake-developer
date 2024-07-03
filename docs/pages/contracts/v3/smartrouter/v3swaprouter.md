---
description: 基于 PancakeSwap V3 进行无状态交换的路由器
---

# V3SwapRouter

## Solidity API

### SwapCallbackData

```solidity
struct SwapCallbackData {
  bytes path;
  address payer;
}
```

### pancakeV3SwapCallback

```solidity
function pancakeV3SwapCallback(int256 amount0Delta, int256 amount1Delta, bytes _data) external
```

在通过 `IPancakeV3Pool#swap` 执行交换后调用 `msg.sender`。

_在实现中，你必须支付交换所需的池代币。此方法的调用者必须被检查为由 PancakeV3Factory 部署的 PancakeV3Pool。如果没有代币被交换，amount0Delta 和 amount1Delta 都可以为0。_

**参数**

| 名称         | 类型   | 描述                                                                                                                                                   |
| ------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| amount0Delta | int256 | 交换结束时池发送（负）或必须接收（正）的 token0 数量。如果为正，回调必须将该数量的 token0 发送到池中。                                                   |
| amount1Delta | int256 | 交换结束时池发送（负）或必须接收（正）的 token1 数量。如果为正，回调必须将该数量的 token1 发送到池中。                                                   |
| \_data       | bytes  |                                                                                                                                                        |

### exactInputSingle

```solidity
function exactInputSingle(struct IV3SwapRouter.ExactInputSingleParams params) external payable returns (uint256 amountOut)
```

交换 `amountIn` 的一种代币以获取尽可能多的另一种代币

_将 `amountIn` 设为0将导致合约查询其自身的余额，并交换全部金额，从而使合约能够在调用此函数之前发送代币。_

**参数**

| 名称   | 类型                                        | 描述                                                                                   |
| ------ | ------------------------------------------- | -------------------------------------------------------------------------------------- |
| params | struct IV3SwapRouter.ExactInputSingleParams | 交换所需的参数，编码为 calldata 中的 `ExactInputSingleParams`                         |

**返回值**

| 名称      | 类型    | 描述                         |
| --------- | ------- | ---------------------------- |
| amountOut | uint256 | 接收的代币数量               |

### exactInput

```solidity
function exactInput(struct IV3SwapRouter.ExactInputParams params) external payable returns (uint256 amountOut)
```

交换 `amountIn` 的一种代币以沿指定路径尽可能多地获取另一种代币

_将 `amountIn` 设为0将导致合约查询其自身的余额，并交换全部金额，从而使合约能够在调用此函数之前发送代币。_

**参数**

| 名称   | 类型                                   | 描述                                                                                  |
| ------ | -------------------------------------- | ------------------------------------------------------------------------------------- |
| params | struct IV3SwapRouter.ExactInputParams  | 多跳交换所需的参数，编码为 calldata 中的 `ExactInputParams`                           |

**返回值**

| 名称      | 类型    | 描述                         |
| --------- | ------- | ---------------------------- |
| amountOut | uint256 | 接收的代币数量               |

### exactOutputSingle

```solidity
function exactOutputSingle(struct IV3SwapRouter.ExactOutputSingleParams params) external payable returns (uint256 amountIn)
```

以尽可能少的代币交换 `amountOut` 的另一种代币，该代币在交换后可能会留在路由器中。

**参数**

| 名称   | 类型                                             | 描述                                                                                  |
| ------ | ------------------------------------------------ | ------------------------------------------------------------------------------------- |
| params | struct IV3SwapRouter.ExactOutputSingleParams     | 交换所需的参数，编码为 calldata 中的 `ExactOutputSingleParams`                       |

**返回值**

| 名称     | 类型    | 描述                         |
| -------- | ------- | ---------------------------- |
| amountIn | uint256 | 输入的代币数量               |

### exactOutput

```solidity
function exactOutput(struct IV3SwapRouter.ExactOutputParams params) external payable returns (uint256 amountIn)
```

以尽可能少的代币交换沿指定路径（反向）获取 `amountOut` 的另一种代币，该代币在交换后可能会留在路由器中。

**参数**

| 名称   | 类型                                    | 描述                                                                                   |
| ------ | --------------------------------------- | -------------------------------------------------------------------------------------- |
| params | struct IV3SwapRouter.ExactOutputParams  | 多跳交换所需的参数，编码为 calldata 中的 `ExactOutputParams`                           |

**返回值**

| 名称     | 类型    | 描述                         |
| -------- | ------- | ---------------------------- |
| amountIn | uint256 | 输入的代币数量               |