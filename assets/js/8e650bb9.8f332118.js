"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2420],{3842:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>x,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var s=l(4848),i=l(8453);const r={author:"ayanami",title:"jyy os \u5e76\u53d1"},c=void 0,d={permalink:"/blog/jyy-os\uff1a\u5e76\u53d1",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/jyy-os\uff1a\u5e76\u53d1.md",source:"@site/blog/jyy-os\uff1a\u5e76\u53d1.md",title:"jyy os \u5e76\u53d1",description:"lec5 \u591a\u5904\u7406\u5668\u7f16\u7a0b\uff1a",date:"2024-08-31T20:02:28.770Z",tags:[],readingTime:16.455,hasTruncateMarker:!1,authors:[{name:"ayanami"}],frontMatter:{author:"ayanami",title:"jyy os \u5e76\u53d1"},unlisted:!1,prevItem:{title:"CS144 Lecture Notes",permalink:"/blog/cs144/cs144 lec notes"},nextItem:{title:"Django_mosh",permalink:"/blog/Django-mosh"}},t={authorsImageUrls:[void 0]},h=[{value:"lec5 \u591a\u5904\u7406\u5668\u7f16\u7a0b\uff1a",id:"lec5-\u591a\u5904\u7406\u5668\u7f16\u7a0b",level:3},{value:"lec6, 7 \u5e76\u53d1\u63a7\u5236\uff08\u4e92\u65a5\uff09",id:"lec6-7-\u5e76\u53d1\u63a7\u5236\u4e92\u65a5",level:3},{value:"lec9\u300110 \u5e76\u53d1\u63a7\u5236\uff1a\u540c\u6b65",id:"lec910-\u5e76\u53d1\u63a7\u5236\u540c\u6b65",level:3}];function p(n){const e={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h3,{id:"lec5-\u591a\u5904\u7406\u5668\u7f16\u7a0b",children:"lec5 \u591a\u5904\u7406\u5668\u7f16\u7a0b\uff1a"}),"\n",(0,s.jsx)(e.p,{children:"\u7406\u89e3\u7a0b\u5e8f\uff1a\u72b6\u6001\u673a\u6a21\u578b\uff0c\u6211\u4eec\u628a\u4e00\u4e2a\u7a0b\u5e8f\u770b\u6210\u4e00\u4e2a\u72b6\u6001\u673a\uff0c\u7a0b\u5e8f\u7684\u72b6\u6001\u662f{\u5bc4\u5b58\u5668\uff0c\u5185\u5b58}\uff0c\u800c\u6bcf\u6b21\u53d6\u51fa\u4e00\u6761\u6307\u4ee4\u3001\u518d\u6267\u884c\u7684\u8fc7\u7a0b\u7684\u5c31\u662f\u72b6\u6001\u8fc1\u79fb\u5230\u8fc7\u7a0b\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u7531\u8fd9\u4e2a\u72b6\u6001\u673a\u6a21\u578b\uff0c\u6211\u4eec\u53ef\u4ee5\u6709\u975e\u5e38\u591a\u7684 trick\uff0c\u4f8b\u5982 debug \u5355\u6b65\u6267\u884c\uff0c\u4f8b\u5982\u6a21\u62df\u5668\uff0c\u4f8b\u5982\u5982\u679c\u67d0\u4e9b\u6307\u4ee4\u662f\u201c\u53ef\u9006\u201d\u7684\uff0c\u5c31\u53ef\u4ee5\u5728 debug \u7684\u65f6\u5019\u53cd\u5411\u6267\u884c\uff0c\u201c\u65f6\u95f4\u5012\u6d41\u201d\uff08gdb \u4e5f\u63d0\u4f9b\u4e86\u8fd9\u4e00\u6a21\u5f0f\uff09\u2026\u2026"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u5bf9\u4e8e\u5e76\u53d1\u7a0b\u5e8f\uff0c\u591a\u5904\u7406\u5668\u6a21\u578b\uff0c\u6211\u4eec\u7684\u76f4\u89c9\u544a\u8bc9\u6211\u4eec\uff0c\u53ef\u4ee5\u628a\u8fd9\u4e2a\u7a0b\u5e8f\u770b\u6210\u662f\u591a\u4e2a\u72b6\u6001\u673a\uff0c\u5e76\u53d1\u7684\u8fc7\u7a0b\u5c31\u662f\u6bcf\u6b21\u53d6\u51fa\u4e00\u4e2a\u72b6\u6001\u673a\uff0c\u6267\u884c\u4e00\u6b65\uff0c\u800c\u6240\u6709\u7684\u72b6\u6001\u673a\u6709\u5171\u4eab\u7684\u5185\u5b58\uff08\u7ebf\u7a0b\u6a21\u578b\uff09\u2026\u2026 \u8fd9\u6837\u7684\u6a21\u578b\u5df2\u7ecf\u8db3\u591f\u590d\u6742\uff0c\u72b6\u6001\u6570\u662f\u6307\u6570\u589e\u957f\u7684\uff0c\u89e3\u51b3\u9700\u8981\u8003\u8651\u6240\u6709\u72b6\u6001\u7684\u95ee\u9898\u662f NP \u5b8c\u5168\u7684\u3002"})}),"\n",(0,s.jsx)(e.admonition,{type:"danger",children:(0,s.jsx)(e.p,{children:"\u4f46\u66f4\u91cd\u91cf\u7ea7\u7684\u662f\uff0c\u8fd9\u6837\u7684\u6a21\u578b\u662f\u9519\u7684\uff01"})}),"\n",(0,s.jsx)(e.p,{children:"\u5e76\u53d1\u7f16\u7a0b\u7684\u95ee\u9898\uff1a"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"load/store \u7684\u975e\u539f\u5b50\u6027"}),"\n",(0,s.jsxs)(e.li,{children:["\u7f16\u8bd1\u5668\u7684\u4f18\u5316","\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsx)(e.p,{children:"\u7f16\u8bd1\u5668\u672c\u8eab\u4e5f\u662f\u91c7\u7528\u201c\u5355\u5904\u7406\u5668\u5047\u8bbe\u201d\uff0c\u5426\u5219\u51e0\u4e4e\u65e0\u6cd5\u5b8c\u6210\u4efb\u4f55\u6d89\u53ca\u5230\u5171\u4eab\u5185\u5b58\u7684\u4f18\u5316\u3002\u6c42\u548c\u95ee\u9898\u7684\u7ed3\u679c\uff1aO0 \u4f18\u5316\u662f\u4e00\u4e2a[N\uff0c2N]\u4e4b\u95f4\u7684\u503c,O1 \u4f18\u5316\u662f N,O2 \u4f18\u5316\u662f 2N\uff1a\u67e5\u770b\u6c47\u7f16\u53d1\u73b0 O1 \u662f load\uff0d\u5faa\u73af\uff0dstore, O2 \u53ea\u6709\u4e00\u4e2a add\u3002\u89e3\u51b3\u65b9\u6cd5\u8981\u4e48\u662f\u901a\u8fc7\u5185\u8054\u6c47\u7f16\u548c volatile \u7b49\u63a7\u5236\u7f16\u8bd1\u5668\u884c\u4e3a\uff0c\u8981\u4e48\u662f\u52a0\u9501\u3002\u8fd8\u6709\u4e00\u4e2a\u6709\u610f\u601d\u7684\u4f8b\u5b50\u662f while(!flag)\uff1b\uff0c\u5982\u679c flag \u4e0d\u662f volatile \u7684\uff0c\u5f00\u7f16\u8bd1\u4f18\u5316\u4f1a\u53ea\u8bfb\u4e00\u6b21 flag\uff0c\u5931\u53bb\u5e76\u53d1\u63a7\u5236\u7684\u6548\u679c\u3002"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u5e95\u5c42\u786c\u4ef6\u4e5f\u662f\u201c\u7f16\u8bd1\u5668\u201d","\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsx)(e.p,{children:"\u8d85\u6807\u91cf\uff0c\u591a\u6307\u4ee4\u91cd\u6392\u3002t1 \u7ebf\u7a0b load(x), y++\uff0cprint t2 \u7ebf\u7a0b load(y), x++,print \u5728 x,y \u521d\u59cb\u4e3a 0 \u7684\u60c5\u51b5\u4e0b\u53ef\u4ee5\u51fa\u73b0 00,01,10,11 \u56db\u79cd\u60c5\u51b5\u2014\u2014load(a)\u548c b++\u56e0\u4e3a\u4e0d\u662f\u76f8\u540c\u7684\u5730\u5740\u662f\u53ef\u80fd\u88ab\u91cd\u6392\u7684\uff08\u67d0\u79cd\u610f\u4e49\u4e0a\u7684\u201c\u76f8\u5bf9\u8bba\u6548\u5e94\u201d\uff0c\u4e0d\u540c\u7ebf\u7a0b\u770b\u5230\u4e24\u4e2a\u4e0d\u4e92\u4e3a\u56e0\u679c\u7684\u4e8b\u4ef6\u6267\u884c\u987a\u5e8f\u4e0d\u540c\uff09\uff01**\u5b9e\u9645\u7684\u72b6\u6001\u673a\u4e0d\u662f\u4e00\u6b65\u4e00\u6b65\u8d70\u7684\uff0c\u800c\u662f\u4e00\u6b21\u53d6\u82e5\u5e72\u6b65\uff0c\u8fdb\u884c\u7ec4\u5408\u6392\u5e8f\u4e4b\u540e\u518d\u6267\u884c\u3002**\u8fd9\u4e2a\u95ee\u9898\u7684\u6838\u5fc3\u5728\u4e8e load(x), y++\u8fd9\u4e24\u6761\u6307\u4ee4\u4e4b\u4e2d\uff0c\u5982\u679c load(x)\u53d1\u751f\u4e86 cache miss\uff0c\u8981\u4e0d\u8981\u7b49\u5f85 cache hit \u4e4b\u540e\u518d\u6267\u884c y++? \u5982\u679c\u4f60\u5141\u8bb8\u8fd9\u6837\u7684\u91cd\u6392\uff0c\u90a3\u5c31\u653e\u5f03\u4e86\u4eba\u7c7b\u53cb\u597d\u7684\u5047\u8bbe\uff0c\u5982\u679c\u4e0d\u5141\u8bb8\u8fd9\u6837\u7684\u91cd\u6392\uff0c\u6027\u80fd\u5c31\u5927\u5927\u4e0b\u964d\u3002"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u5185\u5b58\u6a21\u578b\u7684\u95ee\u9898, \u6211\u4eec\u8ba4\u4e3a\u7684\u5185\u5b58\u6a21\u578b\u662f\u6bcf\u4e2a\u7ebf\u7a0b\u90fd\u4f1a\u64cd\u4f5c\u4e00\u4e2a\u5171\u4eab\u5185\u5b58\uff0c\u7136\u800c\u5b9e\u9645\u7684\u5b58\u50a8\u6a21\u578b\u662f\uff0c\u5728\u5bc4\u5b58\u5668\u548c\u5185\u5b58\u4e4b\u95f4\u8fd8\u6709\u7f13\u5b58\uff0c\u800c\u7f13\u5b58\u662f\u6bcf\u4e2a cpu \u72ec\u6709\u7684\u2014\u2014\u7f13\u5b58\u548c\u5185\u5b58\u53c8\u5982\u4f55\u540c\u6b65\u5462\uff1f","\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsx)(e.p,{children:"x86 \u662f\u5e02\u9762\u4e0a\u6700\u5f3a\u4e00\u81f4\u6027\u7684\u6a21\u578b\uff0c\u5b83\u51e0\u4e4e\u548c\u6211\u4eec\u60f3\u8c61\u4e4b\u4e2d\u7684\u65e0\u7f13\u5b58\u6a21\u578b\u76f8\u540c\uff0c\u5404\u4e2a cpu \u7684\u7f13\u5b58\u548c\u5168\u5c40\u7684\u5185\u5b58\u4e4b\u95f4\u901a\u8fc7\u4e00\u4e2a\u5199\u7f13\u51b2\u540c\u6b65\uff0c\u5199\u6307\u4ee4\u6309\u987a\u5e8f\u8fdb\u5165\u5199\u7f13\u51b2\uff0c\u5e76\u4e14\u4f1a\u5728\u5199\u7f13\u51b2\u548c\u5185\u5b58\u5404\u81ea\u8bfb\u53d6\uff0c\u4ece\u800c\u4fdd\u8bc1\u4e86\u987a\u5e8f\uff0c\u5e76\u4e14\u53ea\u6709\u4e00\u4e2a\u5168\u5c40\u5185\u5b58\u3002\u800c ARM \u7b49\u5176\u4ed6\u6a21\u578b\uff0c\u5982\u679c\u91c7\u7528\u4e86\u5176\u4ed6\u7f13\u5b58\u548c\u5185\u5b58\u540c\u6b65\u65b9\u6cd5\uff0c\u60f3\u8981\u901a\u8fc7\u5141\u8bb8\u6682\u65f6\u7684\u4e0d\u540c\u6b65\u6765\u5f97\u5230\u66f4\u9ad8\u7684\u6027\u80fd\uff0c\u987a\u5e8f\u4e00\u81f4\u6027\u5c31\u88ab\u6253\u7834\u4e86\uff0c\u5e76\u53d1\u7684\u7a0b\u5e8f\u5728\u67d0\u4e2a\u77ac\u65f6\u5b9e\u9645\u4e0a\u5404\u81ea\u6709\u5404\u81ea\u7684\u5185\u5b58\u89c6\u56fe\uff0c\u4eba\u7c7b\u7f16\u5199\u4ee3\u7801\u5c31\u66f4\u4e0d\u53cb\u597d\u3002\u4e5f\u56e0\u4e3a\u8fd9\u4e2a\u5e95\u5c42\u786c\u4ef6\u7684\u5904\u7406\u4e0d\u540c\uff0c\u5728 ARM \u4e0a\u6a21\u62df x86 \u662f\u4e00\u4e2a\u4e16\u754c\u6027\u7684\u96be\u9898\u3002"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"** \u5bf9\u4e8e\u5e76\u53d1\uff0c\u8bb2\u6982\u5ff5\u662f\u4e0d\u591f\u7684\uff1a\u4e8b\u5b9e\u53ef\u80fd\u4e0d\u662f\u6211\u4eec\u7406\u89e3\u7684\u90a3\u6837\u3002\u8bb2\u4ee3\u7801\u90fd\u662f\u4e0d\u591f\u7684\uff1a\u9700\u8981\u7cbe\u5de7\u7684 workload \u624d\u80fd\u51fa\u73b0\u67d0\u4e2a corner case\u3002**"}),"\n",(0,s.jsx)(e.p,{children:"\u8bc1\u660e\u624d\u662f\u89e3\u51b3\u95ee\u9898\u7684\u65b9\u6cd5\uff01"}),"\n",(0,s.jsx)(e.h3,{id:"lec6-7-\u5e76\u53d1\u63a7\u5236\u4e92\u65a5",children:"lec6, 7 \u5e76\u53d1\u63a7\u5236\uff08\u4e92\u65a5\uff09"}),"\n",(0,s.jsx)(e.p,{children:"\u5e76\u53d1\u7684\u53ef\u884c\u6027\uff1f"}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u4eec\u524d\u9762\u8bf4\u660e\u4e86\u5e76\u53d1\u95ee\u9898\u7684\u6839\u672c\u89e3\u51b3\u65b9\u6cd5\u662f\u9000\u5316\u6210\u4e32\u884c\u2014\u2014\u4e92\u65a5\u6267\u884c\uff0c\u90a3\u5e76\u53d1\u7684\u610f\u4e49\u4f55\u5728\uff1f"}),"\n",(0,s.jsx)(e.p,{children:"\u60b2\u89c2\u89d2\u5ea6\u770b\uff0c\u5982\u679c\u6709 1/k \u7684\u7a0b\u5e8f\u662f\u6ca1\u6cd5\u5e76\u53d1\u7684\uff0c\u90a3\u81f3\u5c11\u6267\u884c 1/k \u7684\u65f6\u95f4"}),"\n",(0,s.jsx)(e.p,{children:"\u4e50\u89c2\u89d2\u5ea6\u770b\uff0c\u7531\u4e8e\u5b9e\u9645\u7684\u7269\u8d28\u754c\u662f\u201c\u5e76\u53d1\u201d\u7684\u2014\u2014\u6bcf\u4e00\u4e2a\u64cd\u4f5c\u5bf9\u5468\u56f4\u7684\u5f71\u54cd\u662f\u9700\u8981\u65f6\u95f4\u4f20\u9012\u7684\uff0c\u5982\u679c\u6211\u4eec\u8003\u8651\u7684\u533a\u57df\u8db3\u591f\u5927\uff0c\u5b8f\u89c2\u4e0a\u6bcf\u4e2a\u533a\u57df\u5c31\u53ef\u4ee5\u5728\u4e00\u5b9a\u65f6\u95f4\u6bb5\u5185\u8fd1\u4f3c\u770b\u6210\u662f\u4e0d\u5f71\u54cd\u7684\u2014\u2014\u56fe\u5e76\u53d1\uff0c\u7269\u7406\u6a21\u62df\u7b49\u7b49\uff1b\u5e76\u4e14\u8ba1\u7b97\u4efb\u52a1\u591a\u662f\u53ef\u4ee5\u5e76\u53d1\u7684\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5386\u53f2\u987a\u5e8f\uff1a"}),"\n",(0,s.jsx)(e.p,{children:"\u5f00\u59cb\u9636\u6bb5\u2014\u2014\u8f6f\u4ef6\u4e92\u65a5"}),"\n",(0,s.jsx)(e.p,{children:"Peterson \u7b97\u6cd5\uff08\u534f\u8bae\uff09"}),"\n",(0,s.jsx)(e.p,{children:"\u540e\u7eed\u9636\u6bb5\u2014\u2014\u786c\u4ef6\u4e92\u65a5"}),"\n",(0,s.jsx)(e.p,{children:"\u8bc1\u660e\u7684\u610f\u4e49\uff1a\u5feb\u901f\u56de\u7b54\u66f4\u591a\u7684\u95ee\u9898\uff0c\u5982\u679c\u6539\u53d8\u6761\u4ef6\uff0c\u8fd8\u6b63\u786e\u5417\uff1f\u516c\u5e73\u6027\uff1f\u6b7b\u9501\u53ef\u80fd\uff1f\uff08\u4e24\u4eba\u90fd\u65e0\u6cd5\u8fdb\u5165\u4e34\u754c\u533a\uff09\u2026\u90fd\u8f6c\u6362\u6210\u56fe\uff08\u72b6\u6001\u7a7a\u95f4\uff09\u4e0a\u7684\u904d\u5386\u95ee\u9898\u4e86"}),"\n",(0,s.jsx)(e.p,{children:"Perterson \u7b97\u6cd5\u7684\u95ee\u9898\uff1a"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u53ea\u80fd\u4e24\u4e2a\u7ebf\u7a0b"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5bf9\u4e8e\u73b0\u4ee3\u591a\u5904\u7406\u5668\u65e0\u6548"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u5c1d\u8bd5\u5b9e\u73b0\u4e92\u65a5\u7684\u64cd\u4f5c"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u5f00\u5173\u4e2d\u65ad"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u95ee\u9898\uff1a\u4e00\uff0c\u6743\u9650\uff0cOS \u53ef\u4ee5\u7528\u6237\u6001\u4e0d\u884c \u4e8c\uff0c\u73b0\u4ee3\u591a\u5904\u7406\u5668\u6bcf\u4e2a cpu \u90fd\u6709\u81ea\u5df1\u7684\u4e2d\u65ad\uff0c\u5931\u8d25"}),"\n",(0,s.jsx)(e.p,{children:"\u9898\u5916\u8bdd\uff1a\u4e0d\u53ef\u5c4f\u853d\u4e2d\u65ad NMI\uff08non-maskable interrupt\uff09\uff0c\u4f8b\u5982\uff0c\u5f53 OS \u51fa bug \u6b7b\u5faa\u73af\u65f6\u5019\u91cd\u542f\u2014\u2014OS \u5b9a\u65f6\u8bbe\u7f6e\u67d0\u4e2a\u5bc4\u5b58\u5668\uff0c\u5982\u679c OS \u6b7b\u5faa\u73af\uff0c\u8be5 NMI \u68c0\u6d4b\u5230\u8be5\u5bc4\u5b58\u5668\u672a\u88ab\u8bbe\u7f6e\uff0c\u89e6\u53d1\u4ee3\u7801\u91cd\u542f\u7535\u8111"}),"\n",(0,s.jsxs)(e.p,{children:["\u54ea\u4e9b barrier \u662f\u5fc5\u4e0d\u53ef\u5c11\u7684\uff1f",(0,s.jsx)(e.a,{href:"http://godbolt.org",children:"godbolt.org"})]}),"\n",(0,s.jsx)(e.p,{children:"\u5e76\u53d1\u7f16\u7a0b\u5bf9\u601d\u7ef4\u65b9\u5f0f\u7684\u542f\u793a\uff1a\u6811\u5f62\u5e7f\u601d\u8003\u2014\u2014\u5982\u679c\u6709\u4e00\u4e2a\u80fd\u4ece 1 \u5230\u65e0\u7a77\u7684\u7535\u8111\u7a0b\u5e8f\uff08\u4f8b\u5982\u524d\u9762\u7684 model checker\uff09\uff0c\u4eba\u53ea\u9700\u8981\u60f3\u8db3\u591f\u591a\u7684 0\uff0d1 \u5373\u53ef"}),"\n",(0,s.jsxs)(e.ol,{start:"2",children:["\n",(0,s.jsx)(e.li,{children:"\u8f6f\u4ef6\u4e0d\u591f\uff0c\u786c\u4ef6\u6765\u51d1\u2014\u2014\u539f\u5b50\u6307\u4ee4\u7684\u4ea7\u751f"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u7531\u539f\u5b50\u6307\u4ee4\u5b9e\u73b0\u81ea\u65cb\u9501\u2014\u2014\u4e00\u4e2a\u95ee\u9898\uff1a\u5982\u4f55\u5904\u7406\u4e2d\u65ad\uff1f"}),"\n",(0,s.jsx)(e.p,{children:"T1 \u62ff\u9501\uff0c\u4e2d\u65ad\uff0c\u540e\u7eed T2,T3,\u2026\u5747\u81ea\u65cb\u7b49\u5f85 T1\uff0c\u5b9e\u8d28\u4e0a\u9000\u5316\u6210\u4e86\u5168\u5c40\u4e2d\u65ad\u2014\u2014\u4e2d\u65ad\u662f\u9891\u7e41\u7684\uff08\u4f8b\u5982\u7f51\u5361\uff09\uff0c\u4e0d\u53ef\u63a5\u53d7"}),"\n",(0,s.jsx)(e.p,{children:"\u5b9e\u9645\u7684 OS \u5185\u90e8\u7ed3\u6784\u7684\u81ea\u65cb\u9501\u4f1a\u5173\u4e2d\u65ad\uff08\u9700\u8981\u4fdd\u5b58\u4e2d\u65ad\u72b6\u6001\uff0cxv6 \u662f\u4f7f\u7528\u4e86\u4e00\u4e2a\u7c7b\u4f3c\u6808\u7ed3\u6784\uff0c\u4e0a\u9501\u524d push \u5f53\u524d\u4e2d\u65ad\uff0c\u89e3\u9501\u540e pop \u5f53\u524d\u4e2d\u65ad\uff09\uff08\u6ce8\u610f\u59cb\u7ec8\u662f\u5f53\u524d cpu \u7684\u4e2d\u65ad\uff09"}),"\n",(0,s.jsx)(e.p,{children:"system \u4eba\u7684\u54f2\u5b66\u2014\u2014\u5982\u679c\u4e00\u4e2a\u7b97\u6cd5\u9700\u8981\u7528\u51e0\u5f20\u7eb8\u624d\u80fd\u8bb2\u6e05\u695a\uff0c\u90a3\u5c31\u4e0d\u559c\u6b22\u2014\u2014prefer \u7b80\u5355\u505a\u6cd5\u7684\u7ec4\u5408"}),"\n",(0,s.jsx)(e.p,{children:"\u81ea\u65cb\u9501\u6700\u5927\u7684\u95ee\u9898 Scalability \u592a\u5dee\u2014\u2014\u6838\u6570\u53d8\u591a\uff0c\u53cd\u800c\u6027\u80fd\u4e0b\u964d\uff01"}),"\n",(0,s.jsx)(e.p,{children:"\u53ea\u9002\u7528\u4e8e\u51e0\u4e4e\u4ece\u4e0d\u62e5\u5835\uff0c\u7acb\u5373\u5b8c\u6210\u7684\u5bf9\u8c61\u2014\u2014\u4f8b\u5982\u94fe\u8868\u91cc\u9762\u63d2\u5165\u4e00\u4e2a\u5143\u7d20"}),"\n",(0,s.jsx)(e.p,{children:"\u5bf9\u4e8e\u957f\u7a0b\u63a7\u5236\uff0c\u9700\u8981\u7528\u5176\u4ed6\u7ed3\u6784"}),"\n",(0,s.jsxs)(e.ol,{start:"3",children:["\n",(0,s.jsx)(e.li,{children:"read-mostly \u7ed3\u6784\u7684\u4f18\u5316"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u89c2\u5bdf\u5230\uff0c\u5185\u6838\u91cc\u9762\u5f88\u591a\u7ed3\u6784\u90fd\u662f read-mostly \u7684\uff08\u4f8b\u5982\u8def\u7531\u8868\uff0c\u7528\u6237\u7ec4\u2026\u2026\uff09"}),"\n",(0,s.jsx)(e.p,{children:"\u4e00\u4e2a\u975e\u5e38\u806a\u660e\u7684\u60f3\u6cd5\uff1aRead-copy-Update RCU \u8bfb\u65f6\u5b8c\u5168\u4e0d\u52a0\u9501\uff0c\u5199\u65f6\u62ff\u9501\u5417\uff0ccopy \u4e00\u4e2a\u65b0\u7684\u526f\u672c\uff0c\u5c06\u7248\u672c\u63a7\u5236\u7684\u6307\u9488\u6307\u5411\u65b0\u7684\u526f\u672c"}),"\n",(0,s.jsx)(e.p,{children:"\u5176\u6838\u5fc3\u5728\u4e8e\uff0c\u5141\u8bb8\u5728\u8bfb\u5199\u4ea4\u9519\u7684\u65f6\u5019\uff0c\u4e00\u4e9b\u7a0b\u5e8f\u8bfb\u5230 v1, \u4e00\u4e9b\u7a0b\u5e8f\u8bfb\u5230 v2\uff0c\u727a\u7272\u8bfb\u5199\u7684\u4e00\u81f4\u6027\u6362\u53d6\u8bfb\u7684\u5f3a\u5e76\u53d1"}),"\n",(0,s.jsx)(e.p,{children:"\u751a\u81f3\u53ef\u4ee5\u66f4\u597d\uff0c\u5b9e\u9645\u4e0a\u4e0d\u4e00\u5b9a\u9700\u8981\u590d\u5236\u6574\u4e2a\u5bf9\u8c61\uff0c\u4f8b\u5982\u94fe\u8868\u7684\u63d2\u5165\uff0c\u53ea\u9700\u8981\u63d2\u5165\u65f6\u6700\u540e\u4fee\u6539\u5934\u8282\u70b9\u7684 next \u6307\u9488\uff0c\u5e76\u4e14\u4e0d\u6025\u7740\u5220\u6389\u539f\u5148\u7684\u5934\u8282\u70b9\u7684 next \u5c31\u884c\u3002\u4e0b\u4e00\u4e2a\u95ee\u9898\u5c31\u662f\u4f55\u65f6\u56de\u6536\u65e7\u7248\u672c"}),"\n",(0,s.jsxs)(e.ol,{start:"4",children:["\n",(0,s.jsx)(e.li,{children:"Linux \u5185\u6838 trick"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u4e0a\u9762\u662f\u5185\u6838\u6001\u7684\u81ea\u65cb\u9501\uff0c\u90a3\u5728\u7528\u6237\u6001\u600e\u4e48\u5f97\u5230\u4e92\u65a5\u5462\uff1f\u5982\u679c\u8fd8\u662f\u7528\u539f\u5b50\u6307\u4ee4\u6765\u81ea\u65cb\uff0cscalability+\u4e2d\u65ad\u95ee\u9898\uff0c\u7528\u6237\u6001\u6ca1\u6709\u5173\u4e2d\u65ad\u7684\u6743\u9650\uff08\u62ff\u9501\u540e\u4e2d\u65ad\u4f1a\u5bfc\u81f4\u5176\u4ed6\u7ebf\u7a0b\u957f\u65f6\u95f4\u7a7a\u7b49\uff09\uff0c\u5e76\u4e14\u65e0\u6cd5\u4fdd\u8bc1\u9501\u662f\u77ed\u7a0b\u7684 \u2014\u2014\u6211\u4eec\u60f3\u8981\u8ba9\u7528\u6237\u6001\u201c\u544a\u8bc9\u201dOS\uff0c\u6211\u53ef\u4ee5\u8ba9\u51fa\u8fd9\u4e2a cpu \u4e0d\u8981\u7a7a\u8f6c"}),"\n",(0,s.jsx)(e.p,{children:"\u89e3\u51b3\u65b9\u6848\uff0c\u5c06\u9501\u53d8\u6210\u4e00\u79cd syscall\uff0c\u9677\u5165\u5185\u6838\u91cc\u9762\u540e\u518d\u52a0\u81ea\u65cb\u9501\uff0c\u5173\u4e2d\u65ad\uff0c\u5982\u679c\u4e0d\u80fd\u83b7\u53d6\uff0c\u5219\u7b49\u5f85\uff0c\u5e76\u4e14\u53ef\u4ee5\u8c03\u5ea6 cpu\u3002\u4e00\u662f\u89e3\u51b3\u4e86\u4e2d\u65ad\u7684\u6b7b\u9501\u95ee\u9898\uff0c\u4e8c\u662f\u83b7\u53d6\u4e86\u8c03\u5ea6 cpu \u7684\u80fd\u529b\uff0c\u4e5f\u5c31\u662f ostep \u7684 yield()\uff0c\u4e09\u662f\u6709 yield \u4e4b\u540e\u5c06\u4e00\u4e2a\u4efb\u610f\u957f\u65f6\u95f4\u7684\u4e92\u65a5\u53d8\u6210\u4e86\u4e00\u4e2a\u77ed\u65f6\u7684\u81ea\u65cb\u3002\u89e3\u9501\u7684\u65f6\u5019\uff0c\u5982\u679c\u6709\u5728\u7b49\u5f85\u7684\u7ebf\u7a0b\uff0c\u5c31\u5524\u9192\u2014\u2014syscall \u4e5f\u4f7f\u5f97\u76d1\u63a7\u9501\u7ed3\u6784\u66f4\u65b9\u4fbf\uff0c\u4e0d\u9700\u8981\u7ba1\u7528\u6237\u6001\u662f\u600e\u4e48\u9501\u7684\uff0c\u53ea\u9700\u8981\u8003\u8651\u5185\u6838\u7684\u9501\u5c31\u884c"}),"\n",(0,s.jsx)(e.p,{children:"\u66f4\u8fdb\u4e00\u6b65\uff0cpthread\uff0cfutex\uff08fast userspace mutex\uff09\uff1atwo path"}),"\n",(0,s.jsx)(e.p,{children:"fast path: \u5982\u679c\u76f4\u63a5\u62ff\u5230\uff0c\u4e0d\u8fdb syscall"}),"\n",(0,s.jsx)(e.p,{children:"slow path: \u5982\u679c\u6ca1\u62ff\u5230\uff0csyscall \u8ba9 OS \u5e2e\u6211\u201c\u81ea\u65cb\u201d\uff08yield\uff09"}),"\n",(0,s.jsx)(e.p,{children:"\u96be\u7684\u5730\u65b9\uff0cT1 fast path, T2 slow path, T1 realease\uff08\u4e00\u4e2a\u539f\u5b50\u6307\u4ee4\uff09\u524d\u9762\u4e00\u70b9 T2 syscall\uff0cT1 \u5982\u4f55\u5524\u9192 T2?"}),"\n",(0,s.jsx)(e.p,{children:"\u5e93\u7684\u9501\u6027\u80fd\u5df2\u7ecf\u8db3\u591f\u597d\u2014\u2014\u9664\u975e\u662f\u6781\u7aef\u60c5\u51b5\uff0c\u4f8b\u5982\u9501\u91cc\u9762\u53ea\u662f\u4e00\u4e2a sum++\u4e4b\u7c7b\u975e\u5e38\u7b80\u5355\u7684\u4e1c\u897f"}),"\n",(0,s.jsx)(e.h3,{id:"lec910-\u5e76\u53d1\u63a7\u5236\u540c\u6b65",children:"lec9\u300110 \u5e76\u53d1\u63a7\u5236\uff1a\u540c\u6b65"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u540c\u6b65\uff1a\u591a\u4e2a\u7ebf\u7a0b\u4e4b\u95f4\u76f8\u5bf9\u5173\u7cfb\u7684\u4fdd\u6301"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u72b6\u6001\u673a\u89c6\u89d2\uff0c\u4ece\u4e00\u4e2a\u7b80\u5355\u72b6\u6001\u53d1\u6563\u5f00\u4e4b\u540e\u53c8\u6536\u56de\u4e00\u4e2a\u7b80\u5355\u72b6\u6001"})}),"\n",(0,s.jsx)(e.p,{children:"\u7b2c\u4e00\u4e2a\u540c\u6b65\uff1a\u201c\u5148\u6765\u5148\u7b49\u5f85\u201d"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u7b2c\u4e8c\u4e2a\u540c\u6b65\uff1a\u751f\u4ea7\u8005\uff0d\u6d88\u8d39\u8005\u95ee\u9898\u2014\u201499%\u7684\u5b9e\u9645\u95ee\u9898\u53ef\u4ee5\u7528\u8fd9\u4e2a\u89e3\u51b3"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u5269\u4e0b 1%\u2014\u2014\u6761\u4ef6\u53d8\u91cf\u89e3\u51b3 100%\u7684\u95ee\u9898 \uff08\u540c\u6b65\uff1a\u7b49\u5230\u67d0\u4e00\u4e2a\u6761\u4ef6\u7684\u65f6\u5019\uff0c\u505a\u67d0\u4ef6\u4e8b\uff09"})}),"\n",(0,s.jsx)(e.p,{children:"\u5b9e\u73b0\u4e00\u4e2a\u6761\u4ef6\u53d8\u91cf"}),"\n",(0,s.jsx)(e.p,{children:"\u62ff\u9501\uff0d\u5982\u679c\u6761\u4ef6\uff08\u8c13\u8bcd\uff09\u4e0d\u6ee1\u8db3 \uff0d\u653e\u9501\uff0dretry\uff08\u6216\u8005\u66f4\u597d\u7684 yield\uff09"}),"\n",(0,s.jsx)(e.p,{children:"\u6240\u4ee5 condition_variable \u5c31\u662f\u8fd9\u6837\u7684\u62bd\u8c61\uff0c\u4e00\u4e2a\u6761\u4ef6+\u4e00\u628a\u9501\u7684\uff08\u4f18\u5316\uff09\u81ea\u65cb\uff0c\u603b\u662f\u5728\u5524\u9192\u4e4b\u540e\u518d\u6b21\u68c0\u67e5\u6761\u4ef6\uff08\u5e95\u5c42\u673a\u5236\u4e0a notify_one \u662f\u81ea\u7136\u7684\uff0c\u4ea4\u7ed9\u7cfb\u7edf\u8c03\u5ea6\uff09"}),"\n",(0,s.jsx)(e.p,{children:"notify_all \u7684\u53ef\u80fd\u5b9e\u73b0\uff1a\u7ef4\u62a4\u4e00\u4e2a\u7b49\u5f85\u6761\u4ef6\u53d8\u91cf\u7684\u4efb\u52a1\u7684\u94fe\u8868/\u961f\u5217"}),"\n",(0,s.jsxs)(e.admonition,{title:"\u4e3a\u4ec0\u4e48\u8bf4 99%\u90fd\u662f\u751f\u4ea7\u8005\u6d88\u8d39\u8005",type:"tip",children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u8ba1\u7b97\u4efb\u52a1 \u2192 \u6709\u5411\u65e0\u73af\u56fe"}),"\uff0c\u67d0\u4e9b\u8ba1\u7b97\u8282\u70b9\u4f9d\u8d56\u4e8e\u5148\u524d\u8ba1\u7b97\u7684\u8282\u70b9"]}),(0,s.jsx)(e.p,{children:"\u552f\u4e00\u7684\u4e00\u4e2a\u751f\u4ea7\u8005\u8d1f\u8d23\u904d\u5386\u8ba1\u7b97\u56fe\uff0c\u653e\u5165\u4efb\u52a1\u961f\u5217\uff0c\u591a\u4e2a\u6d88\u8d39\u8005\u8d1f\u8d23\u53d6\u51fa\u4efb\u52a1\uff0c\u8ba1\u7b97\u6267\u884c\uff0c\u6761\u4ef6\u53d8\u91cf\u7684\u6761\u4ef6\u5c31\u662f\u4f9d\u8d56\u7684\u8ba1\u7b97\u56fe\u8282\u70b9\u90fd\u8ba1\u7b97\u5b8c\u6bd5\uff08\u4f8b\u5982\uff0c\u4e00\u4e2a\u8ba1\u6570\u5668\uff09"}),(0,s.jsx)(e.p,{children:"\uff08\u6bcf\u4e00\u6761\u8fb9\u5bf9\u5e94\u4e00\u4e2a\u4e92\u65a5 \ud83d\udd12\uff0c\u6bcf\u4e00\u4e2a\u8ba1\u7b97\u8282\u70b9\u5bf9\u5e94\u4e00\u4e2a\u7ebf\u7a0b\u3002\u7ebf\u7a0b\u53ef\u4ee5\u5f00\u59cb\u8ba1\u7b97\u7684\u6761\u4ef6\u662f\u6240\u6709\u5165\u8fb9\u8ba1\u7b97\u5b8c\u6bd5\uff09"}),(0,s.jsx)(e.p,{children:"\u53ea\u8981\u751f\u4ea7\u8005\uff08\u8c03\u5ea6\u5668\uff09\u5206\u914d\u6548\u7387\u8db3\u591f\u9ad8\uff0c\u4e5f\u5c31\u662f\u5206\u914d\u7684\u65f6\u95f4\u76f8\u8f83\u4efb\u52a1\u65f6\u95f4\u5c0f\uff0c\u5c31\u53ef\u4ee5\u5e76\u884c"})]}),"\n",(0,s.jsx)(e.p,{children:"\u4f8b\u5982\u4e00\u4e2a\u4e0d\u600e\u4e48\u597d\u5e76\u884c\u7684\uff0cdijstra"}),"\n",(0,s.jsx)(e.p,{children:"\u7b97\u6cd5\u6838\u5fc3\u662f\uff0c\u4ece pq \u4e4b\u4e2d\u53d6\u51fa\u4e00\u4e2a\u8282\u70b9\uff0c\u8be5\u8282\u70b9\u6240\u6709\u8fb9 relax\uff0c\u5982\u679c\u786e\u5b9e\u66f4\u77ed\uff0c\u66f4\u65b0 pq"}),"\n",(0,s.jsx)(e.p,{children:"\u8ba1\u7b97\u56fe\u4e3a pq\u2192 \u53d6\u51fa\u8282\u70b9 \u2192N \u6761\u8fb9 \u2192pq,\u6709\u591a\u6761\u8fb9\u7684\u90e8\u5206\u5c31\u662f\u8282\u70b9 \u2192N \u6761\u8fb9\u548c N \u6761\u8fb9 \u2192relax pq"}),"\n",(0,s.jsx)(e.p,{children:"\u4e2d\u95f4 N \u6761\u8def\u5f84\u53ef\u4ee5\u770b\u6210\u4efb\u52a1\uff0c\u5e76\u884c\uff0c\u8003\u8651\u5230\u65f6\u95f4\u95ee\u9898\uff0c\u4e5f\u53ef\u4ee5\u505a\u4e00\u4e2a\u7ebf\u7a0b\u6c60\uff0c\u4f8b\u5982\u7ebf\u7a0b 1 \u5bf9\u5e94 1\uff0d100 \u6761\u8fb9\uff0c\u7ebf\u7a0b 2 \u5bf9\u5e94 101\uff0d200 \u6761\u8fb9\uff0cetc\uff0c\u6700\u540e\u66f4\u65b0 pq"}),"\n",(0,s.jsx)(e.p,{children:"\u5e76\u53d1 kmp \u53ef\u884c\u5417\uff1f\u8ba1\u7b97\u56fe\u4e0a\u6bcf\u4e00\u4e2a\u8282\u70b9\u4f9d\u8d56\u524d\u9762\u6240\u6709\u8282\u70b9(pi[j]\u76f8\u5173)\uff0c\u4e0d\u592a\u597d\u505a"}),"\n",(0,s.jsx)(e.p,{children:"\u5e76\u53d1 kruskal? \u53d6\u51fa\u5168\u5c40\u6700\u5c0f\u8fd9\u4e2a\u8ba1\u7b97\u4efb\u52a1\u53ef\u4ee5\u53d8\u6210\u7ef4\u62a4\u51e0\u4e2a\u5c40\u90e8\u6700\u5c0f\u7684\u5806\uff0c\u53ef\u4ee5\u5e76\u884c"}),"\n",(0,s.jsx)(e.p,{children:"\u2026\u2026"}),"\n",(0,s.jsx)(e.p,{children:"\u8fd9\u4e2a\u89d2\u5ea6\u80fd\u53d1\u73b0\u4e00\u4e9b\u610f\u5916\u53ef\u4ee5\u5e76\u884c\u7684\uff0c\u4f8b\u5982\u52a8\u6001\u89c4\u5212"}),"\n",(0,s.jsx)(e.p,{children:"\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217\u4e3a\u4f8b\uff0c dp[i,j]\u4f9d\u8d56\u4e8e dp[i,j-1], dp[i-1,j]\u548c dp[i-1,j-1]"}),"\n",(0,s.jsx)(e.p,{children:"\u4e5f\u5c31\u662f\u4e8c\u7ef4\u56fe\u4e0a\uff0c\u53f3\u4e0b\u89d2\u4f9d\u8d56\u4e8e\u4e0a\u5de6\u5de6\u4e0a"}),"\n",(0,s.jsx)(e.p,{children:"\u90a3\u5bf9\u8fd9\u6837\u7684\u56fe\u8fdb\u884c\u62d3\u6251\u6392\u5e8f\uff0c\u6bcf\u4e00\u5c42\u90fd\u662f\u53f3\u4e0a\uff0d\u5de6\u4e0b\u7684\u4e00\u6761\u5bf9\u89d2\u7ebf\uff01\u5e76\u884c\u5ea6\u4e0d\u65ad\u589e\u52a0\uff01"}),"\n",(0,s.jsx)(e.p,{children:"\uff08\u5f53\u7136\u5b9e\u9645\u4e0a\u8fd9\u4e2a\u95ee\u9898 cache \u4e5f\u5360\u5f88\u5927\u4e00\u90e8\u5206\uff09"}),"\n",(0,s.jsx)(e.p,{children:"\u4e07\u80fd\u540c\u6b65\u65b9\u6cd5\uff1a\u72b6\u6001\u673a\u4e4b\u4e2d\u201c\u5386\u53f2\u201d\u7684\u90e8\u5206"}),"\n",(0,s.jsx)(e.p,{children:"\u4f8b\u5982\uff0c\u6709\u4e00\u5806\u7ebf\u7a0b a \u6253\u5370 H\uff0c\u53e6\u4e00\u5806\u7ebf\u7a0b b \u6253\u5370 O\uff0c\u53e6\u4e00\u5806\u7ebf\u7a0b c \u6253\u5370\u7a7a\u683c\uff0c\u8981\u6c42\u603b\u662f\u6253\u5370\u51fa\u6765\u4e3a"}),"\n",(0,s.jsx)(e.p,{children:"\u7a7a\u683c HHO \u6216\u8005 \u7a7a\u683c HOH"}),"\n",(0,s.jsx)(e.p,{children:"\u72b6\u6001\u673a\u4e3a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"\u7a7a\u683c->H->H->O\u56de\u7a7a\u683c\n\n\t ->O->H\u56de\u7a7a\u683c\n"})}),"\n",(0,s.jsx)(e.p,{children:"H\uff1a\u524d\u9762\u662f H\uff0c\u540e\u9762\u662f O\uff1b\u524d\u9762\u662f O\uff0c\u540e\u9762\u662f\u7a7a\u683c\uff1b\u524d\u9762\u662f\u7a7a\u683c\uff0c\u540e\u9762 H \u6216 O"}),"\n",(0,s.jsx)(e.p,{children:"O\uff1a\u524d\u9762\u7b2c\u4e8c\u4e2a\u662f H\uff0c\u540e\u9762\u662f\u7a7a\u683c\uff1b\u5426\u5219\u662f H"}),"\n",(0,s.jsx)(e.p,{children:"\u7a7a\uff1a\u540e\u9762 H"}),"\n",(0,s.jsx)(e.p,{children:"\u4e09\u7ec4\u7ebf\u7a0b\u7b49\u5f85\u6761\u4ef6\u53d8\u91cf\u201c\u53ef\u4ee5\u6253\u5370 H\uff0cO\uff0c\u7a7a\u683c\u201d\uff0c\u800c\u7ef4\u62a4\u4e00\u4e2a\u503c\u4ee3\u8868\u524d\u9762\u4e24\u4e2a\u662f\u4ec0\u4e48\uff0c\u9010\u4e00\u5339\u914d\u5404\u6761\u89c4\u5219\uff0c\u5524\u9192\u6761\u4ef6\u53d8\u91cf\u4e0a\u7b49\u5f85\u7684\u7ebf\u7a0b"}),"\n",(0,s.jsx)(e.p,{children:"\u8ba1\u7b97\u56fe\u7684\u65b9\u6cd5\u662f\u5b9e\u9645\u53ef\u7528\u7684"}),"\n",(0,s.jsx)(e.p,{children:"\u6bcf\u4e00\u6761\u8fb9\u5206\u914d\u4e00\u4e2a\u4fe1\u53f7\u91cf\uff0c\u521d\u59cb\u4e3a 0"}),"\n",(0,s.jsx)(e.p,{children:"\u6bcf\u4e2a\u8ba1\u7b97\u4efb\u52a1\u5bf9\u5e94\u4e00\u4e2a\u70b9\uff0c\u5bf9\u6240\u6709\u5165\u8fb9 P"}),"\n",(0,s.jsx)(e.p,{children:"\u4ece\u521d\u59cb\u70b9\u5f00\u59cb\uff0c\u8ba1\u7b97\uff0c\u5b8c\u6210\u540e V \u6240\u6709\u51fa\u8fb9\uff0c\u5230\u7b97\u5b8c\u6240\u6709\u70b9\u7ed3\u675f\uff08\u6ca1\u6709\u51fa\u8fb9\uff09"}),"\n",(0,s.jsx)(e.p,{children:"\u4fe1\u53f7\u91cf\u7684\u6838\u5fc3\uff1a"}),"\n",(0,s.jsx)(e.p,{children:"1.\u5141\u8bb8\u5728\u4e00\u4e2a\u7ebf\u7a0b\u91cc\u9762\u83b7\u5f97\u9501\uff0c\u53e6\u4e00\u4e2a\u7ebf\u7a0b\u91cc\u9762\u91ca\u653e\u9501"}),"\n",(0,s.jsx)(e.p,{children:"2.\u5141\u8bb8 N\u22651 \u4e2a\u7ebf\u7a0b\u8fdb\u5165\uff08\u80fd\u8ba1\u6570\u7684\u4e92\u65a5\u9501\uff09"}),"\n",(0,s.jsx)(e.p,{children:"\u4fe1\u53f7\u91cf\u7684\u5178\u578b\u5e94\u7528\uff1a"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["A\u2192V(s)\u2192P(s)\u2192B ",(0,s.jsx)(e.strong,{children:"\u4e00\u6b21\u6027 happen-before"})]}),"\n",(0,s.jsx)(e.li,{children:"mutex \u7684 N \u4e2a\u51c6\u5165\u62d3\u5c55"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u4fe1\u53f7\u91cf\u4f18\u96c5\u5b9e\u73b0\u751f\u4ea7\u6d88\u8d39\u8005"})]})}function x(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}},8453:(n,e,l)=>{l.d(e,{R:()=>c,x:()=>d});var s=l(6540);const i={},r=s.createContext(i);function c(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);