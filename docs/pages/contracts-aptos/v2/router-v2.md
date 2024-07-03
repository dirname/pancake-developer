# Router v2

## 合约信息

**合约名称**: pancake::router\
**合约地址:** c7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::router

**管理员多签地址**: b11ccaed0056a75472539c2b0d9511c82fc6a36622bec7578216af5fe550dd0d

[在 Aptos Explorer 上查看](https://explorer.aptoslabs.com/account/0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa/modules)

## **类型**

| 名称 | 类型           | 描述                                           |
| ---- | -------------- | ---------------------------------------------- |
| X    | `type address` | 交易对中 token X 的地址。                      |
| Y    | `type address` | 交易对中 token Y 的地址。                      |


## 入口函数

### 创建交易对

创建用于交换的交易对池。

```rust
public entry fun create_pair<X, Y>(sender: &signer)
```

#### 参数

| 名称   | 类型     | 描述                                       |
| ------ | -------- | ------------------------------------------ |
| sender | `signer` | 调用函数时的发送者签名者。                 |

### 添加流动性

向池中添加流动性。

```rust
public entry fun add_liquidity<X, Y>(
    sender: &signer,
    amount_x_desired: u64,
    amount_y_desired: u64,
    amount_x_min: u64,
    amount_y_min: u64,
)
```

#### 参数

| 名称               | 类型     | 描述                                                 |
| ------------------ | -------- | ---------------------------------------------------- |
| sender             | `signer` | 调用函数时的发送者签名者。                           |
| amount\_x\_desired | `u64`    | 希望提供的 tokenX 数量。                             |
| amount\_y\_desired | u64      | 希望提供的 tokenY 数量。                             |
| amount\_x\_min     | u64      | 提供的 tokenX 最小数量（滑点影响）。                 |
| amount\_y\_min     | u64      | 提供的 tokenY 最小数量（滑点影响）。                 |

### 移除流动性

从池中移除流动性。

```rust
public entry fun remove_liquidity<X, Y>(
    sender: &signer,
    liquidity: u64,
    amount_x_min: u64,
    amount_y_min: u64
)
```

#### 参数

| 名称           | 类型     | 描述                                               |
| -------------- | -------- | -------------------------------------------------- |
| sender         | `signer` | 调用函数时的发送者签名者。                         |
| liquidity      | `u64`    | 要移除的 LP 代币数量。                             |
| amount\_x\_min | `u64`    | 要移除的 tokenX 最小数量（滑点影响）。             |
| amount\_y\_min | `u64`    | 要移除的 tokenY 最小数量（滑点影响）。             |

### 交换确切输入

交换确切数量的 tokenX 到 tokenY。

```rust
public entry fun swap_exact_input<X, Y>(
    sender: &signer,
    x_in: u64,
    y_min_out: u64,
)
```

#### 参数

| 名称        | 类型     | 描述                                       |
| ----------- | -------- | ------------------------------------------ |
| sender      | `signer` | 调用函数时的发送者签名者。                 |
| x\_in       | `u64`    | 支付的输入 tokenX 数量。                   |
| y\_min\_out | `u64`    | 接收的最小 tokenY 数量。                   |

### 交换确切输出

交换 tokenX 到确切数量的 tokenY。

```rust
public entry fun swap_exact_output<X, Y>(
    sender: &signer,
    y_out: u64,
    x_max_in: u64,
)
```

#### 参数

| 名称       | 类型     | 描述                                          |
| ---------- | -------- | --------------------------------------------- |
| sender     | `signer` | 调用函数时的发送者签名者。                    |
| y\_out     | `u64`    | 支付的输出 tokenY 数量。                      |
| x\_max\_in | `u64`    | 输入的最大 tokenX 数量。                      |

### 双跳交换确切输入

通过两个池（池 XY 和池 YZ）交换确切数量的 tokenX 到 tokenZ。

```rust
public entry fun swap_exact_input_doublehop<X, Y, Z>(
    sender: &signer,
    x_in: u64,
    z_min_out: u64,
)
```

#### 参数

| 名称        | 类型     | 描述                                       |
| ----------- | -------- | ------------------------------------------ |
| sender      | `signer` | 调用函数时的发送者签名者。                 |
| x\_in       | `u64`    | 支付的输入 tokenX 数量。                   |
| z\_min\_out | `u64`    | 接收的最小 tokenZ 数量。                   |

### 双跳交换确切输出

通过两个池（池 XY 和池 YZ）交换 tokenX 到确切数量的 tokenZ。

```rust
public entry fun swap_exact_output_doublehop<X, Y, Z>(
    sender: &signer,
    z_out: u64,
    x_max_in: u64,
)
```

#### 参数

| 名称       | 类型     | 描述                                      |
| ---------- | -------- | ----------------------------------------- |
| sender     | `signer` | 调用函数时的发送者签名者。                |
| z\_out     | `u64`    | 支付的输出 tokenZ 数量。                  |
| x\_max\_in | `u64`    | 输入的最大 tokenX 数量。                  |

### 三跳交换确切输入

通过三个池（池 XY、池 YZ 和池 ZA）交换确切数量的 tokenX 到 tokenA。

```rust
public entry fun swap_exact_input_triplehop<X, Y, Z, A>(
    sender: &signer,
    x_in: u64,
    a_min_out: u64,
)
```

#### 参数

| 名称        | 类型     | 描述                                       |
| ----------- | -------- | ------------------------------------------ |
| sender      | `signer` | 调用函数时的发送者签名者。                 |
| x\_in       | `u64`    | 支付的输入 tokenX 数量。                   |
| a\_min\_out | `u64`    | 接收的最小 tokenA 数量。                   |

### 三跳交换确切输出

通过三个池（池 XY、池 YZ 和池 ZA）交换 tokenX 到确切数量的 tokenA。

```rust
public entry fun swap_exact_output_triplehop<X, Y, Z, A>(
    sender: &signer,
    a_out: u64,
    x_max_in: u64,
)
```

| 名称       | 类型     | 描述                                      |
| ---------- | -------- | ----------------------------------------- |
| sender     | `signer` | 调用函数时的发送者签名者。                |
| a\_out     | `u64`    | 支付的输出 tokenA 数量。                  |
| x\_max\_in | `u64`    | 输入的最大 tokenX 数量。                  |

### 四跳交换确切输入

通过四个池（池 XY、池 YZ、池 ZA 和池 AB）交换确切数量的 tokenX 到 tokenB。

```rust
public entry fun swap_exact_input_quadruplehop<X, Y, Z, A, B>(
    sender: &signer,
    x_in: u64,
    b_min_out: u64,
)
```

| 名称        | 类型     | 描述                                       |
| ----------- | -------- | ------------------------------------------ |
| sender      | `signer` | 调用函数时的发送者签名者。                 |
| x\_in       | `u64`    | 支付的输入 tokenX 数量。                   |
| b\_min\_out | `u64`    | 接收的最小 tokenB 数量。                   |

### 四跳交换确切输出

通过四个池（池 XY、池 YZ、池 ZA 和池 AB）交换 tokenX 到确切数量的 tokenB。

```rust
public entry fun swap_exact_output_quadruplehop<X, Y, Z, A, B>(
    sender: &signer,
    b_out: u64,
    x_max_in: u64,
)
```

| 名称       | 类型     | 描述                                      |
| ---------- | -------- | ----------------------------------------- |
| sender     | `signer` | 调用函数时的发送者签名者。                |
| b\_out     | `u64`    | 支付的输出 tokenB 数量。                  |
| x\_max\_in | `u64`    | 输入的最大 tokenX 数量。                  |

## 公共函数

#### 交换确切 X 到 Y

交换确切数量的 tokenX 到 tokenY。

```rust
public fun swap_exact_x_to_y_direct_external<X, Y>(x_in: coin::Coin<X>): coin::Coin<Y>
```

#### 输入值

| 名称  | 类型         | 描述                                               |
| ----- | ------------ | -------------------------------------------------- |
| x\_in | `coin::Coin` | 用户将要交换的 tokenX 的 coin 资源。                |

#### 返回值

| 类型         | 描述                                      |
| ------------ | ----------------------------------------- |
| `coin::Coin` | 用户将会收到的 tokenY 的 coin 资源。      |

#### 交换 X 到确切 Y

交换 tokenX 到确切数量的 tokenY。

```rust
public fun swap_x_to_exact_y_direct_external<X, Y>(x_in: coin::Coin<X>, y_out_amount:u64): (coin::Coin<X>, coin::Coin<Y>)
```

#### 输入值

| 名称           | 类型         | 描述                                              |
| -------------- | ------------ | ------------------------------------------------- |
| x\_in          | `coin::Coin` | 用户将要交换的 tokenX 的 coin 资源。               |
| y\_out\_amount | `u64`        | 用户将会收到的期望 tokenY 数量。                    |

#### 返回值

| 位置 | 类型         | 描述                                               |
| ---- | ------------ | -------------------------------------------------- |
| 0    | `coin::Coin` | 用户将要交换的 tokenX 的 coin 资源。               |
| 1    | `coin::Coin` | 用户将会收到的 tokenY 的 coin 资源。               |

### 获取输入数量

获取实现输出数量所需要的输入数量。

```rust
public fun get_amount_in<X, Y>(y_out_amount: u64): u64
```

#### 输入值

| 名称           | 类型  | 描述                      |
| -------------- | ----- | ------------------------- |
| y\_out\_amount | `u64` | 用户将会收到的 tokenY 数量。 |

#### 返回值

| 类型  | 描述                                               |
| ----- | -------------------------------------------------- |
| `u64` | 获取指定数量的 tokenY 所需要的 tokenX 数量。       |