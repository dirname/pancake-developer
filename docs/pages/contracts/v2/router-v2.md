# Router v2

:::warning
PancakeSwap 基于 Uniswap v2。阅读 [Uniswap v2 文档](https://docs.uniswap.org/contracts/v2/overview)。\
有关核心合约逻辑的更深入信息，请阅读 [Uniswap v2 核心白皮书](https://github.com/Uniswap/docs/blob/main/static/whitepaper.pdf)。
:::

## 合约信息

**合约名称:** PancakeRouter

查看 [PancakeRouter.sol on GitHub](https://github.com/pancakeswap/pancake-smart-contracts/blob/master/projects/exchange-protocol/contracts/PancakeRouter.sol)。

| 链      | 地址                                          |
| ------- | --------------------------------------------- |
| BSC     | 0x10ED43C718714eb63d5aA57B78B54704E256024E    |
| ETH     | 0xEfF92A263d31888d860bD50809A8D171709b7b1c    |
| zkEVM   | 0x8cFe327CEc66d1C090Dd72bd0FF11d690C33a2Eb    |
| zkSync  | 0x5aEaF2883FBf30f3D62471154eDa3C0c1b05942d    |
| Arbitrum| 0x8cFe327CEc66d1C090Dd72bd0FF11d690C33a2Eb    |
| Linea   | 0x8cFe327CEc66d1C090Dd72bd0FF11d690C33a2Eb    |
| Base    | 0x8cFe327CEc66d1C090Dd72bd0FF11d690C33a2Eb    |
| opBNB   | 0x8cFe327CEc66d1C090Dd72bd0FF11d690C33a2Eb    |

## 读取函数

### WETH

`function WETH() external pure returns (address);`

返回 [Binance: WBNB token](https://bscscan.com/address/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c) 的标准地址（WETH 源自以太坊网络）。

### factory

`function factory() external pure returns (address);`

返回 [PancakeFactory](https://bscscan.com/address/0xca143ce32fe78f1f7019d7d551a6402fc5350c73) 的标准地址。

:::warning
相关内容说明，请查看 [Uniswap v2 内部函数文档](https://uniswap.org/docs/v2/smart-contracts/library/#internal-functions)。
:::

### getAmountOut

`function getAmountOut(uint amountIn, uint reserveIn, uint reserveOut) internal pure returns (uint amountOut);`

### getAmountIn

`function getAmountIn(uint amountOut, uint reserveIn, uint reserveOut) internal pure returns (uint amountIn);`

### getAmountsOut

`function getAmountsOut(uint amountIn, address[] memory path) internal view returns (uint[] memory amounts);`

### getAmountsIn

`function getAmountsIn(uint amountOut, address[] memory path) internal view returns (uint[] memory amounts);`

### quote

`function quote(uint amountA, uint reserveA, uint reserveB) internal pure returns (uint amountB);`

## 写入函数

### addLiquidity

```solidity
function addLiquidity(
  address tokenA,
  address tokenB,
  uint amountADesired,
  uint amountBDesired,
  uint amountAMin,
  uint amountBMin,
  address to,
  uint deadline
) external returns (uint amountA, uint amountB, uint liquidity);
```

向 BEP20⇄BEP20 池中添加流动性。

| 名称           | 类型      | 描述                                         |
| -------------- | --------- | -------------------------------------------- |
| tokenA         | `address` | 流动性对中其中一个代币的合约地址。           |
| tokenB         | `address` | 流动性对中另一个代币的合约地址。             |
| amountADesired | `uint`    | 你希望提供的 tokenA 数量。                   |
| amountBDesired | `uint`    | 你希望提供的 tokenB 数量。                   |
| amountAMin     | `uint`    | 最少提供的 tokenA 数量（滑点影响）。         |
| amountBMin     | `uint`    | 最少提供的 tokenB 数量（滑点影响）。         |
| to             | `address` | LP 代币接收者的地址。                        |
| deadline       | `uint`    | 交易确认的最后期限时间戳。                   |

### addLiquidityETH

```solidity
function addLiquidityETH(
  address token,
  uint amountTokenDesired,
  uint amountTokenMin,
  uint amountETHMin,
  address to,
  uint deadline
) external payable returns (uint amountToken, uint amountETH, uint liquidity);
```

向 BEP20⇄WBNB 池中添加流动性。

| 名称               | 类型      | 描述                                                |
| ------------------ | --------- | --------------------------------------------------- |
| addLiquidityETH    | `uint`    | 以 BNB 支付的金额。                                 |
| token              | `address` | 添加流动性的代币合约地址。                          |
| amountTokenDesired | `uint`    | 你希望提供的代币数量。                              |
| amountTokenMin     | `uint`    | 最少提供的代币数量（滑点影响）。                    |
| amountETHMin       | `uint`    | 最少提供的 BNB 数量（滑点影响）。                   |
| to                 | `address` | LP 代币接收者的地址。                               |
| deadline           | `uint`    | 交易确认的最后期限时间戳。                          |

### removeLiquidity

```solidity
function removeLiquidity(
  address tokenA,
  address tokenB,
  uint liquidity,
  uint amountAMin,
  uint amountBMin,
  address to,
  uint deadline
) external returns (uint amountA, uint amountB);
```

从 BEP20⇄BEP20 池中移除流动性。

| 名称       | 类型      | 描述                                         |
| ---------- | --------- | -------------------------------------------- |
| tokenA     | `address` | 流动性对中其中一个代币的合约地址。           |
| tokenB     | `address` | 流动性对中另一个代币的合约地址。             |
| liquidity  | `uint`    | 要移除的 LP 代币数量。                       |
| amountAMin | `uint`    | 最少移除的 tokenA 数量（滑点影响）。         |
| amountBMin | `uint`    | 最少移除的 tokenB 数量（滑点影响）。         |
| to         | `address` | LP 代币接收者的地址。                        |
| deadline   | `uint`    | 交易确认的最后期限时间戳。                   |

### removeLiquidityETH

```solidity
function removeLiquidityETH(
  address token,
  uint liquidity,
  uint amountTokenMin,
  uint amountETHMin,
  address to,
  uint deadline
) external returns (uint amountToken, uint amountETH);
```

从 BEP20⇄WBNB 池中移除流动性。

| 名称           | 类型      | 描述                                                |
| -------------- | --------- | --------------------------------------------------- |
| token          | `address` | 移除流动性的代币合约地址。                          |
| liquidity      | `uint`    | 要移除的 LP 代币数量。                              |
| amountTokenMin | `uint`    | 最少移除的代币数量（滑点影响）。                    |
| amountETHMin   | `uint`    | 最少移除的 BNB 数量（滑点影响）。                   |
| to             | `address` | LP 代币接收者的地址。                               |
| deadline       | `uint`    | 交易确认的最后期限时间戳。                          |

### removeLiquidityETHSupportingFeeOnTransferTokens

```solidity
function removeLiquidityETHSupportingFeeOnTransferTokens(
  address token,
  uint liquidity,
  uint amountTokenMin,
  uint amountETHMin,
  address to,
  uint deadline
) external returns (uint amountETH);
```

从对手续费的 BEP20⇄WBNB 池中移除流动性。

| 名称           | 类型      | 描述                                                |
| -------------- | --------- | --------------------------------------------------- |
| token          | `address` | 移除流动性的代币合约地址。                          |
| liquidity      | `uint`    | 要移除的 LP 代币数量。                              |
| amountTokenMin | `uint`    | 最少移除的代币数量（滑点影响）。                    |
| amountETHMin   | `uint`    | 最少移除的 BNB 数量（滑点影响）。                   |
| to             | `address` | LP 代币接收者的地址。                               |
| deadline       | `uint`    | 交易确认的最后期限时间戳。                          |

### removeLiquidityETHWithPermit

```solidity
function removeLiquidityETHWithPermit(
  address token,
  uint liquidity,
  uint amountTokenMin,
  uint amountETHMin,
  address to,
  uint deadline,
  bool approveMax, uint8 v, bytes32 r, bytes32 s
) external returns (uint amountToken, uint amountETH);
```

通过许可，从 BEP20⇄WBNB 中移除流动性并接收 BNB，无需预批准。。

| 名称           | 类型      | 描述                                                                 |
| -------------- | --------- | ------------------------------------------------------------------- |
| token          | `address` | 移除流动性的代币合约地址。                                          |
| liquidity      | `uint`    | 要移除的 LP 代币数量。                                              |
| amountTokenMin | `uint`    | 最少移除的代币数量（滑点影响）。                                    |
| amountETHMin   | `uint`    | 最少移除的 BNB 数量（滑点影响）。                                   |
| to             | `address` | LP 代币接收者的地址。                                               |
| deadline       | `uint`    | 交易确认的最后期限时间戳。                                          |
| approveMax     | `bool`    | 签名中的批准数量是否用于流动性或 `uint(-1)` 全额授权。              |
| v              | `uint8`   | 许可签名的 v 组件。                                                 |
| r              | `bytes32` | 许可签名的 r 组件。                                                 |
| s              | `bytes32` | 许可签名的 s 组件。                                                 |

### removeLiquidityETHWithPermitSupportingFeeOnTransferTokens

```solidity
function removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(
  address token,
  uint liquidity,
  uint amountTokenMin,
  uint amountETHMin,
  address to,
  uint deadline,
  bool approveMax, uint8 v, bytes32 r, bytes32 s
) external returns (uint amountETH);
```

通过许可，从对手续费的 BEP20⇄WBNB 中移除流动性并接收 BNB。

| 名称           | 类型      | 描述                                                                     |
| -------------- | --------- | ------------------------------------------------------------------------ |
| token          | `address` | 移除流动性的代币合约地址。                                               |
| liquidity      | `uint`    | 要移除的 LP 代币数量。                                                   |
| amountTokenMin | `uint`    | 最少移除的代币数量（滑点影响）。                                         |
| amountETHMin   | `uint`    | 最少移除的 BNB 数量（滑点影响）。                                        |
| to             | `address` | LP 代币接收者的地址。                                                    |
| deadline       | `uint`    | 交易确认的最后期限时间戳。                                               |
| approveMax     | `bool`    | 签名中的批准数量是否用于流动性或 `uint(-1)` 全额授权。                   |
| v              | `uint8`   | 许可签名的 v 组件。                                                      |
| r              | `bytes32` | 许可签名的 r 组件。                                                      |
| s              | `bytes32` | 许可签名的 s 组件。                                                      |

### removeLiquidityWithPermit

```solidity
function removeLiquidityWithPermit(
  address tokenA,
  address tokenB,
  uint liquidity,
  uint amountAMin,
  uint amountBMin,
  address to,
  uint deadline,
  bool approveMax, uint8 v, bytes32 r, bytes32 s
) external returns (uint amountA, uint amountB);
```

通过许可，从 BEP20⇄BEP20 移除流动性，无需预批准。

| 名称           | 类型      | 描述                                                                 |
| -------------- | --------- | ------------------------------------------------------------------- |
| tokenA         | `address` | 流动性对中其中一个代币的合约地址。                                   |
| tokenB         | `address` | 流动性对中另一个代币的合约地址。                                     |
| liquidity      | `uint`    | 要移除的 LP 代币数量。                                              |
| amountTokenMin | `uint`    | 最少移除的代币数量（滑点影响）。                                    |
| amountETHMin   | `uint`    | 最少移除的 BNB 数量（滑点影响）。                                   |
| to             | `address` | LP 代币接收者的地址。                                               |
| deadline       | `uint`    | 交易确认的最后期限时间戳。                                          |
| approveMax     | `bool`    | 签名中的批准数量是否用于流动性或 `uint(-1)` 全额授权。              |
| v              | `uint8`   | 许可签名的 v 组件。                                                 |
| r              | `bytes32` | 许可签名的 r 组件。                                                 |
| s              | `bytes32` | 许可签名的 s 组件。                                                 |

### swapETHForExactTokens

```solidity
function swapETHForExactTokens(uint amountOut, address[] calldata path, address to, uint deadline)
  external
  payable
  returns (uint[] memory amounts);
```

用尽可能少的 BNB 交换准确数量的输出代币。

| 名称                  | 类型      | 描述                                                                                                                  |
| --------------------- | --------- | --------------------------------------------------------------------------------------------------------------------- |
| swapETHForExactTokens | `uint`    | 支付的 BNB 数量。                                                                                                      |
| amountOut             | `uint`    | 要接收的代币数量。                                                                                                    |
| path (address\[])     | `address` | 一个代币地址数组。`path.length` 必须 >= 2。每对连续地址的池必须存在且有流动性。                                       |
| to                    | `address` | 接收者地址。                                                                                                          |
| deadline              | `uint`    | 交易确认的最后期限时间戳。                                                                                            |

### swapExactETHForTokens

```
function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline)
  external
  payable
  returns (uint[] memory amounts);
```

用固定数量的 BNB 尽可能多地交换输出代币。

| 名称                  | 类型      | 描述                                                                                                                  |
| --------------------- | --------- | --------------------------------------------------------------------------------------------------------------------- |
| swapExactETHForTokens | `uint`    | 支付的 BNB 数量。                                                                                                      |
| amountOutMin          | `uint`    | 最少接收的代币数量。                                                                                                |
| path (address\[])     | `address` | 一个代币地址数组。`path.length` 必须 >= 2。每对连续地址的池必须存在且有流动性。                                       |
| to                    | `address` | 接收者地址。                                                                                                          |
| deadline              | `uint`    | 交易确认的最后期限时间戳。                                                                                            |

### swapExactETHForTokensSupportingFeeOnTransferTokens

```solidity
function swapExactETHForTokensSupportingFeeOnTransferTokens(
  uint amountOutMin,
  address[] calldata path,
  address to,
  uint deadline
) external payable;
```

用固定数量的 BNB 尽可能多地交换输出代币。支持对手续费的代币。

| 名称                                               | 类型      | 描述                                                                                                                  |
| -------------------------------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------- |
| swapExactETHForTokensSupportingFeeOnTransferTokens | `uint`    | 支付的 BNB 数量。                                                                                                      |
| amountOutMin                                       | `uint`    | 最少接收的代币数量。                                                                                                |
| path (address\[])                                  | `address` | 一个代币地址数组。`path.length` 必须 >= 2。每对连续地址的池必须存在且有流动性。                                       |
| to                                                 | `address` | 接收者地址。                                                                                                          |
| deadline                                           | `uint`    | 交易确认的最后期限时间戳。                                                                                            |

### swapExactTokensForETH

```
function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)
  external
  returns (uint[] memory amounts);
```

用固定数量的输入代币尽可能多地交换 BNB。

| 名称              | 类型      | 描述                                                                                                                  |
| ----------------- | --------- | --------------------------------------------------------------------------------------------------------------------- |
| amountIn          | `uint`    | 输入代币的固定金额。                                                                                                   |
| amountOutMin      | `uint`    | 最少接收的 BNB 数量。                                                                                                |
| path (address\[]) | `address` | 一个代币地址数组。`path.length` 必须 >= 2。每对连续地址的池必须存在且有流动性。                                       |
| to                | `address` | 接收者地址。                                                                                                          |
| deadline          | `uint`    | 交易确认的最后期限时间戳。                                                                                            |

### swapExactTokensForETHSupportingFeeOnTransferTokens

```solidity
function swapExactTokensForETHSupportingFeeOnTransferTokens(
  uint amountIn,
  uint amountOutMin,
  address[] calldata path,
  address to,
  uint deadline
) external;
```

用固定数量的代币尽可能多地交换 BNB。支持对手续费的代币。

| 名称