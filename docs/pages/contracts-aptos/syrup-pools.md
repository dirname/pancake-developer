# Syrup Pools

## 合约信息

**合约名称**: pancake::smart\_chef\
**合约地址:**&#x20;

fd1d8a523f1be89277ac0787ae3469312667e3d0b3f75a5f01bfc95530a2dc91::smart\_chef

**管理员多重签名地址**: 0xd97268666bad31a7299cc80c1bca26face32718630c5498544fe8e9bcc593d74

[Aptos Explorer](https://explorer.aptoslabs.com/account/0xfd1d8a523f1be89277ac0787ae3469312667e3d0b3f75a5f01bfc95530a2dc91/modules)

## 类型

| 名称        | 类型           | 描述                                              |
| ----------- | -------------- | ------------------------------------------------- |
| StakeToken  | `type address` | 池中质押代币的币种类型地址。                       |
| RewardToken | `type address` | 池中奖励代币的币种类型地址。                       |
| UID         | `type address` | 池的 UID，可以在[这里](utils)找到。                |

## 资源

### SmartChefMetadata

模块的元数据。

```rust
struct SmartChefMetadata has key {
    signer_cap: account::SignerCapability,
    admin: address,
    uid: u64,
    create_pool_event: EventHandle<CreatePoolEvent>
}
```

| 名称           | 类型                        | 描述                                  |
| -------------- | --------------------------- | ------------------------------------- |
| signer_cap     | `account::SignerCapablity`  | 资源账户的签名能力。                   |
| admin          | `address`                   | 模块管理员的地址。                     |
| uid            | `u64`                       | 最新池的最新 id。                      |
| create_pool_event | `EventHandle`            | 新池创建时触发的事件。                 |

### PoolInfo

每个池的信息。

```rust
struct PoolInfo<phantom StakeToken, phantom RewardToken, phantom UID> has key {
    total_staked_token: coin::Coin<StakeToken>,
    total_reward_token: coin::Coin<RewardToken>,
    reward_per_second: u64,
    start_timestamp: u64,
    end_timestamp: u64,
    last_reward_timestamp: u64,
    seconds_for_user_limit: u64,
    pool_limit_per_user: u64,
    acc_token_per_share: u128,
    precision_factor: u128,
    emergency_withdraw_reward_event: EventHandle<EmergencyWithdrawRewardEvent<StakeToken, RewardToken, UID>>,
    stop_reward_event: EventHandle<StopRewardEvent<StakeToken, RewardToken, UID>>,
    new_pool_limit_event: EventHandle<NewPoolLimitEvent<StakeToken, RewardToken, UID>>,
    new_reward_per_second_event: EventHandle<NewRewardPerSecondEvent<StakeToken, RewardToken, UID>>,
    new_start_and_end_timestamp_event: EventHandle<NewStartAndEndTimestampEvent<StakeToken, RewardToken, UID>>,
}
```
| 名称                          | 类型           | 描述                                              |
| ----------------------------- | -------------- | ------------------------------------------------- |
| total_staked_token            | `coin::Coin`   | 池中质押代币的总量。                                |
| total_reward_token            | `coin::Coin`   | 池中奖励代币的总量。                                |
| reward_per_second             | `u64`          | 每秒钟发放的奖励。                                 |
| start_timestamp               | `u64`          | 开始时间（秒）。                                   |
| end_timestamp                 | `u64`          | 结束时间（秒）。                                   |
| last_reward_timestamp         | `u64`          | 最近一次发放奖励的时间。                            |
| seconds_for_user_limit        | `u64`          | 开始时间后应用用户限制的时间。                       |
| pool_limit_per_user           | `u64`          | 用户限制秒数内允许质押的代币数量。                   |
| acc_token_per_share           | `u128`         | 每份的累积代币。                                    |
| precision_factor              | `u128`         | 用于计算的精度因子。                                |
| emergency_withdraw_reward_event | `EventHandle`| 提取奖励时触发的事件。                               |
| stop_reward_event             | `EventHandle`  | 管理员停止奖励时触发的事件。                         |
| new_pool_limit_event          | `EventHandle`  | 管理员更新新池限制时触发的事件。                     |
| new_reward_per_second_event   | `EventHandle`  | 管理员更新池每秒奖励时触发的事件。                   |
| new_start_and_end_timestamp_event | `EventHandle` | 管理员更新池开始时间或结束时间时触发的事件。         |

## 入口函数

### Deposit

将质押代币存入池中。如果有任何奖励代币，将转移给用户。

```rust
public entry fun deposit<StakeToken, RewardToken, UID>(
    account: &signer,
    amount: u64
)
```

| 名称    | 类型     | 描述                                          |
| ------- | -------- | --------------------------------------------- |
| account | `signer` | 调用函数时发送者的签名者。                    |
| amount  | `u64`    | 将要存入的质押代币数量。                      |

### Withdraw

从池中提取质押代币。如果有任何奖励代币，将转移给用户。

```
public entry fun withdraw<StakeToken, RewardToken, UID>(
    account: &signer,
    amount: u64,
)
```

| 名称    | 类型     | 描述                                          |
| ------- | -------- | --------------------------------------------- |
| account | `signer` | 调用函数时发送者的签名者。                    |
| amount  | `u64`    | 将要提取的质押代币数量。                      |

### Emergency Withdraw

无论任何奖励情况，从池中提取质押代币。&#x20;

```rust
public entry fun emergency_withdraw<StakeToken, RewardToken, UID>(account: &signer)
```

| 名称    | 类型     | 描述                                     |
| ------- | -------- | ---------------------------------------- |
| account | `signer` | 调用函数时发送者的签名者。               |

## 公共函数

### 获取池信息

获取池的详细信息。

```rust
public fun get_pool_info<StakeToken, RewardToken, UID>(): (u64, u64, u64, u64, u64, u64, u64)
```

#### 返回值

| 位置  | 类型  | 描述                                            |
| ----- | ----- | ----------------------------------------------- |
| 0     | `u64` | 池中质押代币的总量。                             |
| 1     | `u64` | 池中奖励代币的总量。                             |
| 2     | `u64` | 每秒钟发放的奖励。                               |
| 3     | `u64` | 开始时间（秒）。                                 |
| 4     | `u64` | 结束时间（秒）。                                 |
| 5     | `u64` | 开始时间后应用用户限制的时间。                     |
| 6     | `u64` | 用户限制秒数内允许质押的代币数量。                |

### 获取用户质押数量

获取用户在池中的质押量。

```rust
public fun get_user_stake_amount<StakeToken, RewardToken, UID>(account: address)
```

#### 输入值

| 名称    | 类型      | 描述            |
| ------- | --------- | --------------- |
| account | `address` | 质押者地址。    |

#### 返回值

| 类型   | 描述                                            |
| ------ | ----------------------------------------------- |
| `u64`  | 用户在池中质押的代币总量。                      |

### 获取待领取奖励

获取质押者在池中的待领取奖励。

```rust
public fun get_pending_reward<StakeToken, RewardToken, UID>(account: address): u64
```

#### 输入值

| 名称    | 类型      | 描述            |
| ------- | --------- | --------------- |
| account | `address` | 质押者地址。    |

#### 返回值

| 类型   | 描述                                            |
| ------ | ----------------------------------------------- |
| `u64`  | 质押者在池中有资格领取的奖励代币数量。           |

## 审计

[Zellic 对 PancakeSwap Aptos Syrup Pool 的安全审计](https://github.com/Zellic/publications/blob/master/PancakeSwap%20Aptos%20-%20Zellic%20Audit%20Report.pdf)