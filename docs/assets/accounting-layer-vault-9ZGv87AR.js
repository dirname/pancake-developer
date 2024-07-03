import{u as i,j as s}from"./index-phq109e0.js";const r={title:"Accounting Layer | Vault",description:"undefined"};function e(l){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",...i(),...l.components};return s.jsxs(s.Fragment,{children:[s.jsx(n.header,{children:s.jsxs(n.h1,{id:"accounting-layer--vault",children:["Accounting Layer | Vault",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#accounting-layer--vault",children:s.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsxs(n.p,{children:[`在这个架构的核心是\r
`,s.jsx(n.a,{href:"https://github.com/pancakeswap/pancake-v4-core/blob/main/src/Vault.sol",children:"Vault"}),"，它作为一个不可变的会计层。它维持了一个代币账本，记录了存入或欠下的代币，从而在每次交易结束时，促进了安全高效的结算过程。"]}),`
`,s.jsxs(n.h2,{id:"锁机制",children:["锁机制",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#锁机制",children:s.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(n.p,{children:["Vault 中的一个关键机制是 ",s.jsx(n.strong,{children:"锁机制"}),"。调用者需要先从 Vault 获得一个锁，然后才能与池管理器进行任何操作（交换、流动性或捐献）。"]}),`
`,s.jsx(n.p,{children:s.jsx(n.img,{src:"/pancake-developer/v4/vault.png",alt:"Vault"})}),`
`,s.jsx(n.p,{children:"高层次的步骤如下："}),`
`,s.jsxs(n.ol,{children:[`
`,s.jsxs(n.li,{children:[`
`,s.jsxs(n.p,{children:["通过 ",s.jsx(n.code,{children:"vault.lock()"})," 从 Vault 获得一个锁，Vault 将回调到调用者 ",s.jsx(n.code,{children:"lockAcquired(data)"})]}),`
`]}),`
`,s.jsxs(n.li,{children:[`
`,s.jsxs(n.p,{children:["在 ",s.jsx(n.code,{children:"lockAcquired(data)"})," 中，调用者执行操作，比如交换 ",s.jsx(n.code,{children:"clPoolManager.swap(...)"})," 或流动性 ",s.jsx(n.code,{children:"clPoolManager.modifyLiquidity(...)"})]}),`
`]}),`
`,s.jsxs(n.li,{children:[`
`,s.jsxs(n.p,{children:["池管理器通过 ",s.jsx(n.code,{children:"vault.accountPoolBalanceDelta(...)"})," 通知 Vault 的余额变动"]}),`
`]}),`
`,s.jsxs(n.li,{children:[`
`,s.jsxs(n.p,{children:["调用者然后需要通过以下四种方法中的一种与 Vault 的余额进行调整：",s.jsx(n.code,{children:"take(), settle(), mint() 或 burn()"}),"。"]}),`
`]}),`
`]}),`
`,s.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// 一个四步流程的例子，为了简洁省略了一些代码"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// 参考: https://github.com/pancakeswap/pancake-v4-periphery/blob/main/src/pool-bin/BinFungiblePositionManager.sol "})}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"contract"}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" BinFungiblePositionManager"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    function"}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" addLiquidity"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"AddLiquidity"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" calldata"}),s.jsx(n.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" params"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"external"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"        // 第一步: 获取锁"})}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        vault."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"lock"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(..)"})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    }"})}),`
`,s.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    function"}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" lockAcquired"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"bytes"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" calldata"}),s.jsx(n.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" rawData"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"external"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"        // 第二步: 与池管理器执行操作"})}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        CallbackData "}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"memory"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" data "}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" abi"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"decode"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(rawData, (CallbackData));"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        (BalanceDelta delta, ) "}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" poolManager."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"mint"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(...)"})]}),`
`,s.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"        // 第四步: 调整余额，下面是一个 token0 的例子"})}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        if"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" (delta."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"amount0"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"() "}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:">"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") {"})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"            // 首先将 token0 转移到 Vault 然后调用 vault.settle"})}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"            vault."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"settle"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(poolKey.currency0, user, "}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"uint128"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(delta."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"amount0"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()))"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        } "}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"else"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"            vault."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"take"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(poolKey.currency0, user, "}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"uint128"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"-"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"delta."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"amount0"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()))"})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        }"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    }"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})}),`
`,s.jsxs(n.h2,{id:"调整余额",children:["调整余额",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#调整余额",children:s.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(n.p,{children:["每当你执行某些操作时，",s.jsx(n.a,{href:"https://github.com/pancakeswap/pancake-v4-core/blob/main/src/pool-cl/CLPoolManager.sol",children:"poolManager"})," 会返回 BalanceDelta，例如 ",s.jsx(n.code,{children:"swap | modifyLiquidity | donate"}),"。它包含 ",s.jsx(n.code,{children:"int128 amount0"})," 和 ",s.jsx(n.code,{children:"int128 amount1"}),"，这些是需要与你的 Vault 进行 take 或 settle 的值。"]}),`
`,s.jsxs(n.h3,{id:"负余额变动",children:["负余额变动",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#负余额变动",children:s.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(n.p,{children:"在这种情况下，Vault 欠调用者代币数量。"}),`
`,s.jsx(n.p,{children:"调用者有两种选择："}),`
`,s.jsxs(n.ol,{children:[`
`,s.jsxs(n.li,{children:[`
`,s.jsxs(n.p,{children:[s.jsx(n.code,{children:"vault.take(Currency currency, address to, uint256 amount)"})," - 这将把欠下的代币从 Vault 转移到指定的地址（",s.jsx(n.code,{children:"address to"}),"）。"]}),`
`]}),`
`,s.jsxs(n.li,{children:[`
`,s.jsxs(n.p,{children:[s.jsx(n.code,{children:"vault.mint(Currency currency, address to, uint256 amount)"})," - 这将把多余的代币存储在 Vault 上，并记入 ",s.jsx(n.code,{children:"address to"}),"。"]}),`
`]}),`
`]}),`
`,s.jsxs(n.h3,{id:"正余额变动",children:["正余额变动",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#正余额变动",children:s.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(n.p,{children:"在这种情况下，调用者欠 Vault 代币数量。"}),`
`,s.jsx(n.p,{children:"调用者有两种选择："}),`
`,s.jsxs(n.ol,{children:[`
`,s.jsxs(n.li,{children:[`
`,s.jsxs(n.p,{children:["将代币转移到 Vault 并调用 ",s.jsx(n.code,{children:"vault.settle(Currency token)"})]}),`
`]}),`
`,s.jsxs(n.li,{children:[`
`,s.jsxs(n.p,{children:["假设调用者之前已经通过 ",s.jsx(n.code,{children:"vault.mint"})," 将多余的代币存储在 Vault 上，调用者现在可以调用 ",s.jsx(n.code,{children:"vault.burn(Currency currency, uint256 amount)"})," 来使用那些存储在 Vault 的多余代币。"]}),`
`]}),`
`]}),`
`,s.jsxs(n.h3,{id:"何时使用-takemintsettleburn",children:["何时使用 ",s.jsx(n.code,{children:"take/mint/settle/burn"}),"？",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#何时使用-takemintsettleburn",children:s.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(n.p,{children:["这取决于你的使用案例，对于大多数使用案例，",s.jsx(n.code,{children:"take/settle"})," 就足够了。"]}),`
`,s.jsxs(n.p,{children:["不过如果你在开发一个进行大量交易的合约，例如套利机器人，你可以考虑使用 ",s.jsx(n.code,{children:"mint/burn"})," 来通过减少 ERC-20 代币传输的次数来节省 gas 费用。"]})]})}function c(l={}){const{wrapper:n}={...i(),...l.components};return n?s.jsx(n,{...l,children:s.jsx(e,{...l})}):e(l)}export{c as default,r as frontmatter};
