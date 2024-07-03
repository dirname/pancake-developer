# Swap Core V2

## 合约信息

**合约名**: pancake::swap\
**合约地址:** c7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap

**管理员多签地址**: b11ccaed0056a75472539c2b0d9511c82fc6a36622bec7578216af5fe550dd0d

[在 Aptos Explorer 上查看](https://explorer.aptoslabs.com/account/0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa/modules)

## 类型

| 名称 | 类型           | 描述                                       |
| ---- | -------------- | ------------------------------------------ |
| X    | `type address` | 配对中 Token X 的币种类型地址。            |
| Y    | `type address` | 配对中 Token Y 的币种类型地址。            |

## 资源

### LPToken

流动性代币对应于每个 XY 池。

```rust
struct LPToken<phantom X, phantom Y> has key {}
```

### TokenPairMetadata

池 XY 的元数据。

```rust
struct TokenPairMetadata<phantom X, phantom Y> has key {
    creator: address,
    fee_amount: coin::Coin<LPToken<X, Y>>,
    k_last: u128,
    balance_x: coin::Coin<X>,
    balance_y: coin::Coin<Y>,
    mint_cap: coin::MintCapability<LPToken<X, Y>>,
    burn_cap: coin::BurnCapability<LPToken<X, Y>>,
    freeze_cap: coin::FreezeCapability<LPToken<X, Y>>,
}
```

| 名称          | 类型                      | 描述                                           |
| ------------ | ------------------------- | ---------------------------------------------- |
| creator      | `address`                 | 池的创建者地址。                              |
| fee_amount   | `coin::Coin`              | 池中所有交换收集的总 LP 代币。                |
| k_last       | `u128`                    | 上一次交换时池中的 reserve_x 和 reserve_y 的乘积。 |
| balance_x    | `coin::Coin`              | 池中 Token X 的总量。                          |
| balance_y    | `coin::Coin`              | 池中 Token Y 的总量。                          |
| mint_cap     | `coin::MintCapability`    | 创建 LP 时生成的铸造能力。                    |
| burn_cap     | `coin::BurnCapability`    | 创建 LP 时生成的销毁能力。                    |
| freeze_cap   | `coin::FreezeCapability`  | 创建 LP 时生成的冻结能力。                    |


### TokenPairReserve

池 XY 的币种储备。

```rust
struct TokenPairReserve<phantom X, phantom Y> has key {
    reserve_x: u64,
    reserve_y: u64,
    block_timestamp_last: u64
}
```

| 名称                  | 类型  | 描述                                     |
| --------------------- | ----- | ---------------------------------------- |
| reserve\_x            | `u64` | 池中 Token X 的总量。                    |
| reserve\_y            | `u64` | 池中 Token Y 的总量。                    |
| block\_timestamp\_last| `u64` | 储备更新时的时间戳。                     |

### SwapInfo

模块的元数据

```rust
struct SwapInfo has key {
    signer_cap: account::SignerCapability,
    fee_to: address,
    admin: address,
    pair_created: event::EventHandle<PairCreatedEvent>
}
```

| 名称          | 类型                      | 描述                                           |
| ------------- | ------------------------- | ---------------------------------------------- |
| signer_cap    | `account::SignerCapabilty`| 部署模块时生成的签名者能力。                   |
| fee_to        | `address`                 | 接收手续费的地址。                             |
| admin         | `address`                 | 模块的管理员地址。                             |
| pair_created  | `event::EventHandle`      | 池创建时触发的事件。                           |


## 公共函数

### 注册 LP

将 LP 代币注册到账户。

```rust
public fun register_lp<X, Y>(sender: &signer)
```

#### 输入值

| 名称   | 类型     | 描述                               |
| ------ | -------- | ---------------------------------- |
| sender | `signer` | 调用函数时的发送者签名者。         |

### 池是否已创建

检查是否已创建池 XY 。

```rust
public fun is_pair_created<X, Y>(): bool
```

#### 返回值

| 类型  | 描述                             |
| ----- | -------------------------------- |
| bool  | 池是否已创建。                   |

### LP 余额

检查用户的 LP 余额。

```rust
public fun lp_balance<X, Y>(addr: address): u64
```

#### 输入值

| 名称 | 类型      | 描述         |
| ---- | --------- | ------------ |
| addr | `address` | 用户地址。   |

#### 返回值

| 类型   | 描述                             |
| ------ | -------------------------------- |
| `u128` | 用户拥有的 LP 数量。              |

### 总 LP 供应量

池 XY 中创建的 LP 总量。

```rust
public fun total_lp_supply<X, Y>(): u128
```

#### 返回值

| 类型   | 描述                         |
| ------ | ---------------------------- |
| `u128` | LP 代币的总供应量。           |

### 代币储备

池 XY 的代币储备。

```rust
public fun token_reserves<X, Y>(): (u64, u64, u64)
```

#### 返回值

| 位置    | 类型  | 描述                                     |
| --------| ----- | ---------------------------------------- |
| 0       | `u64` | 池中 Token X 的总量。                    |
| 1       | `u64` | 池中 Token Y 的总量。                    |
| 2       | `u64` | 储备更新时的时间戳。                     |

### 代币余额

池 XY 的代币余额。

```rust
public fun token_balances<X, Y>(): (u64, u64)
```

#### 返回值

| 位置    | 类型  |                                          |
| ------- | ----- | ---------------------------------------- |
| 0       | `u64` | 池中 Token X 的总量。                    |
| 1       | `u64` | 池中 Token Y 的总量。                    |