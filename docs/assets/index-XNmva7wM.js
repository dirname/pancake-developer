import{u as s,j as n}from"./index-phq109e0.js";const l={title:"简介",description:"undefined"};function i(r){const e={a:"a",code:"code",div:"div",h1:"h1",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.header,{children:n.jsxs(e.h1,{id:"简介",children:["简介",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#简介",children:n.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,n.jsx(e.p,{children:"Permit2 引入了一种低开销的新一代 token 批准/元交易系统，使得 token 批准在各种应用中变得更容易、更安全和更一致。"}),`
`,n.jsx(e.header,{children:n.jsxs(e.h1,{id:"功能",children:["功能",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#功能",children:n.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"基于签名的批准"}),"：任何 ERC20 代币，即使是不支持 ",n.jsx(e.a,{href:"https://eips.ethereum.org/EIPS/eip-2612",children:"EIP-2612"})," 的代币，现在也可以使用 permit 样式的批准。这允许应用程序通过在使用 Permit2 集成合约时，发送一个 permit 签名和交易数据来实现单一交易流程。"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"批量代币批准"}),"：通过一个签名设置不同代币对不同使用者的权限。"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"基于签名的代币转账"}),"：所有者可以签署消息直接将代币转移到指定的使用者，绕过设置任何许可。这意味着应用程序接收代币时不需要批准，并且使用这种方法时永远不会有悬挂的批准。签名仅在执行交易的过程中有效。"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"批量代币转账"}),"：通过一个签名将不同的代币转移给不同的接收者。"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"安全任意数据验证"}),"：通过传递一个 witness 哈希和 witness 类型来验证任何额外数据。类型字符串必须遵循 ",n.jsx(e.a,{href:"https://eips.ethereum.org/EIPS/eip-712",children:"EIP-712"})," 标准。"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"合同的签名验证"}),"：所有签名验证支持 ",n.jsx(e.a,{href:"https://eips.ethereum.org/EIPS/eip-1271",children:"EIP-1271"}),"，因此合约可以通过签名批准和转移代币。"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"非单调重放保护"}),"：基于签名的转移使用无序、非单调的 nonce，因此已签署的许可无需按特定顺序执行交易。"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"过期批准"}),"：批准可以是有时间限制的，从而消除对钱包整个代币余额悬挂的批准的安全担忧。这也意味着撤销批准不一定需要一笔新交易，因为过期的批准将不再有效。"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"批量撤销许可"}),"：在一次交易中移除任何数量的代币和授权者的许可。"]}),`
`]}),`
`]}),`
`,n.jsx(e.header,{children:n.jsxs(e.h1,{id:"流程",children:["流程",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#流程",children:n.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"/pancake-developer/permit2/flow.png",alt:"flow"})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["Alice 在一个 ERC20 上调用 ",n.jsx(e.code,{children:"approve()"}),"，为规范的 Permit2 合约授予无限许可。"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Alice 签署一个链下的 “permit2” 消息，表明协议合约被允许代表她转移代币。"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Alice 在协议合约上调用交互函数，并将签署的 permit2 消息作为参数传递。"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["协议合约在 Permit2 合约上调用 ",n.jsx(e.code,{children:"permitTransferFrom()"}),"，后者使用其在步骤 1 中授予的许可调用 ERC20 合约上的 ",n.jsx(e.code,{children:"transferFrom()"}),"，从而转移 Alice 所持有的代币。"]}),`
`]}),`
`]}),`
`,n.jsx(e.p,{children:"可能会觉得要求用户首先授予显式许可是一种退步。然而，与其直接授予协议许可，用户将其授予规范的 Permit2 合约。这意味着如果用户之前已经为某个集成 Permit2 的协议这样做过，那么每个其他协议都可以跳过这一步。"}),`
`,n.jsx(e.p,{children:"协议将调用规范 Permit2 合约的 permitTransferFrom() 而不是直接调用 ERC20 代币的 transferFrom() 以执行转账。Permit2 位于协议和 ERC20 代币之间，跟踪和验证 permit2 消息，然后最终使用其授予的许可直接在 ERC20 上执行 transferFrom() 调用。这样的间接方式使 Permit2 能够将 EIP-2612 类的好处扩展到每个现有的 ERC20 代币中。"}),`
`,n.jsx(e.p,{children:"此外，如同 EIP-2612 permit 消息，permit2 消息也会过期，以限制漏洞的攻击窗口。"})]})}function t(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{t as default,l as frontmatter};
