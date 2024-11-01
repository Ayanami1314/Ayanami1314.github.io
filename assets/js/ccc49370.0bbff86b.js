"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3249],{7763:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var i=n(4164),a=n(5195);const o={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var r=n(4848);const s="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,i.A)(o.tableOfContents,"thin-scrollbar",t),children:(0,r.jsx)(a.A,{...n,linkClassName:s,linkActiveClassName:l})})}},5195:(e,t,n)=>{n.d(t,{A:()=>p});var i=n(6540),a=n(6342);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const i=n.slice(2,e.level);e.parentIndex=Math.max(...i),n[e.level]=t}));const i=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):i.push(a)})),i}function r(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return t.flatMap((e=>{const t=r({toc:e.children,minHeadingLevel:n,maxHeadingLevel:i});return function(e){return e.level>=n&&e.level<=i}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function l(e,t){let{anchorTopOffset:n}=t;const i=e.find((e=>s(e).top>=n));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.p)();return(0,i.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,i.useRef)(void 0),n=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:r}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const i=[];for(let a=t;a<=n;a+=1)i.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:o,maxHeadingLevel:r}),c=l(s,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}var m=n(8774),u=n(4848);function g(e){let{toc:t,className:n,linkClassName:i,isChild:a}=e;return t.length?(0,u.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.A,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(g,{isChild:!0,toc:e.children,className:n,linkClassName:i})]},e.id)))}):null}const h=i.memo(g);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:m,...g}=e;const p=(0,a.p)(),f=c??p.tableOfContents.minHeadingLevel,v=m??p.tableOfContents.maxHeadingLevel,x=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>r({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:f,maxHeadingLevel:v});return d((0,i.useMemo)((()=>{if(s&&l)return{linkClassName:s,linkActiveClassName:l,minHeadingLevel:f,maxHeadingLevel:v}}),[s,l,f,v])),(0,u.jsx)(h,{toc:x,className:n,linkClassName:s,...g})}},996:(e,t,n)=>{n.d(t,{A:()=>g});n(6540);var i=n(4164),a=n(1312),o=n(5260),r=n(4848);function s(){return(0,r.jsx)(a.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(a.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(o.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(7559),m=n(7293);function u(e){let{className:t}=e;return(0,r.jsx)(m.A,{type:"caution",title:(0,r.jsx)(s,{}),className:(0,i.A)(t,d.G.common.unlistedBanner),children:(0,r.jsx)(l,{})})}function g(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(u,{...e})]})}},6676:(e,t,n)=>{n.d(t,{k:()=>d,J:()=>m});var i=n(6025),a=n(4586),o=n(6803);var r=n(7131);const s=e=>new Date(e).toISOString();function l(e){const t=e.map(u);return{author:1===t.length?t[0]:t}}function c(e,t,n){return e?{image:g({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${n}`})}:{}}function d(e){const{siteConfig:t}=(0,a.A)(),{withBaseUrl:n}=(0,i.hH)(),{metadata:{blogDescription:o,blogTitle:r,permalink:d}}=e,m=`${t.url}${d}`;return{"@context":"https://schema.org","@type":"Blog","@id":m,mainEntityOfPage:m,headline:r,description:o,blogPost:e.items.map((e=>function(e,t,n){const{assets:i,frontMatter:a,metadata:o}=e,{date:r,title:d,description:m,lastUpdatedAt:u}=o,g=i.image??a.image,h=a.keywords??[],p=`${t.url}${o.permalink}`,f=u?s(u):void 0;return{"@type":"BlogPosting","@id":p,mainEntityOfPage:p,url:p,headline:d,name:d,description:m,datePublished:r,...f?{dateModified:f}:{},...l(o.authors),...c(g,n,d),...h?{keywords:h}:{}}}(e.content,t,n)))}}function m(){const e=function(){const e=(0,o.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:n}=(0,r.e)(),{siteConfig:d}=(0,a.A)(),{withBaseUrl:m}=(0,i.hH)(),{date:u,title:g,description:h,frontMatter:p,lastUpdatedAt:f}=n,v=t.image??p.image,x=p.keywords??[],b=f?s(f):void 0,j=`${d.url}${n.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":j,mainEntityOfPage:j,url:j,headline:g,name:g,description:h,datePublished:u,...b?{dateModified:b}:{},...l(n.authors),...c(v,m,g),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${d.url}${e.blogBasePath}`,name:e.blogTitle}}}function u(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function g(e){let{imageUrl:t,caption:n}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:n}}},3199:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var i=n(6540),a=n(4164),o=n(1213),r=n(7559),s=n(7131),l=n(6535),c=n(4651),d=n(1312),m=n(9022),u=n(4848);function g(e){const{nextItem:t,prevItem:n}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,u.jsx)(m.A,{...n,subLabel:(0,u.jsx)(d.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),t&&(0,u.jsx)(m.A,{...t,subLabel:(0,u.jsx)(d.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function h(){const{assets:e,metadata:t}=(0,s.e)(),{title:n,description:i,date:a,tags:r,authors:l,frontMatter:c}=t,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(o.be,{title:n,description:i,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:a}),l.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),r.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:r.map((e=>e.label)).join(",")})]})}var p=n(5260),f=n(6676);function v(){const e=(0,f.J)();return(0,u.jsx)(p.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var x=n(7763),b=n(996),j=n(2303);function y(e){let{children:t,fallback:n}=e;return(0,j.A)()?(0,u.jsx)(u.Fragment,{children:t?.()}):n??null}function L({id:e,host:t,repo:a,repoId:o,category:r,categoryId:s,mapping:l,term:c,strict:d,reactionsEnabled:m,emitMetadata:g,inputPosition:h,theme:p,lang:f,loading:v}){const[x,b]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{x||(n.e(1135).then(n.bind(n,1135)),b(!0))}),[]),x?(0,u.jsx)("giscus-widget",{id:e,host:t,repo:a,repoid:o,category:r,categoryid:s,mapping:l,term:c,strict:d,reactionsenabled:m,emitmetadata:g,inputposition:h,theme:p,lang:f,loading:v}):null}var A=n(6342),k=n(5293);const C=(0,i.forwardRef)(((e,t)=>{const{giscus:n}=(0,A.p)(),{colorMode:i}=(0,k.G)(),{theme:a="light",darkTheme:o="dark_dimmed"}=n,r="dark"===i?o:a;return(0,u.jsx)(y,{fallback:(0,u.jsx)("div",{children:"Loading Comments..."}),children:()=>(0,u.jsx)("div",{ref:t,id:"comment",style:{paddingTop:50},children:(0,u.jsx)(L,{id:"comments",mapping:"title",strict:"1",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"bottom",lang:"zh-CN",loading:"lazy",...n,theme:r})})})}));function H(e){let{sidebar:t,children:n}=e;const{metadata:i,toc:a}=(0,s.e)(),{nextItem:o,prevItem:r,frontMatter:d,unlisted:m}=i,{hide_table_of_contents:h,toc_min_heading_level:p,toc_max_heading_level:f,hide_comment:v}=d;return(0,u.jsxs)(l.A,{sidebar:t,toc:!h&&a.length>0?(0,u.jsx)(x.A,{toc:a,minHeadingLevel:p,maxHeadingLevel:f}):void 0,children:[m&&(0,u.jsx)(b.A,{}),(0,u.jsx)(c.A,{children:n}),(o||r)&&(0,u.jsx)(g,{nextItem:o,prevItem:r}),!v&&(0,u.jsx)(C,{})]})}function N(e){const t=e.content;return(0,u.jsx)(s.i,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(o.e3,{className:(0,a.A)(r.G.wrapper.blogPages,r.G.page.blogPostPage),children:[(0,u.jsx)(h,{}),(0,u.jsx)(v,{}),(0,u.jsx)(H,{sidebar:e.sidebar,children:(0,u.jsx)(t,{})})]})})}}}]);