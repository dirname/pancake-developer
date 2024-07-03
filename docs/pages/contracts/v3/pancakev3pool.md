# PancakeV3Pool

## Solidity API

### factory

```solidity
address factory
```

部署池子的合约，必须符合 IPancakeV3Factory 接口

**返回值**

### token0

```solidity
address token0
```

池子中两种代币中排序在前的代币

**返回值**

### token1

```solidity
address token1
```

池子中两种代币中排序在后的代币

**返回值**

### fee

```solidity
uint24 fee
```

池子的小费率，以百分之一 BIP 表示，即 1e-6

**返回值**

### tickSpacing

```solidity
int24 tickSpacing
```

池子的 tick 间隔

_Tick 只能在此值的倍数处使用，最小值为 1 并且始终为正。例如：一个 tickSpacing 为 3 的池子表示 tick 只能每隔 3 个初始化一次，即 ..., -6, -3, 0, 3, 6, ... 为 int24 是为了避免强制类型转换，即使这个值始终是正数。_

**返回值**

### maxLiquidityPerTick

```solidity
uint128 maxLiquidityPerTick
```

任意 tick 区间中可使用的最大流动性头寸量

_此参数在每个 tick 上都是强制执行的，以防止流动性在任意时刻溢出 uint128，并且还可以防止不可用范围内的流动性被用来增加池子中的可用流动性。_

**返回值**

### PROTOCOL_FEE_SP

```solidity
uint32 PROTOCOL_FEE_SP
```

### PROTOCOL_FEE_DENOMINATOR

```solidity
uint256 PROTOCOL_FEE_DENOMINATOR
```

### Slot0

```solidity
struct Slot0 {
  uint160 sqrtPriceX96;
  int24 tick;
  uint16 observationIndex;
  uint16 observationCardinality;
  uint16 observationCardinalityNext;
  uint32 feeProtocol;
  bool unlocked;
}
```

### slot0

```solidity
struct PancakeV3Pool.Slot0 slot0
```

池子中的第 0 存储槽包含许多值，并且作为单个方法暴露，以节省外部访问时的 gas。

**返回值**

### feeGrowthGlobal0X128

```solidity
uint256 feeGrowthGlobal0X128
```

整个池子生命周期内每单位流动性收集的 token0 的 Q128.128 费用增长

_这个值可能会溢出 uint256_

### feeGrowthGlobal1X128

```solidity
uint256 feeGrowthGlobal1X128
```

整个池子生命周期内每单位流动性收集的 token1 的 Q128.128 费用增长

_这个值可能会溢出 uint256_

### ProtocolFees

```solidity
struct ProtocolFees {
  uint128 token0;
  uint128 token1;
}
```

### protocolFees

```solidity
struct PancakeV3Pool.ProtocolFees protocolFees
```

协议应得的 token0 和 token1 的数量

_协议费用在任意代币中都不会超过 uint128 最大值_

### liquidity

```solidity
uint128 liquidity
```

池子当前范围内可用的流动性

_这个值与所有 tick 的总流动性没有关系_

### ticks

```solidity
mapping(int24 => struct Tick.Info) ticks
```

查找池子中特定 tick 的信息

**参数**

**返回值**

#### tickBitmap

```solidity
mapping(int16 => uint256) tickBitmap
```

返回 256 位打包的 tick 初始化布尔值。详见 TickBitmap 获取更多信息

### positions

```solidity
mapping(bytes32 => struct Position.Info) positions
```

通过位置键返回有关特定位置的信息

**参数**

**返回值**

#### observations

```solidity
struct Oracle.Observation[65535] observations
```

返回特定观测索引的数据

_您可能更愿意使用 #observe()，而不是此方法来获取某个时间戳之前的数据，不是数组中特定索引的数据。_

**参数**

**返回值**

### lmPool

```solidity
contract IPancakeV3LmPool lmPool
```

### SetLmPoolEvent

```solidity
event SetLmPoolEvent(address addr)
```

### lock

```solidity
modifier lock()
```

_互斥的重入保护装置，用于从一个方法进入池子。这个方法也防止在池子初始化之前对一个函数的进入。由于我们使用余额检查来确定铸造、交换和闪电贷等交互的支付状态，该重入防护装置在合约中是必需的。_

### onlyFactoryOwner

```solidity
modifier onlyFactoryOwner()
```

_仅允许 IPancakeV3Factory#owner() 返回的地址调用该函数_

### constructor

```solidity
constructor() public
```

### _blockTimestamp

```solidity
function _blockTimestamp() internal view virtual returns (uint32)
```

_返回被截断为 32 位的区块时间戳，即 mod 2\*\*32。此方法在测试中被覆盖。_

### snapshotCumulativesInside

```solidity
function snapshotCumulativesInside(int24 tickLower, int24 tickUpper) external view returns (int56 tickCumulativeInside, uint160 secondsPerLiquidityInsideX128, uint32 secondsInside)
```

返回在 tick 范围内的 tick 累积值、每流动性秒数 和 每秒流动性

_快照必须只能与其他快照进行比较，而不是比较因子在期间内计算的快照。即，快照不能被比较，如果在第一个快照拍摄和第二个快照拍摄之间的整个期间内未持有头寸。_

**参数**

| 名称      | 类型  | 描述         |
| --------- | ----- | ------------ |
| tickLower | int24 | 范围的下限 tick |
| tickUpper | int24 | 范围的上限 tick |

**返回值**

| 名称                      | 类型    | 描述                                         |
| -------------------------- | ------- | -------------------------------------------- |
| tickCumulativeInside       | int56   | 该范围内 tick 累积器的快照                   |
| secondsPerLiquidityInsideX128 | uint160 | 该范围内每流动性秒数的快照                  |
| secondsInside              | uint32  | 该范围内每流动性的秒数的快照                |

### observe

```solidity
function observe(uint32[] secondsAgos) external view returns (int56[] tickCumulatives, uint160[] secondsPerLiquidityCumulativeX128s)
```

返回从当前区块时间戳起的每个时间戳 `secondsAgo` 的累积 tick 和流动性

_为了获得时间加权平均 tick 或范围内流动性，您需要用两个值调用这个方法，一个代表该期间的开始，另一个代表该期间结束。例如，要获得过去一小时的时间加权平均 tick，您必须用 `secondsAgos = [3600, 0]` 调用它。时间加权平均 tick 表示池子的几何时间加权平均价格，单位为 sqrt(1.0001) 的 log base 的 token1 / token0 比率。TickMath 库可以用来从 tick 值到比率的转换。_

**参数**

| 名称        | 类型      | 描述                                                                 |
| ---------- | ---------- | ----------------------------------------------------------------- |
| secondsAgos | uint32\[] | 应返回每个`secondsAgo`的累积 tick 和流动性值的时间间隔            |

**返回值**

| 名称                             | 类型       | 描述                                                                                                       |
| -------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------- |
| tickCumulatives                  | int56\[]   | 从当前区块时间戳起的每个 `secondsAgo` 的累积 tick 值                                                      |
| secondsPerLiquidityCumulativeX128s | uint160\[] | 从当前区块时间戳起的每个 `secondsAgo` 的累积秒数范围内流动性值                                           |

### increaseObservationCardinalityNext

```solidity
function increaseObservationCardinalityNext(uint16 observationCardinalityNext) external
```

增加池子将存储的价格和流动性观测的最大数量

_如果池子已经有一个 observationCardinalityNext 大于或等于输入 observationCardinalityNext，则此方法将不起作用。_

**参数**

| 名称                       | 类型   | 描述                                                    |
| -------------------------- | ------ | ----------------------------------------------------- |
| observationCardinalityNext | uint16 | 池子要存储的最小观察数量                               |

### initialize

```solidity
function initialize(uint160 sqrtPriceX96) external
```

设置池子的初始价格

_未加锁，因为它初始化未锁定_

**参数**

| 名称         | 类型    | 描述                                           |
| ------------ | ------- | --------------------------------------------- |
| sqrtPriceX96 | uint160 | 池子的初始 sqrt 价格，以 Q64.96 为单位        |

### ModifyPositionParams

```solidity
struct ModifyPositionParams {
  address owner;
  int24 tickLower;
  int24 tickUpper;
  int128 liquidityDelta;
}
```

### mint

```solidity
function mint(address recipient, int24 tickLower, int24 tickUpper, uint128 amount, bytes data) external returns (uint256 amount0, uint256 amount1)
```

为给定的收款人/tickLower/tickUpper 位置添加流动性

\_noDelegateCall 间接通过 _modifyPosition 应用

**参数**

| 名称      | 类型    | 描述                                          |
| --------- | ------- | --------------------------------------------- |
| recipient | address | 将为其创建流动性的地址                        |
| tickLower | int24   | 添加流动性的位置的下限 tick                   |
| tickUpper | int24   | 添加流动性的位置的上限 tick                   |
| amount    | uint128 | 添加的流动性数量                              |
| data      | bytes   | 在回调时传递的数据                            |

**返回值**

| 名称    | 类型    | 描述                                                                      |
| ------- | ------- | ----------------------------------------------------------------------- |
| amount0 | uint256 | 为铸造给定的流动性数量支付的 token0 的数量。与回调中的值匹配              |
| amount1 | uint256 | 为铸造给定的流动性数量支付的 token1 的数量。与回调中的值匹配              |

### collect

```solidity
function collect(address recipient, int24 tickLower, int24 tickUpper, uint128 amount0Requested, uint128 amount1Requested) external returns (uint128 amount0, uint128 amount1)
```

收集欠头寸的代币

_不重新计算应收取的费用，这必须通过铸造或烧毁任意数量的流动性来完成。Collect 必须由头寸所有者调用。要仅提取 token0 或 token1，可以将 amount0Requested 或 amount1Requested 设置为零。要提取所有欠的代币，调用者可以传递任何大于实际欠款代币的值，例如 type(uint128).max。欠款代币可能来自累计的交换费用或烧毁的流动性。_

**参数**

| 名称             | 类型    | 描述                                            |
| ---------------- | ------- | ---------------------------------------------- |
| recipient        | address | 接收收集到的费用的地址                          |
| tickLower        | int24   | 需要收集费用的位置的下限 tick                   |
| tickUpper        | int24   | 需要收集费用的位置的上限 tick                   |
| amount0Requested | uint128 | 需要从应付费用中提取的 token0 数量              |
| amount1Requested | uint128 | 需要从应付费用中提取的 token1 数量              |

**返回值**

| 名称    | 类型    | 描述                                  |
| ------- | ------- | ------------------------------------ |
| amount0 | uint128 | 收集的 token0 费用的数量             |
| amount1 | uint128 | 收集的 token1 费用的数量             |

### burn

```solidity
function burn(int24 tickLower, int24 tickUpper, uint128 amount) external returns (uint256 amount0, uint256 amount1)
```

将流动性从发送方烧毁并将流动性欠款记入池子头寸

\_noDelegateCall 间接通过 _modifyPosition 应用

**参数**

| 名称      | 类型    | 描述                                          |
| --------- | ------- | --------------------------------------------- |
| tickLower | int24   | 烧毁流动性的位置的下限 tick                   |
| tickUpper | int24   | 烧毁流动性的位置的上限 tick                   |
| amount    | uint128 | 烧毁的流动性数量                              |

**返回值**

| 名称    | 类型    | 描述                                   |
| ------- | ------- | ----------------------------------------- |
| amount0 | uint256 | 发送给收款人的 token0 数量               |
| amount1 | uint256 | 发送给收款人的 token1 数量               |

### SwapCache

```solidity
struct SwapCache {
  uint32 feeProtocol;
  uint128 liquidityStart;
  uint32 blockTimestamp;
  int56 tickCumulative;
  uint160 secondsPerLiquidityCumulativeX128;
  bool computedLatestObservation;
}
```

### SwapState

```solidity
struct SwapState {
  int256 amountSpecifiedRemaining;
  int256 amountCalculated;
  uint160 sqrtPriceX96;
  int24 tick;
  uint256 feeGrowthGlobalX128;
  uint128 protocolFee;
  uint128 liquidity;
}
```

### StepComputations

```solidity
struct StepComputations {
  uint160 sqrtPriceStartX96;
  int24 tickNext;
  bool initialized;
  uint160 sqrtPriceNextX96;
  uint256 amountIn;
  uint256 amountOut;
  uint256 feeAmount;
}
```

### swap

```solidity
function swap(address recipient, bool zeroForOne, int256 amountSpecified, uint160 sqrtPriceLimitX96, bytes data) external returns (int256 amount0, int256 amount1)
```

交换 token0 和 token1，或 token1 和 token0

_该方法的调用者将在回调形式收到 IPancakeV3SwapCallback#pancakeV3SwapCallback_

**参数**

| 名称              | 类型    | 描述                                                                                                                                                                       |
| ----------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| recipient         | address | 收到交换输出的地址                                                                                                                                                            |
| zeroForOne        | bool    | 交换方向，token0 到 token1 为 true，token1 到 token0 为 false                                                                                                               |
| amountSpecified   | int256  | 交换的数量，隐含地配置为确切输入量（正数）或确切输出量（负数）                                                                                                                |
| sqrtPriceLimitX96 | uint160 | Q64.96 的 sqrt 价格限制。如果 zeroForOne，交换后价格不能低于此值。如果 oneForZero，交换后价格不能高于此值                                                                       |
| data              | bytes   | 在回调时传递的任何数据                                                                                                                                                         |

**返回值**

| 名称    | 类型   | 描述                                                                                                             |
| ------- | ------ | ---------------------------------------------------------------------------------------------------------------- |
| amount0 | int256 | 池子中 token0 余额的变化量，负数表示准确金额，正数表示最小金额                                                                                           |
| amount1 | int256 | 池子中 token1 余额的变化量，负数表示准确金额，正数表示最小金额                                                                                           |

### flash

```solidity
function flash(address recipient, uint256 amount0, uint256 amount1, bytes data) external
```

接收 token0 和/或 token1 再加上费用，并在回调中偿还

_此方法的调用者将在回调形式收到 IPancakeV3FlashCallback#pancakeV3FlashCallback。可以传递 0 amount{0,1} 调用回调捐赠基础代币予当前范围内的流动性提供者。_

**参数**

| 名称      | 类型    | 描述                                                  |
| --------- | ------- | ------------------------------------------------------------- |
| recipient | address | 接收 token0 和 token1 数量的地址                           |
| amount0   | uint256 | 发送的 token0 数量                                          |
| amount1   | uint256 | 发送的 token1 数量                                          |
| data      | bytes   | 在回调时传递的任何数据                                      |

### setFeeProtocol

```solidity
function setFeeProtocol(uint32 feeProtocol0, uint32 feeProtocol1) external
```

设置协议的费用比例分母

**参数**

| 名称         | 类型   | 描述                              |
| ------------ | ------ | --------------------------------- |
| feeProtocol0 | uint32 | 池子的 token0 新的协议费用        |
| feeProtocol1 | uint32 | 池子的 token1 新的协议费用        |

### collectProtocol

```solidity
function collectProtocol(address recipient, uint128 amount0Requested, uint128 amount1Requested) external returns (uint128 amount0, uint128 amount1)
```

收集池子累计的协议费用

**参数**

| 名称             | 类型    | 描述                                                                 |
| ---------------- | ------- | --------------------------------------------------------------------------- |
| recipient        | address | 应收集协议费用的地址                                                       |
| amount0Requested | uint128 | 发送的最大 token0 数量，可以是 0 以仅收集 token1 的费用                    |
| amount1Requested | uint128 | 发送的最大 token1 数量，可以是 0 以仅收集 token0 的费用                    |

**返回值**

| 名称    | 类型    | 描述                                |
| ------- | ------- | ------------------------------------ |
| amount0 | uint128 | 收集到的协议费用 token0 数量         |
| amount1 | uint128 | 收集到的协议费用 token1 数量         |

### setLmPool

```solidity
function setLmPool(contract IPancakeV3LmPool _lmPool) external
```