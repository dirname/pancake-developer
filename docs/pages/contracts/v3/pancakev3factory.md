---
description: >-
  部署 PancakeSwap V3 池并管理池协议费用的所有权和控制
---

# PancakeV3Factory

**合约名称:** PancakeFactory

[合约地址](/contracts/v3/addresses#core)

## Solidity API

部署 PancakeSwap V3 池并管理池协议费用的所有权和控制

### owner

```solidity
address owner
```

返回当前工厂的所有者

_可以由当前所有者通过 setOwner 更改_

### poolDeployer

```solidity
address poolDeployer
```

返回当前的池部署者

### feeAmountTickSpacing

```solidity
mapping(uint24 => int24) feeAmountTickSpacing
```

返回给定费用金额的 Tick 间距（如果启用），或 0（如果未启用）

_费用金额不能被移除，因此这个值应该在调用上下文中硬编码或缓存_

### getPool

```solidity
mapping(address => mapping(address => mapping(uint24 => address))) getPool
```

返回给定代币对和费用的池地址，如果不存在则返回地址 0

_tokenA 和 tokenB 可以以任意顺序传递：token0/token1 或 token1/token0_

### feeAmountTickSpacingExtraInfo

```solidity
mapping(uint24 => struct IPancakeV3Factory.TickSpacingExtraInfo) feeAmountTickSpacingExtraInfo
```

返回 Tick 间距的额外信息

_费用金额不能被移除，因此这个值应该在调用上下文中硬编码或缓存_

### constructor

```solidity
constructor(address _poolDeployer) public
```

### createPool

```solidity
function createPool(address tokenA, address tokenB, uint24 fee) external returns (address pool)
```

为给定的两种代币和费用创建一个池

_tokenA 和 tokenB 可以按任意顺序传递：token0/token1 或 token1/token0。tickSpacing 从费用中检索。如果池已存在、费用无效或代币参数无效，则该调用将恢复。_

**参数**

| 名称   | 类型    | 描述                          |
| ------ | ------- | ----------------------------- |
| tokenA | address | 目标池中的其中一个代币        |
| tokenB | address | 目标池中的另一个代币          |
| fee    | uint24  | 目标池的费用                  |

**返回值**

| 名称 | 类型    | 描述                    |
| ---- | ------- | ----------------------- |
| pool | address | 新创建池的地址          |

### setOwner

```solidity
function setOwner(address _owner) external
```

更新工厂的所有者

_必须由当前所有者调用_

**参数**

| 名称    | 类型    | 描述                  |
| ------- | ------- | --------------------- |
| \_owner | address | 工厂的新所有者        |

### enableFeeAmount

```solidity
function enableFeeAmount(uint24 fee, int24 tickSpacing) public
```

启用具有给定 Tick 间距的费用金额

_启用后费用金额不能被移除_

**参数**

| 名称        | 类型   | 描述                                                   |
| ----------- | ------ | ------------------------------------------------------ |
| fee         | uint24 | 要启用的费用金额，以百亿分之一为单位（即 1e-6）        |
| tickSpacing | int24  | 对于使用给定费用金额创建的所有池强制执行的 Tick 间距   |

### setWhiteListAddress

```solidity
function setWhiteListAddress(address user, bool verified) public
```

将一个地址添加到白名单中

_地址可以由所有者使用布尔值 false 更新_

**参数**

| 名称     | 类型    | 描述                             |
| -------- | ------- | -------------------------------- |
| user     | address | 添加到白名单的用户地址           |
| verified | bool    | 是否验证                         |

### setFeeAmountExtraInfo

```solidity
function setFeeAmountExtraInfo(uint24 fee, bool whitelistRequested, bool enabled) public
```

设置费用金额的额外信息

_费用金额的额外信息可以由所有者更新_

**参数**

| 名称               | 类型   | 描述                               |
| ------------------ | ------ | ---------------------------------- |
| fee                | uint24 |                                    |
| whitelistRequested | bool   | 是否只有所有者才能创建的标志       |
| enabled            | bool   | 费用是否启用的标志                 |