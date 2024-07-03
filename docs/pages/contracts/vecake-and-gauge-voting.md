---
description: 锁定 CAKE 的质押及其福利
---

# veCAKE 和投票指标

## 合约信息

**合约名称:** veCAKE\
**合约地址:** 0x5692DB8177a81A6c6afc8084C2976C9933EC1bAB\
[在 BscScan 上查看](https://bscscan.com/address/0x5692DB8177a81A6c6afc8084C2976C9933EC1bAB)

**合约名称:** GaugeVoting\
**合约地址:** 0xffdcDD4cF85Ba1b51D7aB498208C0EC7E1910e3b\
[在 BscScan 上查看](https://bscscan.com/token/0xffdcDD4cF85Ba1b51D7aB498208C0EC7E1910e3b)

:::warning
由于某些必要的计算逻辑更新，部署了新的 `GaugeVotingCalc` 合约，所有投票指标的绝对和相对权重都应基于此合约的输出。不要参考 `GaugeVoting` 的返回值。

**合约名称:** GaugeVotingCalc\
**合约地址:** 0x94f8cba8712b3e72c9bf8ba4d6619ac9046fe695\
[在 BscScan 上查看](https://bscscan.com/address/0x94f8cba8712b3e72c9bf8ba4d6619ac9046fe695#readContract)

**合约名称:** RevenueSharingPoolForCake\
**合约地址:** 0xCaF4e48a4Cb930060D0c3409F40Ae7b34d2AbE2D\
**注:** 用于领取每周收益分享奖励的合约\
[在 BscScan 上查看](https://bscscan.com/address/0xCaF4e48a4Cb930060D0c3409F40Ae7b34d2AbE2D)

**合约名称:** RevenueSharingPoolForCake\
**合约地址:** 0x9cac9745731d1Cf2B483f257745A512f0938DD01\
**注:** 用于领取每周 veCAKE 发放奖励的合约\
[在 BscScan 上查看](https://bscscan.com/address/0x9cac9745731d1Cf2B483f257745A512f0938DD01)

**合约名称:** RevenueSharingPoolGateway\
**合约地址:** 0x011f2a82846a4E9c62C2FC4Fd6fDbad19147D94A\
**注:** 用于多合约领取 "RevenueSharingPool" 奖励的合约\
[在 BscScan 上查看](https://bscscan.com/address/0x011f2a82846a4E9c62C2FC4Fd6fDbad19147D94A)