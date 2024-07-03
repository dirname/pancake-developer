# MasterChef V3

## Solidity API

MasterChefV3 用于向 PancakeSwapV3 池提供 CAKE 发行。

### PoolInfo

```solidity
struct PoolInfo {
  uint256 allocPoint;
  contract IPancakeV3Pool v3Pool;
  address token0;
  address token1;
  uint24 fee;
  uint256 totalLiquidity;
  uint256 totalBoostLiquidity;
}
```

### UserPositionInfo

```solidity
struct UserPositionInfo {
  uint128 liquidity;
  uint128 boostLiquidity;
  int24 tickLower;
  int24 tickUpper;
  uint256 rewardGrowthInside;
  uint256 reward;
  address user;
  uint256 pid;
  uint256 boostMultiplier;
}
```

### poolLength

```solidity
uint256 poolLength
```

### poolInfo

```solidity
mapping(uint256 => struct MasterChefV3.PoolInfo) poolInfo
```

每个 MCV3 池的信息。

### userPositionInfos

```solidity
mapping(uint256 => struct MasterChefV3.UserPositionInfo) userPositionInfos
```

userPositionInfos[tokenId] => UserPositionInfo

_tokenId 是唯一的，我们可以通过 tokenId 查询 pid。_

### v3PoolPid

```solidity
mapping(address => mapping(address => mapping(uint24 => uint256))) v3PoolPid
```

v3PoolPid[token0][token1][fee] => pid

### v3PoolAddressPid

```solidity
mapping(address => uint256) v3PoolAddressPid
```

v3PoolAddressPid[v3PoolAddress] => pid

### CAKE

```solidity
contract IERC20 CAKE
```

CAKE 合约地址。

### WETH

```solidity
address WETH
```

WETH 合约地址。

### receiver

```solidity
address receiver
```

接收者合约地址。

### nonfungiblePositionManager

```solidity
contract INonfungiblePositionManager nonfungiblePositionManager
```

### LMPoolDeployer

```solidity
contract ILMPoolDeployer LMPoolDeployer
```

流动性挖矿池部署者合约地址。

### FARM\_BOOSTER

```solidity
contract IFarmBooster FARM_BOOSTER
```

农场加速器合约地址。

### emergency

```solidity
bool emergency
```

仅用于紧急情况。

### totalAllocPoint

```solidity
uint256 totalAllocPoint
```

总分配点数。必须是所有池的分配点数之和。

### latestPeriodNumber

```solidity
uint256 latestPeriodNumber
```

### latestPeriodStartTime

```solidity
uint256 latestPeriodStartTime
```

### latestPeriodEndTime

```solidity
uint256 latestPeriodEndTime
```

### latestPeriodCakePerSecond

```solidity
uint256 latestPeriodCakePerSecond
```

### operatorAddress

```solidity
address operatorAddress
```

运营者地址。

### PERIOD\_DURATION

```solidity
uint256 PERIOD_DURATION
```

默认的周期时长。

### MAX\_DURATION

```solidity
uint256 MAX_DURATION
```

### MIN\_DURATION

```solidity
uint256 MIN_DURATION
```

### PRECISION

```solidity
uint256 PRECISION
```

### BOOST\_PRECISION

```solidity
uint256 BOOST_PRECISION
```

基本的加速因子，未加速用户的加速因子。

### MAX\_BOOST\_PRECISION

```solidity
uint256 MAX_BOOST_PRECISION
```

最大加速因子的硬限制，必须大于 BOOST_PRECISION。

### Q128

```solidity
uint256 Q128
```

### MAX\_U256

```solidity
uint256 MAX_U256
```

### cakeAmountBelongToMC

```solidity
uint256 cakeAmountBelongToMC
```

记录属于 MasterChefV3 的 CAKE 数量。

### ZeroAddress

```solidity
error ZeroAddress()
```

### NotOwnerOrOperator

```solidity
error NotOwnerOrOperator()
```

### NoBalance

```solidity
error NoBalance()
```

### NotPancakeNFT

```solidity
error NotPancakeNFT()
```

### InvalidNFT

```solidity
error InvalidNFT()
```

### NotOwner

```solidity
error NotOwner()
```

### NoLiquidity

```solidity
error NoLiquidity()
```

### InvalidPeriodDuration

```solidity
error InvalidPeriodDuration()
```

### NoLMPool

```solidity
error NoLMPool()
```

### InvalidPid

```solidity
error InvalidPid()
```

### DuplicatedPool

```solidity
error DuplicatedPool(uint256 pid)
```

### NotEmpty

```solidity
error NotEmpty()
```

### WrongReceiver

```solidity
error WrongReceiver()
```

### InconsistentAmount

```solidity
error InconsistentAmount()
```

### InsufficientAmount

```solidity
error InsufficientAmount()
```

### Init

```solidity
event Init()
```

### AddPool

```solidity
event AddPool(uint256 pid, uint256 allocPoint, contract IPancakeV3Pool v3Pool, contract ILMPool lmPool)
```

### SetPool

```solidity
event SetPool(uint256 pid, uint256 allocPoint)
```

### Deposit

```solidity
event Deposit(address from, uint256 pid, uint256 tokenId, uint256 liquidity, int24 tickLower, int24 tickUpper)
```

### Withdraw

```solidity
event Withdraw(address from, address to, uint256 pid, uint256 tokenId)
```

### UpdateLiquidity

```solidity
event UpdateLiquidity(address from, uint256 pid, uint256 tokenId, int128 liquidity, int24 tickLower, int24 tickUpper)
```

### NewOperatorAddress

```solidity
event NewOperatorAddress(address operator)
```

### NewLMPoolDeployerAddress

```solidity
event NewLMPoolDeployerAddress(address deployer)
```

### NewReceiver

```solidity
event NewReceiver(address receiver)
```

### NewPeriodDuration

```solidity
event NewPeriodDuration(uint256 periodDuration)
```

### Harvest

```solidity
event Harvest(address sender, address to, uint256 pid, uint256 tokenId, uint256 reward)
```

### NewUpkeepPeriod

```solidity
event NewUpkeepPeriod(uint256 periodNumber, uint256 startTime, uint256 endTime, uint256 cakePerSecond, uint256 cakeAmount)
```

### UpdateUpkeepPeriod

```solidity
event UpdateUpkeepPeriod(uint256 periodNumber, uint256 oldEndTime, uint256 newEndTime, uint256 remainingCake)
```

### UpdateFarmBoostContract

```solidity
event UpdateFarmBoostContract(address farmBoostContract)
```

### SetEmergency

```solidity
event SetEmergency(bool emergency)
```

### onlyOwnerOrOperator

```solidity
modifier onlyOwnerOrOperator()
```

### onlyValidPid

```solidity
modifier onlyValidPid(uint256 _pid)
```

### onlyReceiver

```solidity
modifier onlyReceiver()
```

### onlyBoostContract

```solidity
modifier onlyBoostContract()
```

_调用方不是加速合约时抛出。_

### constructor

```solidity
constructor(contract IERC20 _CAKE, contract INonfungiblePositionManager _nonfungiblePositionManager, address _WETH) public
```

**参数**

| 名称                        | 类型                                 | 描述                             |
| --------------------------- | ------------------------------------ | -------------------------------- |
| \_CAKE                      | contract IERC20                      | CAKE 代币合约地址                |
| \_nonfungiblePositionManager | contract INonfungiblePositionManager | NFT 头寸管理器合约地址           |
| \_WETH                      | address                              |                                 |

### getLatestPeriodInfoByPid

```solidity
function getLatestPeriodInfoByPid(uint256 _pid) public view returns (uint256 cakePerSecond, uint256 endTime)
```

返回每秒的 cake 数量，周期结束时间。

**参数**

| 名称  | 类型    | 描述        |
| ----- | ------- | ----------- |
| \_pid | uint256 | 池的 pid。  |

### getLatestPeriodInfo

```solidity
function getLatestPeriodInfo(address _v3Pool) public view returns (uint256 cakePerSecond, uint256 endTime)
```

返回每秒的 cake 数量，周期结束时间。适用于流动性挖矿池。

**参数**

| 名称     | 类型    | 描述               |
| -------- | ------- | ------------------ |
| \_v3Pool | address | V3 池的地址。      |

### pendingCake

```solidity
function pendingCake(uint256 _tokenId) external view returns (uint256 reward)
```

查看待领取的 CAKE 奖励。

_待领取的 cake 数量基于 LMPool 的最后状态。实际数量将在流动性变化或收获时发生。_

**参数**

| 名称      | 类型    | 描述               |
| --------- | ------- | ----------------- |
| \_tokenId | uint256 | NFT 的 Token Id。 |

### setEmergency

```solidity
function setEmergency(bool _emergency) external
```

仅用于紧急情况。

### setReceiver

```solidity
function setReceiver(address _receiver) external
```

### setLMPoolDeployer

```solidity
function setLMPoolDeployer(contract ILMPoolDeployer _LMPoolDeployer) external
```

### add

```solidity
function add(uint256 _allocPoint, contract IPancakeV3Pool _v3Pool, bool _withUpdate) external
```

添加一个新的池。仅允许所有者调用。一个 v3 池只能创建一个池。

**参数**

| 名称         | 类型                    | 描述                                   |
| ------------ | ----------------------- | -------------------------------------- |
| \_allocPoint | uint256                 | 新池的分配点数                         |
| \_v3Pool     | contract IPancakeV3Pool | V3 池的地址。                          |
| \_withUpdate | bool                    | 是否调用 “massUpdatePools” 操作。      |

### set

```solidity
function set(uint256 _pid, uint256 _allocPoint, bool _withUpdate) external
```

更新指定池的 CAKE 分配点数。只能由所有者调用。

**参数**

| 名称         | 类型    | 描述                                   |
| ------------ | ------- | -------------------------------------- |
| \_pid        | uint256 | 池的 id。见 `poolInfo`。               |
| \_allocPoint | uint256 | 池的新分配点数                         |
| \_withUpdate | bool    | 是否调用 “massUpdatePools” 操作。      |

### DepositCache

```solidity
struct DepositCache {
  address token0;
  address token1;
  uint24 fee;
  int24 tickLower;
  int24 tickUpper;
  uint128 liquidity;
}
```

### onERC721Received

```solidity
function onERC721Received(address, address _from, uint256 _tokenId, bytes) external returns (bytes4)
```

接收到 ERC721 时

### harvest

```solidity
function harvest(uint256 _tokenId, address _to) external returns (uint256 reward)
```

从池中收获 CAKE。

**参数**

| 名称      | 类型    | 描述               |
| --------- | ------- | ----------------- |
| \_tokenId | uint256 | NFT 的 Token Id。 |
| \_to      | address | 接收地址。         |

### harvestOperation

```solidity
function harvestOperation(struct MasterChefV3.UserPositionInfo positionInfo, uint256 _tokenId, address _to) internal returns (uint256 reward)
```

### withdraw

```solidity
function withdraw(uint256 _tokenId, address _to) external returns (uint256 reward)
```

从池中提取 LP 代币。

**参数**

| 名称      | 类型    | 描述                              |
| --------- | ------- | -------------------------------- |
| \_tokenId | uint256 | 要存入的 NFT 的 Token Id。      |
| \_to      | address | 提取 NFT 代币的接收地址。         |

### updateLiquidity

```solidity
function updateLiquidity(uint256 _tokenId) external
```

更新 NFT 头寸的流动性。

**参数**

| 名称      | 类型    | 描述                         |
| --------- | ------- | --------------------------- |
| \_tokenId | uint256 | 要更新的 NFT 的 Token Id。 |

### updateBoostMultiplier

```solidity
function updateBoostMultiplier(uint256 _tokenId, uint256 _newMultiplier) external
```

更新 NFT 头寸的农场加速倍数。

**参数**

| 名称            | 类型    | 描述                         |
| --------------- | ------- | ---------------------------- |
| \_tokenId       | uint256 | 要更新的 NFT 的 Token Id。  |
| \_newMultiplier | uint256 | 新的加速倍数。               |

### updateLiquidityOperation

```solidity
function updateLiquidityOperation(struct MasterChefV3.UserPositionInfo positionInfo, uint256 _tokenId, uint256 _newMultiplier) internal
```

### increaseLiquidity

```solidity
function increaseLiquidity(struct INonfungiblePositionManagerStruct.IncreaseLiquidityParams params) external payable returns (uint128 liquidity, uint256 amount0, uint256 amount1)
```

增加头寸中的流动性，代币由 `msg.sender` 支付。

**参数**

| 名称   | 类型                                                             | 描述                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------ | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| params | struct INonfungiblePositionManagerStruct.IncreaseLiquidityParams | tokenId 液增加流动性的 Token 的 ID，amount0Desired 花费的 token0 的期望数量，amount1Desired 花费的 token1 的期望数量，amount0Min 花费的 token0 的最小数量，作为滑点检查，amount1Min 花费的 token1 的最小数量，作为滑点检查，deadline 交易必须包含以生效的时间截止日期 |

**返回值**

| 名称      | 类型    | 描述                                          |
| --------- | ------- | --------------------------------------------- |
| liquidity | uint128 | 增加后的流动性数量                           |
| amount0   | uint256 | 获取增加后的流动性所需的 token0 数量        |
| amount1   | uint256 | 获取增加后的流动性所需的 token1 数量        |

### pay

```solidity
function pay(address _token, uint256 _amount) internal
```

支付。

**参数**

| 名称     | 类型    | 描述                |
| -------- | ------- | ------------------ |
| \_token  | address | 要支付的代币        |
| \_amount | uint256 | 要支付的数量        |

### refund

```solidity
function refund(address _token, uint256 _amount) internal
```

退款。

**参数**

| 名称     | 类型    | 描述                |
| -------- | ------- | ------------------ |
| \_token  | address | 要退款的代币        |
| \_amount | uint256 | 要退款的数量        |

### decreaseLiquidity

```solidity
function decreaseLiquidity(struct INonfungiblePositionManagerStruct.DecreaseLiquidityParams params) external returns (uint256 amount0, uint256 amount1)
```

减少头寸中的流动性，并将其计入该头寸。

**参数**

| 名称   | 类型                                                             | 描述                                                                                                                                                                                                                                                                                                                                                         |
| ------ | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| params | struct INonfungiblePositionManagerStruct.DecreaseLiquidityParams | tokenId 流动性减少的 Token 的 ID，amount 将减少的流动性数量，amount0Min 为烧毁的流动性账户最小数量的 token0，amount1Min 为烧毁的流动性账户最小数量的 token1，deadline 交易必须包含以生效的时间截止日期。 |

**返回值**

| 名称    | 类型    | 描述                                                   |
| ------- | ------- | ------------------------------------------------------ |
| amount0 | uint256 | 计入该头寸应得的 token0 数量                           |
| amount1 | uint256 | 计入该头寸应得的 token1 数量                           |

### collect

```solidity
function collect(struct INonfungiblePositionManagerStruct.CollectParams params) external returns (uint256 amount0, uint256 amount1)
```

收集指定头寸中最多的费用到接收者。

_警告!!! 请确保在设置接收者地址为(0)时使用 multicall 调用 unwrapWETH9 或 sweepToken，否则你将丢失资金。amount0Max 收集的 token0 的最大数量，amount1Max 收集的 token1 的最大数量_

**参数**

| 名称   | 类型                                                   | 描述                                                                                                                                                                            |
| ------ | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| params | struct INonfungiblePositionManagerStruct.CollectParams | tokenId 正在收集的 NFT 的 ID，recipient 应接收代币的账户 |

**返回值**

| 名称    | 类型    | 描述                            |
| ------- | ------- | ------------------------------- |
| amount0 | uint256 | 收集的 token0 的费用数量        |
| amount1 | uint256 | 收集的 token1 的费用数量        |

### collectTo

```solidity
function collectTo(struct INonfungiblePositionManagerStruct.CollectParams params, address to) external returns (uint256 amount0, uint256 amount1)
```

收集费用和退款。

### transferToken

```solidity
function transferToken(address _token, address _to) internal
```

从 MasterChef V3 转移 token。

**参数**

| 名称    | 类型    | 描述                           |
| ------- | ------- | ---------------------------- |
| \_token | address | 要转移的代币。               |
| \_to    | address | 接收地址。                         |

### unwrapWETH9

```solidity
function unwrapWETH9(uint256 amountMinimum, address recipient) external
```

将合约中的 WETH9 解包并作为 ETH 发送给接收者。

_amountMinimum 参数防止恶意合约窃取用户的 WETH9。_

**参数**

| 名称          | 类型    | 描述                                   |
| ------------- | ------- | -------------------------------------- |
| amountMinimum | uint256 | 要解包的 WETH9 最小数量                |
| recipient     | address | 接收 ETH 的地址                        |

### sweepToken

```solidity
function sweepToken(address token, uint256 amountMinimum, address recipient) external