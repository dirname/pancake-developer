# SmartRouterV3

## 合约信息

[合约地址](/contracts/v3/addresses#smart-router)

:::info
## 注意

在通过路由器完成所有交换操作的最后，应该调用 `refundETH`。PancakeSwap 将确保这一点。
:::

## API

### 构造函数

`constructor(address _factoryV2, address _deployer, address _factoryV3, address _positionManager, address _stableFactory, address _stableInfo, address _WETH9) public`