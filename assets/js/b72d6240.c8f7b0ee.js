"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4468],{7434:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>m,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var n=a(4848),l=a(8453);const t={title:"splay tree",date:new Date("2024-07-12T00:00:00.000Z"),author:"ayanami",tags:["ds"]},m=void 0,i={permalink:"/blog/splay-tree",source:"@site/blog/splay-tree.md",title:"splay tree",description:"splay tree",date:"2024-07-12T00:00:00.000Z",tags:[{inline:!0,label:"ds",permalink:"/blog/tags/ds"}],readingTime:4.76,hasTruncateMarker:!0,authors:[{name:"ayanami"}],frontMatter:{title:"splay tree",date:"2024-07-12T00:00:00.000Z",author:"ayanami",tags:["ds"]},unlisted:!1,prevItem:{title:"Django_mosh",permalink:"/blog/django-mosh"},nextItem:{title:"xv6book Notes(C1-4)",permalink:"/blog/xv6book-notes"}},r={authorsImageUrls:[void 0]},c=[{value:"splay tree",id:"splay-tree",level:3}];function h(s){const e={a:"a",annotation:"annotation",h3:"h3",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msubsup:"msubsup",ol:"ol",p:"p",semantics:"semantics",span:"span",...(0,l.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h3,{id:"splay-tree",children:"splay tree"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsx)(e.li,{children:"Counting Binary Tree"}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["ref: ",(0,n.jsx)(e.a,{href:"https://zhuanlan.zhihu.com/p/31526354",children:"\u5361\u7279\u5170\u6570\uff08Catalan number\uff09\uff08\u4e8c\uff09 - \u77e5\u4e4e (zhihu.com)"}),", ",(0,n.jsx)(e.a,{href:"https://cs.stackexchange.com/questions/368/counting-binary-trees%3E",children:"stackoverflow \u4e13\u680f"})]}),"\n",(0,n.jsx)(e.p,{children:"\u7ed9\u5b9a\u8282\u70b9\u6570 n\uff0c\u4e8c\u53c9\u6811\u7684\u79cd\u7c7b\u6570\uff1f \u5361\u5854\u5170\u6570 C(n)."}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"C"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsxs)(e.mfrac,{children:[(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mn,{children:"1"})]})]}),(0,n.jsx)(e.mo,{children:"\u2217"}),(0,n.jsxs)(e.msubsup,{children:[(0,n.jsx)(e.mi,{children:"C"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsx)(e.mi,{children:"n"})]}),(0,n.jsx)(e.mi,{children:"n"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"C(n) = \\frac{1}{n+1} * C_{2n}^{n}"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"2.0908em",verticalAlign:"-0.7693em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.3214em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.314em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"+"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mord",children:"1"})]})]}),(0,n.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsx)(e.span,{className:"mord",children:"1"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7693em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose nulldelimiter"})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.9614em",verticalAlign:"-0.247em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"0.7144em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.453em",marginLeft:"-0.0715em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mtight",children:"2"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})]})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.247em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})]})]})})]})}function p(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},8453:(s,e,a)=>{a.d(e,{R:()=>m,x:()=>i});var n=a(6540);const l={},t=n.createContext(l);function m(s){const e=n.useContext(t);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function i(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:m(s.components),n.createElement(t.Provider,{value:e},s.children)}}}]);