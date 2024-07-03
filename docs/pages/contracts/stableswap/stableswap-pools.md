# 稳定币交换池

当前稳定币交换的 LP 地址和代币如下：

```json
 {
    pid: 135,
    lpSymbol: 'USDT-USDC LP', // LP 代币符号
    lpAddress: '0xee1bcc9F1692E81A281b3a302a4b67890BA4be76', // LP 地址
    token: bscTokens.usdt, // 代币
    quoteToken: bscTokens.usdc, // 计价代币
    stableSwapAddress: '0x3EFebC418efB585248A0D2140cfb87aFcc2C63DD', // 稳定币交换地址
    infoStableSwapAddress: '0xa680d27f63Fa5E213C502d1B3Ca1EB6a3C1b31D6', // 稳定币交换信息地址
  },
  {
    pid: 134,
    lpSymbol: 'USDC-BUSD LP',
    lpAddress: '0x1A77C359D0019cD8F4d36b7CDf5a88043D801072',
    token: bscTokens.usdc,
    quoteToken: bscTokens.busd,
    stableSwapAddress: '0xc2F5B9a3d9138ab2B74d581fC11346219eBf43Fe',
    infoStableSwapAddress: '0xa680d27f63Fa5E213C502d1B3Ca1EB6a3C1b31D6',
  },
  {
    pid: 133,
    lpSymbol: 'USDT-BUSD LP',
    lpAddress: '0x36842F8fb99D55477C0Da638aF5ceb6bBf86aA98',
    token: bscTokens.usdt,
    quoteToken: bscTokens.busd,
    stableSwapAddress: '0x169F653A54ACD441aB34B73dA9946e2C451787EF',
    infoStableSwapAddress: '0xa680d27f63Fa5E213C502d1B3Ca1EB6a3C1b31D6',
  },
```