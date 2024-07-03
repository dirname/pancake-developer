import { defineConfig } from 'vocs';
import { theme } from './theme';

export default defineConfig({
  title: 'PancakeSwap Developer',
  description: 'Your DEX Your Innovation',
  logoUrl: {
    light: '/logo.svg',
    dark: '/logo_dark.svg',
  },
  ogImageUrl:
    'https://vocs.dev/api/og?logo=%logo&title=%title&description=%description',

  titleTemplate: '%s | PancakeSwap Developer',
  topNav: [
    { text: 'EVM', link: '/contracts/v4/overview' },
    { text: 'Aptos', link: '/contracts-aptos' },
    { text: 'API', link: '/apis/subgraph' },
    { text: '漏洞赏金', link: '/bug-bounty' },
  ],
  sidebar: {
    '/contracts': [
      {
        text: 'PancakeSwap V4',
        items: [
          {
            text: '概述',
            link: '/contracts/v4/overview',
            items: [
              {
                text: '会计层 | 金库',
                link: '/contracts/v4/overview/accounting-layer-vault',
              },
              {
                text: 'AMM 层 | 池管理器',
                collapsed: true,
                link: '/contracts/v4/overview/amm-layer-poolmanager',
                items: [
                  {
                    text: '集中流动性',
                    link: '/contracts/v4/overview/amm-layer/concentrated-liquidity',
                  },
                  {
                    text: '流动性书',
                    link: '/contracts/v4/overview/amm-layer/liquidity-book',
                  },
                ],
              },
              {
                text: '自定义层 | Hook',
                link: '/contracts/v4/overview/custom-layer-hook',
              },
            ],
          },
          {
            text: '指南',
            items: [
              {
                text: '开发 Hook',
                link: '/contracts/v4/guides/develop-a-hook',
              },
              {
                text: 'CL 池 - 交换和流动性',
                link: '/contracts/v4/guides/concentrated-liquidity-swap-and-liquidity',
              },
              {
                text: 'Bin 池 - 交换和流动性',
                link: '/contracts/v4/guides/liquidity-book-swap-and-liquidity',
              },
            ],
          },
          {
            text: '资源',
            collapsed: true,
            items: [
              {
                text: 'Github',
                link: '/contracts/v4/resources/github',
              },
              {
                text: '地址',
                link: '/contracts/v4/resources/addresses',
              },
            ],
          },
        ],
      },
      {
        text: 'PancakeSwap v3',
        items: [
          {
            text: '地址',
            link: '/contracts/v3/addresses',
          },
          {
            text: '技术概述',
            collapsed: true,
            items: [
              {
                text: 'PancakeV3Factory',
                link: '/contracts/v3/pancakev3factory',
              },
              {
                text: 'PancakeV3Pool',
                link: '/contracts/v3/pancakev3pool',
              },
              {
                text: 'NonfungiblePositionManager',
                link: '/contracts/v3/nonfungiblepositionmanager',
              },
              {
                collapsed: true,
                text: '智能路由器',
                link: '/contracts/v3/smartrouter',
                items: [
                  {
                    text: 'v3SwapRouter',
                    link: '/contracts/v3/smartrouter/v3swaprouter',
                  },
                  {
                    text: 'v2SwapRouter',
                    link: '/contracts/v3/smartrouter/v2swaprouter',
                  },
                  {
                    text: '稳定交换路由器',
                    link: '/contracts/v3/smartrouter/stableswaprouter',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        text: 'PancakeSwap v2',
        collapsed: true,
        items: [
          {
            text: 'FactoryV2',
            link: '/contracts/v2/factory-v2',
          },
          {
            text: 'RouterV2',
            link: '/contracts/v2/router-v2',
          },
        ],
      },
      {
        text: '',
        items: [
          {
            text: '通用路由器',
            link: '/contracts/universal-router/addresses',
          },
          {
            text: 'Permit2',
            collapsed: true,
            items: [
              {
                text: '概述',
                link: '/contracts/permit2',
              },
              {
                text: '地址',
                link: '/contracts/permit2/addresses',
              },
            ],
          },
          {
            text: '稳定交换',
            collapsed: true,
            items: [
              {
                text: '概述',
                link: '/contracts/stableswap/overview',
              },
              {
                text: '池地址',
                link: '/contracts/stableswap/stableswap-pools',
              },
            ],
          },
          {
            text: 'MasterChef',
            collapsed: true,
            items: [
              {
                text: '地址',
                link: '/contracts/masterchef/addresses',
              },
              {
                text: 'v3',
                link: '/contracts/masterchef/masterchef-v3',
              },
            ],
          },
          {
            text: 'veCake 和投票',
            link: '/contracts/vecake-and-gauge-voting',
          },
          {
            text: '糖浆池',
            collapsed: true,
            items: [
              {
                text: '概述',
                link: '/contracts/syrup-pools',
              },
              {
                text: 'SmartChefInitializable',
                link: '/contracts/syrup-pools/smartchefinitializable',
              },
            ],
          },
          {
            text: '农场助推器（bCAKE）',
            link: '/contracts/farm-booster-bcake',
          },
          {
            text: 'IFO 提交限制',
            link: '/contracts/ifo-commit-limit-icake',
          },
          {
            text: 'Cake',
            collapsed: true,
            items: [
              {
                text: '地址',
                link: '/contracts/cake',
              },
              {
                text: '跨链 CAKE 桥接',
                link: '/contracts/cake/cross-chain-cake-bridging',
              },
            ]
          },
          {
            text: 'CAKE 糖浆池（已弃用）',
            link: '/contracts/fixed-term-staking-cake-pool',
          },
          {
            text: 'IFO',
            link: '/contracts/ifo',
          },
          {
            text: '预测',
            link: '/contracts/prediction-v2',
          },
          {
            text: '彩票',
            collapsed: true,
            items: [
              { text: '概述', link: '/contracts/lottery-v2' },
              {
                text: '合同',
                link: '/contracts/lottery-v2/lottery-contract',
              },
            ],
          },
          {
            text: '做市商池',
            link: '/contracts/market-maker-pool',
          },
          {
            text: 'NFT 市场',
            link: '/contracts/nft-market',
          },
          {
            text: '联盟计划',
            link: '/contracts/affiliate-program/overview',
          },
        ],
      },
    ],
    '/contracts-aptos': [
      {
        text: 'PancakeSwap v2',
        items: [
          {
            text: 'v2',
            items: [
              {
                text: '概述',
                link: '/contracts-aptos/v2/overview',
              },
              {
                text: '技术概述',
                collapsed: true,
                items: [
                  {
                    text: '核心',
                    link: '/contracts-aptos/v2/swap-core-v2',
                  },
                  {
                    text: '路由器',
                    link: '/contracts-aptos/v2/router-v2',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        text: 'MasterChef',
        link: '/contracts-aptos/masterchef',
      },
      {
        text: '糖浆池',
        link: '/contracts-aptos/syrup-pools',
      },
      {
        text: 'IFO',
        link: '/contracts-aptos/ifo',
      },
      {
        text: '实用工具',
        link: '/contracts-aptos/utils',
      },
    ],
  },
  theme,
});
