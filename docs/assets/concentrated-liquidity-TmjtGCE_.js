import{u as l,j as s}from"./index-phq109e0.js";const a={title:"集中流动性池",description:"undefined"};function r(e){const i={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",p:"p",pre:"pre",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...l(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(i.header,{children:s.jsxs(i.h1,{id:"集中流动性池",children:["集中流动性池",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#集中流动性池",children:s.jsx(i.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsxs(i.h2,{id:"概览",children:["概览",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#概览",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(i.p,{children:`集中流动性（来自 UniswapV3）增强了传统的自动做市商（AMM）模型。\r
它允许流动性提供者（LPs）将资金集中在池内的特定价格区间，而不是像 v2 那样在整个交易范围内均匀分布流动性。`}),`
`,s.jsx(i.p,{children:s.jsx(i.img,{src:"/pancake-developer/v4/amm-layer-poolmanager-cl-1.png",alt:"集中流动性曲线"})}),`
`,s.jsxs(i.h2,{id:"概念",children:["概念",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#概念",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.h3,{id:"tick",children:["Tick",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#tick",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.p,{children:["Tick 指的是价格区间内的一个特定价格点。池的整个价格范围被划分为离散的区间，每个区间由 ",s.jsx(i.code,{children:"tickLower, tickUpper"})," 定义。"]}),`
`,s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(i.code,{children:[s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// 源自 ICLPoolManager.sol"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"struct"}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" ModifyLiquidityParams"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    // 头寸的上下 tick"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    int24"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" tickLower;"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    int24"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" tickUpper;"})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    // 如何修改流动性"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    int256"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" liquidityDelta;"})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"/// "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"@dev"}),s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:" 更多信息请见 CLPoolManager"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"function"}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" modifyLiquidity"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"PoolKey"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" memory"}),s.jsx(i.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" key"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"ICLPoolManager"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"ModifyLiquidityParams"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" memory"}),s.jsx(i.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" params"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"bytes"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" calldata"}),s.jsx(i.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" hookData"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]})]})}),`
`,s.jsx(i.p,{children:"以下是根据 tick 计算价格的示例："}),`
`,s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(i.code,{children:s.jsx(i.span,{className:"line",children:s.jsx(i.span,{children:"price = 1.0001 ** tick "})})})}),`
`,s.jsxs(i.h4,{id:"示例-1-cakeweth-池",children:["示例 1: ",s.jsx(i.a,{href:"https://etherscan.io/address/0x517f451b0a9e1b87dc0ae98a05ee033c3310f046",children:"CAKE/WETH"})," 池:",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#示例-1-cakeweth-池",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(i.code,{children:[s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// token0: CAKE (18 位小数)"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// token1: WETH (18 位小数)"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// tick: -68554 (截至 2024 年 3 月 12 日)"})}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"price"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 1.0001"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" **"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" -"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"68554"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0.00105411128"})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// 这也意味着 1 CAKE = 0.00105411128 WETH "})})]})}),`
`,s.jsxs(i.h4,{id:"示例-2-wethusdt-池带有不同代币小数",children:["示例 2: ",s.jsx(i.a,{href:"https://etherscan.io/address/0x6ca298d2983ab03aa1da7679389d955a4efee15c",children:"WETH/USDT"})," 池，带有不同代币小数:",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#示例-2-wethusdt-池带有不同代币小数",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(i.code,{children:[s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// token0: WETH (18 位小数)"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// token1: USDT (6 位小数)"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// tick: -193256 (截至 2024 年 3 月 12 日)"})}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"price"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 1.0001"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" **"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" -"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"193256"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 4"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"04965646e-9"})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// 这也意味着 1 WETH = 4.04965646e-9 USDT "})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// 但是 WETH 是 18 位小数，而 USDT 是 6 位小数，我们必须将其乘以 12 位小数"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"带小数的 WETH"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"/"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"USDT 比率"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 4"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"04965646e-9"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" *"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"10"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"**"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"18"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"/"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"10"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"**"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"6"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 1"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" WETH "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 4049.65646"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" USDT"})]})]})}),`
`,s.jsxs(i.h3,{id:"tick-间隔",children:["Tick 间隔",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#tick-间隔",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.p,{children:["Tick 间隔定义了池内相邻两个 tick 之间的最小价格变动。这是 ",s.jsx(i.code,{children:"PoolKey"}),` 中的一个参数。\r
请记住，这里存在权衡。较小的 tick 间隔允许更精确的流动性定位，但可能会带来更高的 gas 成本。较大的 tick 间隔在 gas 成本方面可能更便宜，但可能会在交易执行中带来更高的滑点。`]}),`
`,s.jsxs(i.table,{children:[s.jsx(i.thead,{children:s.jsxs(i.tr,{children:[s.jsx(i.th,{children:"Tick 间隔"}),s.jsx(i.th,{children:"Tick 之间的价格变动"})]})}),s.jsxs(i.tbody,{children:[s.jsxs(i.tr,{children:[s.jsx(i.td,{children:"1"}),s.jsx(i.td,{children:"0.01%"})]}),s.jsxs(i.tr,{children:[s.jsx(i.td,{children:"10"}),s.jsx(i.td,{children:"0.1%"})]}),s.jsxs(i.tr,{children:[s.jsx(i.td,{children:"50"}),s.jsx(i.td,{children:"0.5%"})]}),s.jsxs(i.tr,{children:[s.jsx(i.td,{children:"100"}),s.jsx(i.td,{children:"1%"})]})]})]}),`
`,s.jsxs(i.h3,{id:"sqrtpricex96",children:["sqrtPriceX96",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sqrtpricex96",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.p,{children:["这个 uint160 值表示 token0 和 token1 的平方根价格比率。它是一个二进制定点数 ",s.jsx(i.code,{children:"Q64.96"}),"，即 64 位整数和 96 位小数。"]}),`
`,s.jsx(i.p,{children:"因此"}),`
`,s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(i.code,{children:[s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"sqrtPriceX96 "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" sqrt"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(price) "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"*"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 2"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"**"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"96"})]}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// 将价格移到 LHS 结果如下："})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"price "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" (sqrtPriceX96 "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"/"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 2"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"**"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"96"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"**"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 2"})]})]})}),`
`,s.jsx(i.p,{children:"以下是根据 sqrtPriceX96 计算价格比率的示例："}),`
`,s.jsxs(i.h4,{id:"示例-1-cakeweth-池-1",children:["示例 1: ",s.jsx(i.a,{href:"https://etherscan.io/address/0x517f451b0a9e1b87dc0ae98a05ee033c3310f046",children:"CAKE/WETH"})," 池:",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#示例-1-cakeweth-池-1",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(i.code,{children:[s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// token0: CAKE (18 位小数)"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// token1: WETH (18 位小数)"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// sqrtPriceX96: 2574020484831874748518739167 (截至 2024 年 3 月 12 日)"})}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// token0 (CAKE) 与 token1 (WETH) 的价格比率："})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"price "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"2574020484831874748518739167"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" /"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 2"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"**"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"96"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"**"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"2"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0.00105551602"})]}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"CAKE 对 WETH"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 1"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" CAKE "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0.00105551602"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" WETH "})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"WETH 对 CAKE"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 1"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" /"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0.00105551602"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 1"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" WETH "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 947.40"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" CAKE "})]}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// CAKE 约为 $4.3 而 ETH 为 $4100。所以 947.40 CAKE = 4073 USDC"})})]})}),`
`,s.jsxs(i.h4,{id:"示例-2-wethusdt-池带有不同代币小数-1",children:["示例 2: ",s.jsx(i.a,{href:"https://etherscan.io/address/0x6ca298d2983ab03aa1da7679389d955a4efee15c",children:"WETH/USDT"})," 池，带有不同代币小数:",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#示例-2-wethusdt-池带有不同代币小数-1",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(i.code,{children:[s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// token0: WETH (18 位小数)"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// token1: USDT (6 位小数)"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// sqrtPriceX96: 5046499860369450237927407 (截至 2024 年 3 月 12 日)"})}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// token0 (WETH) 与 token1 (USDT) 的价格比率: 4.0571e-9 ETH 对 1 USDC"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"price "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"5046499860369450237927407"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" /"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 2"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"**"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"96"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"**"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"2"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 4"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"0571e-9"})]}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"WETH 对 USDC"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 4"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"0571e-9"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" /"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"10"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"**"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"6"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"/"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"10"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"**"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"18"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 1"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" WETH "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 4057"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" USDT"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"USDT 对 WETH"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 4"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"0571e-9"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" /"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"10"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"**"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"18"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"/"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"10"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"**"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"6"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 1"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" USDT "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 4"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"0571e-21"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" WETH "})]})]})}),`
`,s.jsxs(i.h3,{id:"流动性变化",children:["流动性变化",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#流动性变化",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.p,{children:["流动性变化，",s.jsx(i.code,{children:"int"})," 值，指的是 ",s.jsx(i.code,{children:"modifyLiquidity"})," 时的流动性差异。当其为正时，表示用户正在增加流动性，相反，当其为负时，表示用户正在移除流动性。请参考 ",s.jsx(i.code,{children:"LiquidityAmounts.sol"})," 来计算流动性。"]})]})}function d(e={}){const{wrapper:i}={...l(),...e.components};return i?s.jsx(i,{...e,children:s.jsx(r,{...e})}):r(e)}export{d as default,a as frontmatter};
