import{u as t,j as n,C as s}from"./index-phq109e0.js";import"./HomePage.css.js.vanilla-w40geAFS.js";const i={title:"概述",description:"undefined"};function r(a){const e={a:"a",div:"div",h1:"h1",header:"header",hr:"hr",img:"img",p:"p",strong:"strong",...t(),...a.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.header,{children:n.jsxs(e.h1,{id:"概述",children:["概述",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#概述",children:n.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,n.jsx(e.p,{children:"这是 PancakeSwap v4 的开发文档。"}),`
`,n.jsx(s,{type:"info",children:n.jsx(e.p,{children:"PancakeSwap v4 仍在积极开发中"})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.p,{children:"PancakeSwap v3 于 2023 年推出，引入了 Uniswap 的集中流动性自动做市商 (CLAMM) 模型。该模型允许流动性提供者在特定价格范围内提供资产，提升资金效率，并为交易者提供更深的流动性。"}),`
`,n.jsxs(e.p,{children:["PancakeSwap v4 认识到适应性和可扩展性的需求，将会计逻辑与 AMM 逻辑分离，实施了三层模块化架构（见下图），由 ",n.jsxs(e.strong,{children:[n.jsx(e.a,{href:"/contracts/v4/overview/accounting-layer-vault",children:"Vault"}),", ",n.jsx(e.a,{href:"/contracts/v4/overview/amm-layer-poolmanager",children:"Pool Managers"})," 和 ",n.jsx(e.a,{href:"/contracts/v4/overview/custom-layer-hook",children:"Hooks"})]})," 组成。这使得在不需要完全改造协议的情况下，更容易集成不断演变的 AMM 范式。"]}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"/pancake-developer/v4/architecture.png",alt:"alt text"})}),`
`,n.jsx(e.p,{children:"与 v3 的有限灵活性相比，PancakeSwap v4 采用更加开放的方式，赋予池创建者更大的定制能力。hooks 的引入使得集成自定义功能成为可能，例如定制预言机、动态费用组件、主动流动性管理策略、多样化订单类型等。不可升级的核心确保了稳定性，而在创建时每个池都可以集成其自己的 hook 智能合约。"}),`
`,n.jsx(e.p,{children:"此外，每个 AMM 实现或池类型都有独立的 Singleton 实现，优化了新池部署和多跳交易的 gas 效率。"}),`
`,n.jsx(e.p,{children:"Flash Accounting 补充了 Singleton 合约设计，通过合并交易结算，计算一批交易的净余额并集体结算，减少 gas 消耗。"})]})}function h(a={}){const{wrapper:e}={...t(),...a.components};return e?n.jsx(e,{...a,children:n.jsx(r,{...a})}):r(a)}export{h as default,i as frontmatter};
