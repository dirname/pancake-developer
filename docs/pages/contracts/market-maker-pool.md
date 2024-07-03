---
description: 直接与做市商进行交易
---

# 做市商池

## 合约信息

**合约名称: MM Pool**

**BSC**

**合约地址:** [0xfEACb05b373f1A08E68235bA7FC92636b92ced01](https://bscscan.com/address/0xfEACb05b373f1A08E68235bA7FC92636b92ced01#code)

[在 BscScan 上查看](https://bscscan.com/address/0xfEACb05b373f1A08E68235bA7FC92636b92ced01)

**ETH**

**合约地址:** [0x9Ca2A439810524250E543BA8fB6E88578aF242BC](https://etherscan.io/address/0x9Ca2A439810524250E543BA8fB6E88578aF242BC#code)

[在 Etherscan 上查看](https://etherscan.io/address/0x9Ca2A439810524250E543BA8fB6E88578aF242BC)

### 交换示例

#### EIP 712 签名

```solidity
const domain = {
  name: "PCS MM Pool",
  version: "1",
  chainId: // 1 或 56,
  verifyingContract: // 请参照上面的地址,
};

const quoteType = {
  Quote: [
    { name: "nonce", type: "uint256" },
    { name: "user", type: "address" },
    { name: "baseToken", type: "address" },
    { name: "quoteToken", type: "address" },
    { name: "baseTokenAmount", type: "uint256" },
    { name: "quoteTokenAmount", type: "uint256" },
    { name: "expiryTimestamp", type: "uint256" },
  ],
};

const quoteValue = {
    nonce,
    user,
    baseToken,
    quoteToken,
    baseTokenAmount,
    quoteTokenAmount,
    expiryTimestamp,
};

// EIP 712 签名
const signature = await mm._signTypedData(domain, quoteType, quoteValue);
```

| 名称 | 类型 | 描述 | 
| ----------- | ------- | ---------------------------------- |
| nonce | uint256 | 用户 nonce，可以从合约中的 `getUserNonce` 调用 |
| user | address | 用户地址 |
| baseToken | address | 用户发送给做市商的代币地址 |
| quoteToken | address | 用户从做市商接收的代币地址 |
| baseTokenAmount | uint256 | 交换中基础代币的数量 |
| quoteTokenAmount | uint256 | 交换中报价代币的数量 |
| expiryTimestamp | uint256 | 签名的到期时间（unix 时间戳）|

#### swap

```solidity
struct Quote {
    uint256 nonce;
    address user;
    address baseToken;
    address quoteToken;
    uint256 baseTokenAmount;
    uint256 quoteTokenAmount;
    uint256 expiryTimestamp;
}

function swap(
        address _mmSigner,
        Quote calldata _quote,
        bytes calldata _signature
    ) external payable
```

| 名称        | 类型    | 描述                             |
| ----------- | ------- | -------------------------------- |
| \_mmSigner  | address | 做市商地址                       |
| \_quote     | Quote   | Quote 结构体                     |
| \_signature | bytes   | 上述生成的签名                   |