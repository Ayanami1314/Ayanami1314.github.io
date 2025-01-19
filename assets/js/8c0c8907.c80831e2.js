"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3489],{94075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var s=n(74848),o=n(28453);const r={},i=void 0,d={id:"\u5e94\u7528\u7cfb\u7edf\u4f53\u7cfb\u67b6\u6784/\u590d\u4e60\u7b14\u8bb0/\u6570\u636e\u5e93Transaction",title:"\u6570\u636e\u5e93Transaction",description:"DB Transaction",source:"@site/docs/\u5e94\u7528\u7cfb\u7edf\u4f53\u7cfb\u67b6\u6784/\u590d\u4e60\u7b14\u8bb0/6.\u6570\u636e\u5e93Transaction.md",sourceDirName:"\u5e94\u7528\u7cfb\u7edf\u4f53\u7cfb\u67b6\u6784/\u590d\u4e60\u7b14\u8bb0",slug:"/\u5e94\u7528\u7cfb\u7edf\u4f53\u7cfb\u67b6\u6784/\u590d\u4e60\u7b14\u8bb0/\u6570\u636e\u5e93Transaction",permalink:"/docs/\u5e94\u7528\u7cfb\u7edf\u4f53\u7cfb\u67b6\u6784/\u590d\u4e60\u7b14\u8bb0/\u6570\u636e\u5e93Transaction",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"notesSidebar",previous:{title:"\u540e\u7aeftransaction",permalink:"/docs/\u5e94\u7528\u7cfb\u7edf\u4f53\u7cfb\u67b6\u6784/\u590d\u4e60\u7b14\u8bb0/\u540e\u7aeftransaction"},next:{title:"java\u591a\u7ebf\u7a0b",permalink:"/docs/\u5e94\u7528\u7cfb\u7edf\u4f53\u7cfb\u67b6\u6784/\u590d\u4e60\u7b14\u8bb0/java\u591a\u7ebf\u7a0b"}},c={},l=[{value:"DB Transaction",id:"db-transaction",level:2}];function a(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"db-transaction",children:"DB Transaction"}),"\n",(0,s.jsx)(t.p,{children:"transaction\u7684isolation level"}),"\n",(0,s.jsx)(t.p,{children:"\u4e0d\u9694\u79bb\u53ef\u80fd\u51fa\u73b0\u7684\u51e0\u4e2a\u95ee\u9898\uff1a"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["dirty read \u810f\u8bfb\uff1a A transaction reads data written by ",(0,s.jsx)(t.strong,{children:"a concurrent uncommitted"})," transaction"]}),"\n",(0,s.jsx)(t.li,{children:"nonrepeatable read \u4e0d\u53ef\u91cd\u590d\u8bfb\uff1a\u5728\u4e8b\u52a1A\u91cd\u65b0\u8bfb\u53d6\u6570\u636eD\u7684\u65f6\u5019\uff0c\u53d1\u73b0\u6570\u636eD\u88ab\u5176\u4ed6\u4e8b\u52a1\u4fee\u6539\u4e86"}),"\n",(0,s.jsx)(t.li,{children:"phantom read \u5e7b\u8bfb\uff1a \u4e8b\u52a1A\u91cd\u65b0\u6267\u884c\u67e5\u8be2\u7684\u8fc7\u7a0b\u4e2d\uff0c\u53d1\u73b0\u67e5\u8be2\u7ed3\u679c\u56e0\u4e3a\u5176\u4ed6\u4e8b\u52a1\u4fee\u6539\u4e86"}),"\n",(0,s.jsx)(t.li,{children:"serialization anomaly \u5e8f\u5217\u5316\u5f02\u5e38\uff1a \u63d0\u4ea4\u4e00\u7ec4\u4e8b\u52a1\u7684\u7ed3\u679c\u548c\u4efb\u4f55\u4e00\u79cd\u4e00\u4e00\u63d0\u4ea4\u90fd\u4e0d\u540c\uff08\u4f8b\u5982\uff0c Ta\u4fee\u6539O1, O2\u4e3a1\uff0c Tb\u4fee\u6539O1, O2\u4e3a1\uff0c\u5f97\u5230O1=2\uff0cO2=1\uff09"}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Isolation Level \u9694\u79bb\u7ea7\u522b"}),(0,s.jsx)(t.th,{children:"Dirty Read \u810f\u8bfb"}),(0,s.jsx)(t.th,{children:"Nonrepeatable Read \u4e0d\u53ef\u91cd\u590d\u8bfb"}),(0,s.jsx)(t.th,{children:"Phantom Read \u5e7b\u8bfb"}),(0,s.jsx)(t.th,{children:"Serialization Anomaly \u5e8f\u5217\u5316\u5f02\u5e38"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Read uncommitted \u672a\u63d0\u4ea4\u7684\u8bfb"}),(0,s.jsx)(t.td,{children:"Allowed, but not in PG \u5141\u8bb8\uff0c\u4f46\u5728 PG \u4e2d\u4e0d\u5141\u8bb8"}),(0,s.jsx)(t.td,{children:"Possible \u53ef\u80fd\u7684"}),(0,s.jsx)(t.td,{children:"Possible \u53ef\u80fd\u7684"}),(0,s.jsx)(t.td,{children:"Possible \u53ef\u80fd\u7684"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Read committed \u8bfb\u5df2\u63d0\u4ea4"}),(0,s.jsx)(t.td,{children:"Not possible \u4e0d\u53ef\u80fd"}),(0,s.jsx)(t.td,{children:"Possible \u53ef\u80fd\u7684"}),(0,s.jsx)(t.td,{children:"Possible \u53ef\u80fd\u7684"}),(0,s.jsx)(t.td,{children:"Possible \u53ef\u80fd\u7684"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Repeatable read \u53ef\u91cd\u590d\u8bfb\u53d6"}),(0,s.jsx)(t.td,{children:"Not possible \u4e0d\u53ef\u80fd"}),(0,s.jsx)(t.td,{children:"Not possible \u4e0d\u53ef\u80fd"}),(0,s.jsx)(t.td,{children:"Allowed, but not in PG \u5141\u8bb8\uff0c\u4f46\u5728 PG \u4e2d\u4e0d\u5141\u8bb8"}),(0,s.jsx)(t.td,{children:"Possible \u53ef\u80fd\u7684"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Serializable \u53ef\u4e32\u884c\u5316"}),(0,s.jsx)(t.td,{children:"Not possible \u4e0d\u53ef\u80fd"}),(0,s.jsx)(t.td,{children:"Not possible \u4e0d\u53ef\u80fd"}),(0,s.jsx)(t.td,{children:"Not possible \u4e0d\u53ef\u80fd"}),(0,s.jsx)(t.td,{children:"Not possible \u4e0d\u53ef\u80fd"})]})]})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\u4e00\u4e9bPostgreSQL\u6570\u636e\u7c7b\u578b\u548c\u51fd\u6570\u5bf9\u4e8e\u4e8b\u52a1\u884c\u4e3a\u6709\u7279\u6b8a\u89c4\u5219\u3002\u7279\u522b\u662f\uff0c\u5bf9\u5e8f\u5217\uff08\u4ee5\u53ca\u4f7f\u7528",(0,s.jsx)(t.code,{children:"serial"}),"\u58f0\u660e\u7684\u5217\u7684\u8ba1\u6570\u5668\uff09\u6240\u505a\u7684\u66f4\u6539\u5bf9\u6240\u6709\u5176\u4ed6\u4e8b\u52a1\u7acb\u5373\u53ef\u89c1\uff0c\u5e76\u4e14\u5982\u679c\u8fdb\u884c\u66f4\u6539\u7684\u4e8b\u52a1\u4e2d\u6b62\uff0c\u5219\u4e0d\u4f1a\u56de\u6eda\u3002\u8bf7\u53c2\u89c1",(0,s.jsx)(t.a,{href:"https://www.postgresql.org/docs/current/functions-sequence.html",children:"\u7b2c 9.17 \u8282"}),"\u548c",(0,s.jsx)(t.a,{href:"https://www.postgresql.org/docs/current/datatype-numeric.html#DATATYPE-SERIAL",children:"\u7b2c 8.1.4 \u8282"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"pg\u201c\u6ca1\u6709\u201d read-uncommitted\uff0c \u5176mvcc\u6700\u4f4e\u7684\u8981\u6c42\u662fread-committed"}),"\n",(0,s.jsx)(t.p,{children:"read commit: \u9ed8\u8ba4\u9694\u79bb\u7ea7\u522b\uff0c \u770b\u5f97\u5230\uff1a"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u67e5\u8be2\u5f00\u59cb\u524d\u63d0\u4ea4\u7684\u6570\u636e"}),"\n",(0,s.jsx)(t.li,{children:"\u81ea\u8eab\u4e8b\u52a1\u7684\u6240\u6709\u6570\u636e\uff08\u5373\u4f7f\u672a\u63d0\u4ea4\uff09"}),"\n",(0,s.jsx)(t.li,{children:"\u5176\u4ed6\u4e8b\u52a1\u5df2\u7ecf\u63d0\u4ea4\u7684\u6570\u636e"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"update, delete \u7b49"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"UPDATE"}),", ",(0,s.jsx)(t.code,{children:"DELETE"}),", ",(0,s.jsx)(t.code,{children:"SELECT FOR UPDATE"}),", and ",(0,s.jsx)(t.code,{children:"SELECT FOR SHARE"})," commands behave the same as ",(0,s.jsx)(t.code,{children:"SELECT"})," in terms of searching for target rows: ",(0,s.jsx)(t.strong,{children:"they will only find target rows that were committed as of the command start time"}),". However, such a target row might have already been updated (or deleted or locked) by another concurrent transaction by the time it is found. In this case, the would-be updater will ",(0,s.jsx)(t.strong,{children:"wait for the first updating transaction to commit or roll back"})," (if it is still in progress). If the first updater rolls back, then its effects are negated and the second updater can proceed with updating the originally found row. If the first updater commits, the second updater will ignore the row if the first updater deleted it, otherwise it will attempt to apply its operation to the updated version of the row. The search condition of the command (the ",(0,s.jsx)(t.code,{children:"WHERE"})," clause) is ",(0,s.jsx)(t.strong,{children:"re-evaluated"})," to see if the updated version of the row still matches the search condition. If so, the second updater proceeds with its operation using the updated version of the row. In the case of ",(0,s.jsx)(t.code,{children:"SELECT FOR UPDATE"})," and ",(0,s.jsx)(t.code,{children:"SELECT FOR SHARE"}),", this means it is the updated version of the row that is locked and returned to the client."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"\u5728read-commit\u7684\u5e76\u53d1\u63a7\u5236\u4e0b\uff0c\u4e00\u8fb9\u4fee\u6539\uff0c \u53e6\u4e00\u8fb9\u5e76\u53d1\u66f4\u6539\u7684\u4e8b\u52a1\u63d0\u4ea4\uff0c \u4fee\u6539\u53ef\u80fd\u4f1a\u4e22\u5931\u6216\u8fbe\u6210\u610f\u5916\u7684\u6548\u679c"}),"\n",(0,s.jsxs)(t.p,{children:["\u6838\u5fc3\u5728\u4e8e\u8fd9\u6837\u7684\u5e76\u53d1\u4e8b\u52a1\u4fee\u6539\u4e4b\u540e\uff0c",(0,s.jsx)(t.strong,{children:"\u53ea\u80fd\u770b\u5230\u548c\u91cd\u65b0\u6267\u884c\u81ea\u5df1\u90a3\u4e00\u884c\uff0c\u800c\u4e0d\u662f\u6574\u4e2a\u6570\u636e\u5e93"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Because of the above rules, it is possible for an updating command to see an inconsistent snapshot: ",(0,s.jsx)(t.strong,{children:"it can see the effects of concurrent updating commands on the same rows it is trying to update, but it does not see effects of those commands on other rows in the database"}),". This behavior makes ",(0,s.jsx)(t.strong,{children:"Read Committed mode unsuitable for commands that involve complex search conditions;"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"requires new\u5f00\u65b0\u4e8b\u7269\u7684\u65f6\u5019\u8981\u6ce8\u610f\u5916\u952e\u5173\u8054\u548c\u4e4b\u524d\u7684\u4e8b\u52a1\u63d0\u4ea4\u65f6\u95f4\uff08\u6ce8\u610f\u63d0\u4ea4\u6a21\u5f0f\uff09"}),"\n",(0,s.jsx)(t.p,{children:"mvcc\u8be6\u7ec6\u7406\u89e3\u89c1\u5c0f\u6797coding"}),"\n",(0,s.jsx)(t.p,{children:"undo log + readview = mvcc"}),"\n",(0,s.jsx)(t.p,{children:"\u4e3a\u4ec0\u4e48\u9700\u8981undo log: \u4e8b\u52a1\u652f\u6301, \u56de\u6eda\u652f\u6301"}),"\n",(0,s.jsx)(t.p,{children:"redo log: \u6301\u4e45\u5316, \u5d29\u6e83\u6062\u590d\u652f\u6301(\u6570\u636e\u7684\u6301\u4e45\u5316 + undo log\u7684\u6301\u4e45\u5316)"}),"\n",(0,s.jsx)(t.p,{children:"\u6570\u636e\u66f4\u65b0\u5148\u5199buffer pool\u518d\u843d\u76d8, \u6545\u5148\u5199redo log\u518d\u5b58\u5230buffer pool\u9632\u4e22\u5931"}),"\n",(0,s.jsx)(t.p,{children:"\u4e8b\u52a1\u63d0\u4ea4\u524d\u5b95\u673a: \u65e0\u5f71\u54cd"}),"\n",(0,s.jsx)(t.p,{children:"\u4e8b\u52a1\u6267\u884c\u9519\u8bef: undo log\u56de\u6eda"}),"\n",(0,s.jsx)(t.p,{children:"\u4e8b\u52a1\u63d0\u4ea4\u540e\u5237\u76d8\u524d\u5d29\u6e83\uff1aredo log\u56de\u6eda"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u5d29\u6e83\u6062\u590d\u4f9d\u8d56\u4e8eredo log, \u4f46redo log\u4e5f\u4e0d\u662f\u4e00\u76f4\u5199, \u6839\u636eredo log\u914d\u7f6e\u7684\u5237\u76d8\u7b56\u7565\uff08\u6bcf\u79d2\u5b58\u6587\u4ef6(page cache), \u6bcf\u79d2\u5237\u76d8, \u6bcf\u4e2a\u4e8b\u52a1\u5237\u76d8\u4e09\u79cd\uff09"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"binlog: \u7528\u4e8e\u5907\u4efd\u548c\u4e3b\u4ece\u590d\u5236, \u5168\u91cf\u65e5\u5fd7(\u533a\u522b\u4e8eredo log\u5faa\u73af\u5199\u7684\u589e\u91cf\u65e5\u5fd7)"})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var s=n(96540);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);