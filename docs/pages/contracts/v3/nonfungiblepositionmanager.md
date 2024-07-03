---
description: 将 Pancake V3 头寸包装在 ERC721 非同质化代币接口中
---

# NonfungiblePositionManager

### 合约信息

**合约名称:** NonfungiblePositionManager

[合约地址](/contracts/v3/addresses#periphery)

## Solidity API

### Position

```solidity
struct Position {
  uint96 nonce;
  address operator;
  uint80 poolId;
  int24 tickLower;
  int24 tickUpper;
  uint128 liquidity;
  uint256 feeGrowthInside0LastX128;
  uint256 feeGrowthInside1LastX128;
  uint128 tokensOwed0;
  uint128 tokensOwed1;
}
```

### 构造函数

```solidity
constructor(address _deployer, address _factory, address _WETH9, address _tokenDescriptor_) public
```

### positions

```solidity
function positions(uint256 tokenId) external view returns (uint96 nonce, address operator, address token0, address token1, uint24 fee, int24 tickLower, int24 tickUpper, uint128 liquidity, uint256 feeGrowthInside0LastX128, uint256 feeGrowthInside1LastX128, uint128 tokensOwed0, uint128 tokensOwed1)
```

返回与给定 token ID 相关联的位置信息。

_如果 token ID 无效，则抛出。_

**参数**

| 名称    | 类型    | 描述                                       |
| ------- | ------- | ------------------------------------------ |
| tokenId | uint256 | 表示该位置的 token ID                      |

**返回值**

| 名称                     | 类型    | 描述                                                     |
| ------------------------ | ------- | -------------------------------------------------------- |
| nonce                    | uint96  | 许可的 nonce                                             |
| operator                 | address | 被批准花费的地址                                         |
| token0                   | address | 特定池中 token0 的地址                                   |
| token1                   | address | 特定池中 token1 的地址                                   |
| fee                      | uint24  | 该池相关的费用                                           |
| tickLower                | int24   | 该位置的 tick 范围的下限                                 |
| tickUpper                | int24   | 该位置的 tick 范围的上限                                 |
| liquidity                | uint128 | 该位置的流动性                                           |
| feeGrowthInside0LastX128 | uint256 | 最近一次单个位置操作时 token0 的手续费增长               |
| feeGrowthInside1LastX128 | uint256 | 最近一次单个位置操作时 token1 的手续费增长               |
| tokensOwed0              | uint128 | 截至最近一次计算时该位置未收取的 token0 数量             |
| tokensOwed1              | uint128 | 截至最近一次计算时该位置未收取的 token1 数量             |

### mint

```solidity
function mint(struct INonfungiblePositionManager.MintParams params) external payable returns (uint256 tokenId, uint128 liquidity, uint256 amount0, uint256 amount1)
```

创建一个新的由 NFT 包装的位置

_当池存在并已初始化时调用此方法。请注意，如果池已创建但未初始化，则方法不存在，即假设池已初始化。_

**参数**

| 名称   | 类型                                          | 描述                                                            |
| ------ | --------------------------------------------- | --------------------------------------------------------------- |
| params | struct INonfungiblePositionManager.MintParams | 铸造位置所需的参数，在 calldata 中编码为 `MintParams` 类型      |

**返回值**

| 名称      | 类型    | 描述                                  |
| --------- | ------- | ------------------------------------- |
| tokenId   | uint256 | 表示铸造位置的 token ID               |
| liquidity | uint128 | 该位置的流动性                        |
| amount0   | uint256 | token0 的数量                         |
| amount1   | uint256 | token1 的数量                         |

### isAuthorizedForToken

```solidity
modifier isAuthorizedForToken(uint256 tokenId)
```

### tokenURI

```solidity
function tokenURI(uint256 tokenId) public view returns (string)
```

### baseURI

```solidity
function baseURI() public pure returns (string)
```

_返回通过 {_setBaseURI} 设置的基础 URI。它会自动添加为每个 token URI 的前缀，或如果未为该 token ID 设置特定 URI，则添加为 token ID 的前缀。_

### increaseLiquidity

```solidity
function increaseLiquidity(struct INonfungiblePositionManager.IncreaseLiquidityParams params) external payable returns (uint128 liquidity, uint256 amount0, uint256 amount1)
```

增加位置中的流动性，使用 `msg.sender` 支付的代币

**参数**

| 名称   | 类型                                                       | 描述                                                                                                                   |
| ------ | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| params | struct INonfungiblePositionManager.IncreaseLiquidityParams | tokenId 要增加流动性的 token ID，amount0Desired 要花费的 token0 数量，amount1Desired 要花费的 token1 数量，amount0Min 最低 token0 数量作为滑点检查，amount1Min 最低 token1 数量作为滑点检查，deadline 交易必须在此时间之前被包括以生效 |

**返回值**

| 名称      | 类型    | 描述                                         |
| --------- | ------- | -------------------------------------------- |
| liquidity | uint128 | 由于增加后的新流动性                          |
| amount0   | uint256 | 达到新流动性的 token0 数量                   |
| amount1   | uint256 | 达到新流动性的 token1 数量                   |

### decreaseLiquidity

```solidity
function decreaseLiquidity(struct INonfungiblePositionManager.DecreaseLiquidityParams params) external payable returns (uint256 amount0, uint256 amount1)
```

减少位置中的流动性，并将其记入位置

**参数**

| 名称   | 类型                                                       | 描述                                                                                                   |
| ------ | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| params | struct INonfungiblePositionManager.DecreaseLiquidityParams | tokenId 要减少流动性的 token ID，amount 减少的流动性数量，amount0Min 计入烧毁流动性的最小 token0 数量，amount1Min 计入烧毁流动性的最小 token1 数量，deadline 交易必须在此时间之前被包括以生效 |

**返回值**

| 名称    | 类型    | 描述                                         |
| ------- | ------- | -------------------------------------------- |
| amount0 | uint256 | 记入该位置所属 token0 的数量                 |
| amount1 | uint256 | 记入该位置所属 token1 的数量                 |

### collect

```solidity
function collect(struct INonfungiblePositionManager.CollectParams params) external payable returns (uint256 amount0, uint256 amount1)
```

向接收者收集最多特定位置应得的费用

**参数**

| 名称   | 类型                                             | 描述                                                        |
| ------ | ------------------------------------------------ | ----------------------------------------------------------- |
| params | struct INonfungiblePositionManager.CollectParams | tokenId 收集代币的 NFT ID，recipient 接收代币的账户，amount0Max 收集的最大 token0 数量，amount1Max 收集的最大 token1 数量  |

**返回值**

| 名称    | 类型    | 描述                          |
| ------- | ------- | ----------------------------- |
| amount0 | uint256 | 收集合约费用的 token0 数量    |
| amount1 | uint256 | 收集合约费用的 token1 数量    |

### burn

```solidity
function burn(uint256 tokenId) external payable
```

烧毁 token ID，将其从 NFT 合约中删除。该 token 必须具有 0 流动性，并且首先必须收集所有代币。

**参数**

| 名称    | 类型    | 描述                           |
| ------- | ------- | ------------------------------ |
| tokenId | uint256 | 正在烧毁的 token ID            |

### \_getAndIncrementNonce

```solidity
function _getAndIncrementNonce(uint256 tokenId) internal returns (uint256)
```

_获取一个 token ID 的当前 nonce, 然后递增并返回原始值_

### getApproved

```solidity
function getApproved(uint256 tokenId) public view returns (address)
```

_返回被批准的 `tokenId` 账户。

要求：

* `tokenId` 必须存在。_

### \_approve

```solidity
function _approve(address to, uint256 tokenId) internal
```

_重写 _approve 以使用位置中的操作符，其中包含位置许可 nonce_