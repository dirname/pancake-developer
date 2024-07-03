---
description: PancakeSwap 使用 LayerZero OFT 实现跨链 CAKE 桥接
---

# 跨链 CAKE 桥接

## 合约信息

#### **CAKE 桥接合约**

**合约名称：** CakeProxyOFT\
**合约地址：** [0xb274202daBA6AE180c665B4fbE59857b7c3a8091](https://bscscan.com/address/0xb274202daBA6AE180c665B4fbE59857b7c3a8091#code)

[在 BscScan 上查看](https://bscscan.com/address/0xb274202daBA6AE180c665B4fbE59857b7c3a8091#code)

## CAKE 桥接到 Aptos 的示例

**sendFrom**

```solidity
function sendFrom(address _from, uint16 _dstChainId, bytes32 _toAddress, uint _amount, uint _minAmount, LzCallParams calldata _callParams) external payable;
```

| 名称        | 类型    | 描述                        |
| ----------- | ------- | ---------------------------------- |
| _from  | address | 发起地址。这个地址应为调用 CakeProxyOFT 的地址           |
| _dstChainId    | uint16   | Aptos 主网的链 ID 为 `108`                   |
| _toAddress | bytes32   | Aptos 上的目标地址 |
| _amount | uint256   | CAKE 的数量，以 WEI 为单位。请注意，小于 1e-8 的数量会被忽略 |
| _minAmount | uint256   | 最低接收金额。我们不收取任何 CAKE 费用。但是，在四舍五入到 8 个小数点后，不应大于 `_amount` |
| _callParams | tuple   | 用于定义桥接行为的一组调用参数。继续阅读以了解更多详细信息。 |

:::info
`sendFrom` 是一个可以支付的函数。您需要支付大约 0.005-0.01 的 BNB 作为目标空投的燃料费用。此值会根据 BNB/APT 的价格而变化。

请注意，如果您定义了额外的空投燃料到您的目标地址，您需要增加这个数值，否则交易将因 `not enough natives for fees` 而失败。
:::

**如何构建 \`\_callParams\`**

```solidity
{
    refundAddress,
    zroPaymentAddress,
    adapterParams
}
```

| 名称        | 类型    | 描述                        |
| ----------- | ------- | ---------------------------------- |
| refundAddress | address | 过剩的费用 (BNB) 将返回到该地址            |
| zroPaymentAddress | address   | `0x0000000000000000000000000000000000000000`                 |
| adapterParams | bytes   | 一组用于定义目标燃料空投的参数。继续阅读以了解更多详细信息。 |

**如何构建 \`adapterParams\`**

```solidity
{
    version,
    dstGasLimit,
    dstNativeGasTransferAmount,
    dstNativeGasTransferAddress
}
```

| 名称        | 类型    | 描述                        |
| ----------- | ------- | ---------------------------------- |
| `version` | uint16 | 默认为 2            |
| dstGasLimit | uint   | 默认为 `200000`                |
| dstNativeGasTransferAmount | uint   | 目标原生燃料代币的空投数量。如果您不需要桥接将 BNB 转换并空投给您 APT，则使用 `0` |
| dstNativeGasTransferAddress | bytes   | 目标链上接收原生燃料代币的地址。 |

```javascript
const adapterParams = utils.solidityPack(
    ["uint16", "uint", "uint", "bytes"],
    [2, 200000, 0, "0xYourAptosAddress"]
)
```

## 实用工具

* [GUI - CAKE - Aptos PancakeBridge](https://bridge.pancakeswap.finance/aptos)
* [LayerZeroScan - 跟踪您的跨链交易](https://layerzeroscan.com/)
* [LayerZero Docs](https://layerzero.gitbook.io/docs/)

## 审计

[OtterSec 对 PancakeSwap CAKE OFT (桥接) 的安全审计](/contracts-aptos#audit)