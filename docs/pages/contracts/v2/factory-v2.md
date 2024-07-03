# Factory v2

:::warning
PancakeSwap 基于 Uniswap v2。请阅读 [Uniswap v2 文档](https://docs.uniswap.org/contracts/v2/overview)。\
有关核心合约逻辑的更深入信息，请阅读 [Uniswap v2 核心白皮书](https://uniswap.org/whitepaper.pdf)。
:::

## 合约信息

**合约名称：** PancakeFactory

在 [GitHub 上查看 PancakeFactory.sol](https://github.com/pancakeswap/pancake-contracts/blob/master/projects/exchange-protocol/contracts/PancakeFactory.sol)。

| 公链     | 地址                                        |
| -------- | ------------------------------------------ |
| BSC      | 0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73 |
| ETH      | 0x1097053Fd2ea711dad45caCcc45EfF7548fCB362 |
| zkEVM    | 0x02a84c1b3BBD7401a5f7fa98a384EBC70bB5749E |
| zkSync   | 0xd03D8D566183F0086d8D09A84E1e30b58Dd5619d |
| Arbitrum | 0x02a84c1b3BBD7401a5f7fa98a384EBC70bB5749E |
| Linea    | 0x02a84c1b3BBD7401a5f7fa98a384EBC70bB5749E |
| Base     | 0x02a84c1b3BBD7401a5f7fa98a384EBC70bB5749E |
| opBNB    | 0x02a84c1b3BBD7401a5f7fa98a384EBC70bB5749E |

## 读取函数

### getPair

`function getPair(address tokenA, address tokenB) external view returns (address pair);`

传入 `tokenA` 和 `tokenB` 的地址，返回对应的配对合约地址（如果存在）。

`tokenA` 和 `tokenB` 的顺序可互换。

如果不存在配对，返回 `0x0000000000000000000000000000000000000000` 地址。

### allPairs

`function allPairs(uint) external view returns (address pair);`

返回由工厂合约创建的第 `n` 个配对 (`0` 索引)。

如果配对尚未创建，返回 `0x0000000000000000000000000000000000000000`。

第一个创建的配对索引从 `0` 开始。

### allPairsLength

`function allPairsLength() external view returns (uint);`

显示当前通过工厂合约创建的配对数量，以整数形式返回。

### feeTo

`function feeTo() external view returns (address);`

非 LP 持有人费用的接收地址。

### feeToSetter

`function feeToSetter() external view returns (address);`

有权限设置 `feeTo` 地址的人。

## 写入函数

### createPair

`function createPair(address tokenA, address tokenB) external returns (address pair);`

为 `tokenA` 和 `tokenB` 创建配对（如果配对不存在）。

`tokenA` 和 `tokenB` 的顺序可互换。

触发 `PairCreated` 事件（见事件）。

### setFeeTo

设置 `feeTo` 地址。

### setFeeToSetter

设置有权限调整 `feeTo` 的地址。

## 事件

### PairCreated

`event PairCreated(address indexed token0, address indexed token1, address pair, uint);`

当 `createPair` 创建新配对时触发。

`token0` 将在排序顺序中位于 `token1` 之前。

最终的 `uint` 日志值将是第一个创建的配对为 `1`，第二个为 `2`，依此类推。

## 接口

```solidity
import '@uniswap/v2-core/contracts/interfaces/IPancakeFactory.sol';
```

```solidity
pragma solidity =0.5.16;


interface IPancakeFactory {
    event PairCreated(address indexed token0, address indexed token1, address pair, uint);

    function feeTo() external view returns (address);
    function feeToSetter() external view returns (address);

    function getPair(address tokenA, address tokenB) external view returns (address pair);
    function allPairs(uint) external view returns (address pair);
    function allPairsLength() external view returns (uint);

    function createPair(address tokenA, address tokenB) external returns (address pair);

    function setFeeTo(address) external;
    function setFeeToSetter(address) external;
}
```