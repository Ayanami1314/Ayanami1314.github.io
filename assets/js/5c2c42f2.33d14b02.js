"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[460],{47200:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>x,frontMatter:()=>s,metadata:()=>d,toc:()=>t});var o=r(74848),c=r(28453);const s={},i=void 0,d={id:"\u5e94\u7528\u7cfb\u7edf\u4f53\u7cfb\u67b6\u6784/\u590d\u4e60\u7b14\u8bb0/\u5bb9\u5668\u5316",title:"\u5bb9\u5668\u5316",description:"\u5bb9\u5668\u5316",source:"@site/docs/\u5e94\u7528\u7cfb\u7edf\u4f53\u7cfb\u67b6\u6784/\u590d\u4e60\u7b14\u8bb0/21.\u5bb9\u5668\u5316.md",sourceDirName:"\u5e94\u7528\u7cfb\u7edf\u4f53\u7cfb\u67b6\u6784/\u590d\u4e60\u7b14\u8bb0",slug:"/\u5e94\u7528\u7cfb\u7edf\u4f53\u7cfb\u67b6\u6784/\u590d\u4e60\u7b14\u8bb0/\u5bb9\u5668\u5316",permalink:"/docs/\u5e94\u7528\u7cfb\u7edf\u4f53\u7cfb\u67b6\u6784/\u590d\u4e60\u7b14\u8bb0/\u5bb9\u5668\u5316",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:21,frontMatter:{},sidebar:"notesSidebar",previous:{title:"nginx&graphql",permalink:"/docs/\u5e94\u7528\u7cfb\u7edf\u4f53\u7cfb\u67b6\u6784/\u590d\u4e60\u7b14\u8bb0/nginx&graphql"},next:{title:"\u5206\u5e03\u5f0f\u5e76\u884cHadoop",permalink:"/docs/\u5e94\u7528\u7cfb\u7edf\u4f53\u7cfb\u67b6\u6784/\u590d\u4e60\u7b14\u8bb0/\u5206\u5e03\u5f0f\u5e76\u884cHadoop"}},l={},t=[{value:"\u5bb9\u5668\u5316",id:"\u5bb9\u5668\u5316",level:2},{value:"2. Docker \u7684\u67b6\u6784\u7ec4\u4ef6\u6709\u54ea\u4e9b\uff1f",id:"2-docker-\u7684\u67b6\u6784\u7ec4\u4ef6\u6709\u54ea\u4e9b",level:4},{value:"3. \u4ec0\u4e48\u662f Docker \u955c\u50cf\u548c\u5bb9\u5668\uff1f",id:"3-\u4ec0\u4e48\u662f-docker-\u955c\u50cf\u548c\u5bb9\u5668",level:4},{value:"4. \u5982\u4f55\u4f7f\u7528 Docker Compose\uff1f",id:"4-\u5982\u4f55\u4f7f\u7528-docker-compose",level:4},{value:"5. Docker \u5982\u4f55\u7ba1\u7406\u7f51\u7edc\uff1f",id:"5-docker-\u5982\u4f55\u7ba1\u7406\u7f51\u7edc",level:4},{value:"6. \u4ec0\u4e48\u662f Docker Volume\uff1f",id:"6-\u4ec0\u4e48\u662f-docker-volume",level:4},{value:"7. \u5982\u4f55\u4f18\u5316 Docker \u955c\u50cf\u5927\u5c0f\uff1f",id:"7-\u5982\u4f55\u4f18\u5316-docker-\u955c\u50cf\u5927\u5c0f",level:4},{value:"8. Docker \u7684\u5b89\u5168\u6027\u5982\u4f55\u4fdd\u969c\uff1f",id:"8-docker-\u7684\u5b89\u5168\u6027\u5982\u4f55\u4fdd\u969c",level:4}];function h(e){const n={code:"code",h2:"h2",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"\u5bb9\u5668\u5316",children:"\u5bb9\u5668\u5316"}),"\n",(0,o.jsx)(n.p,{children:"docker, docker compose\u90a3\u4e00\u5957, \u611f\u89c9\u5927\u5bb6\u90fd\u5f88\u719f\u4e86"}),"\n",(0,o.jsx)(n.p,{children:"\u516b\u80a1\u4f8b:"}),"\n",(0,o.jsx)(n.h4,{id:"2-docker-\u7684\u67b6\u6784\u7ec4\u4ef6\u6709\u54ea\u4e9b",children:"2. Docker \u7684\u67b6\u6784\u7ec4\u4ef6\u6709\u54ea\u4e9b\uff1f"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u95ee"}),": \u63cf\u8ff0 Docker \u7684\u4e3b\u8981\u67b6\u6784\u7ec4\u4ef6\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u7b54"}),": Docker \u7684\u4e3b\u8981\u67b6\u6784\u7ec4\u4ef6\u5305\u62ec Docker Client\u3001Docker Daemon\u3001Docker Registry \u548c Docker \u955c\u50cf\u3002Client \u7528\u4e8e\u4e0e Daemon \u901a\u4fe1\uff0cDaemon \u8d1f\u8d23\u6784\u5efa\u3001\u8fd0\u884c\u548c\u7ba1\u7406\u5bb9\u5668\uff0cRegistry \u5b58\u50a8\u548c\u5206\u53d1\u955c\u50cf\u3002"]}),"\n",(0,o.jsx)(n.h4,{id:"3-\u4ec0\u4e48\u662f-docker-\u955c\u50cf\u548c\u5bb9\u5668",children:"3. \u4ec0\u4e48\u662f Docker \u955c\u50cf\u548c\u5bb9\u5668\uff1f"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u95ee"}),": \u89e3\u91ca Docker \u955c\u50cf\u548c\u5bb9\u5668\u4e4b\u95f4\u7684\u533a\u522b\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u7b54"}),": Docker \u955c\u50cf\u662f\u4e00\u4e2a\u53ea\u8bfb\u7684\u6a21\u677f\uff0c\u7528\u4e8e\u521b\u5efa\u5bb9\u5668\u3002\u5bb9\u5668\u662f\u955c\u50cf\u7684\u8fd0\u884c\u5b9e\u4f8b\uff0c\u5177\u6709\u72ec\u7acb\u7684\u6587\u4ef6\u7cfb\u7edf\u548c\u8d44\u6e90\u9694\u79bb\u3002"]}),"\n",(0,o.jsx)(n.h4,{id:"4-\u5982\u4f55\u4f7f\u7528-docker-compose",children:"4. \u5982\u4f55\u4f7f\u7528 Docker Compose\uff1f"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u95ee"}),": Docker Compose \u7684\u4f5c\u7528\u662f\u4ec0\u4e48\uff1f\u5982\u4f55\u4f7f\u7528\u5b83\uff1f"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u7b54"}),": Docker Compose \u662f\u4e00\u4e2a\u5de5\u5177\uff0c\u7528\u4e8e\u5b9a\u4e49\u548c\u8fd0\u884c\u591a\u5bb9\u5668 Docker \u5e94\u7528\u3002\u901a\u8fc7 ",(0,o.jsx)(n.code,{children:"docker-compose.yml"})," \u6587\u4ef6\u5b9a\u4e49\u670d\u52a1\u3001\u7f51\u7edc\u548c\u5377\uff0c\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"docker-compose up"})," \u547d\u4ee4\u542f\u52a8\u5e94\u7528\u3002"]}),"\n",(0,o.jsx)(n.h4,{id:"5-docker-\u5982\u4f55\u7ba1\u7406\u7f51\u7edc",children:"5. Docker \u5982\u4f55\u7ba1\u7406\u7f51\u7edc\uff1f"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u95ee"}),": \u63cf\u8ff0 Docker \u7684\u7f51\u7edc\u7ba1\u7406\u65b9\u5f0f\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u7b54"}),": Docker \u63d0\u4f9b\u591a\u79cd\u7f51\u7edc\u9a71\u52a8\uff0c\u5305\u62ec Bridge\u3001Host\u3001Overlay \u548c None\u3002Bridge \u662f\u9ed8\u8ba4\u7f51\u7edc\uff0c\u7528\u4e8e\u5355\u673a\u5bb9\u5668\u901a\u4fe1\uff1bOverlay \u7f51\u7edc\u7528\u4e8e\u8de8\u4e3b\u673a\u901a\u4fe1\u3002"]}),"\n",(0,o.jsx)(n.h4,{id:"6-\u4ec0\u4e48\u662f-docker-volume",children:"6. \u4ec0\u4e48\u662f Docker Volume\uff1f"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u95ee"}),": \u89e3\u91ca Docker Volume \u7684\u4f5c\u7528\u53ca\u5176\u4f7f\u7528\u573a\u666f\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u7b54"}),": Docker Volume \u7528\u4e8e\u6301\u4e45\u5316\u548c\u5171\u4eab\u5bb9\u5668\u6570\u636e\u3002\u5b83\u72ec\u7acb\u4e8e\u5bb9\u5668\u751f\u547d\u5468\u671f\uff0c\u9002\u7528\u4e8e\u9700\u8981\u6301\u4e45\u5316\u6570\u636e\u6216\u5728\u591a\u4e2a\u5bb9\u5668\u95f4\u5171\u4eab\u6570\u636e\u7684\u573a\u666f\u3002"]}),"\n",(0,o.jsx)(n.h4,{id:"7-\u5982\u4f55\u4f18\u5316-docker-\u955c\u50cf\u5927\u5c0f",children:"7. \u5982\u4f55\u4f18\u5316 Docker \u955c\u50cf\u5927\u5c0f\uff1f"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u95ee"}),": \u5217\u4e3e\u4e00\u4e9b\u4f18\u5316 Docker \u955c\u50cf\u5927\u5c0f\u7684\u65b9\u6cd5\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u7b54"}),": \u4f18\u5316 Docker \u955c\u50cf\u5927\u5c0f\u7684\u65b9\u6cd5\u5305\u62ec\uff1a\u4f7f\u7528\u8f7b\u91cf\u7ea7\u57fa\u7840\u955c\u50cf\u3001\u591a\u9636\u6bb5\u6784\u5efa\u3001\u6e05\u7406\u4e0d\u5fc5\u8981\u7684\u6587\u4ef6\u548c\u7f13\u5b58\u3001\u5408\u5e76 RUN \u6307\u4ee4\u3002"]}),"\n",(0,o.jsx)(n.h4,{id:"8-docker-\u7684\u5b89\u5168\u6027\u5982\u4f55\u4fdd\u969c",children:"8. Docker \u7684\u5b89\u5168\u6027\u5982\u4f55\u4fdd\u969c\uff1f"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u95ee"}),": \u63cf\u8ff0 Docker \u7684\u5b89\u5168\u673a\u5236\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u7b54"}),": Docker \u63d0\u4f9b\u591a\u5c42\u6b21\u7684\u5b89\u5168\u4fdd\u969c\uff0c\u5305\u62ec\u547d\u540d\u7a7a\u95f4\u9694\u79bb\u3001\u63a7\u5236\u7ec4\u8d44\u6e90\u9650\u5236\u3001\u955c\u50cf\u7b7e\u540d\u9a8c\u8bc1\u548c\u5b89\u5168\u626b\u63cf\u3002\u5b9a\u671f\u66f4\u65b0\u548c\u6700\u5c0f\u5316\u5bb9\u5668\u6743\u9650\u4e5f\u662f\u91cd\u8981\u7684\u5b89\u5168\u63aa\u65bd\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u5bb9\u5668\u7f51\u7edc\uff1a"}),"\n",(0,o.jsx)(n.p,{children:"docker \u7f51\u7edc\u6a21\u5f0f:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"bridge (\u9ed8\u8ba4) \u4f7f\u7528linux netns\u521b\u5efabridge, \u5bb9\u5668\u548c\u5bbf\u4e3b\u673a\u53ef\u4ee5\u4e92ping, \u5bb9\u5668\u95f4\u53ea\u80fd\u901a\u8fc7ip(\u5e76\u4e14ip\u52a8\u6001\u53d8\u5316), \u9700\u8981NAT(\u7f51\u7edc\u5730\u5740\u8f6c\u6362), \u67b6\u6784\u5982\u56fe"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://godleon.github.io/blog/images/docker/bridge_network.jpg",alt:"docker bridge network"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"host \u76f4\u63a5\u5171\u4eab\u5bbf\u4e3b\u673a\u7f51\u7edc, \u4e0d\u9700\u8981\u6620\u5c04\u7aef\u53e3(-p\u4e5f\u4f1a\u88ab\u5ffd\u7565), \u4e0d\u9700\u8981NAT"}),"\n",(0,o.jsx)(n.li,{children:"none \u7981\u7528\u7f51\u7edc"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u7528\u6237\u81ea\u5b9a\u4e49\u7f51\u7edc"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"# \u521b\u5efa\u7f51\u7edc\ndocker network create my-net\n# \u8fde\u63a5\u5df2\u6709\u5bb9\u5668\u5230\u7f51\u7edc\ndocker network connect my-net <container name>\n# \u521b\u5efa\u65f6\u6307\u5b9a\u7f51\u7edc(\u6b64\u65f6\u4e0d\u4f1a\u8fdebridge)\ndocker run -it --rm --network my-net <image name> <command> -h<container name>\n\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u81ea\u5b9a\u4e49\u7f51\u7edc\u7684\u5bb9\u5668\u53ef\u4ee5\u901a\u8fc7\u5bb9\u5668\u540d\u76f8\u4e92\u8bbf\u95ee, \u4f7f\u7528docker \u5185\u90e8DNS"}),"\n",(0,o.jsx)(n.p,{children:"\u540c\u7406 disconnect \u65ad\u5f00\u8fde\u63a5"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"docker \u5b58\u50a8"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"bind mount \u4e3b\u673adocker\u53cc\u5411\u6620\u5c04"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"volume \u5728\u4e3b\u673a\u6587\u4ef6\u7cfb\u7edf\u5206\u914d\u4e00\u5757\u4e13\u6709\u5b58\u50a8, \u7531docker\u7ba1\u7406, \u4e0e\u4e3b\u673a\u9694\u79bb, \u975edocker\u8fdb\u7a0b\u4e0d\u80fd\u4fee\u6539"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u547d\u540d\u5377\u662f\u901a\u8fc7\u663e\u5f0f\u540d\u79f0\u521b\u5efa\u548c\u4f7f\u7528\u7684\u5377"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"tmpfs mount \u4ec5\u5b58\u5728\u5bb9\u5668\u5185\u5b58"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"bind mount: \u914d\u7f6e\u6587\u4ef6, \u6e90\u4ee3\u7801, \u7f16\u8bd1\u76ee\u5f55"}),"\n",(0,o.jsx)(n.p,{children:"volume \u53ef\u4ee5\u5728\u591a\u4e2a\u5bb9\u5668\u4e2d\u5171\u4eab\u6570\u636e,\u5bb9\u6613\u5907\u4efd\u8fc1\u79fb"})]})}function x(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>d});var o=r(96540);const c={},s=o.createContext(c);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);