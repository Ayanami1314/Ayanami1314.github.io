"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1170],{30165:(e,s,l)=>{l.r(s),l.d(s,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var n=l(74848),a=l(28453);const t={},i="\u94f6\u674f\u53f6\u4e66 chapter 5",c={id:"Chcore\u6e90\u7801\u9605\u8bfb/\u5185\u5b58\u5206\u914d\u5668/\u53c2\u8003-\u94f6\u674f\u53f6\u4e66chapter5\u7b14\u8bb0",title:"\u94f6\u674f\u53f6\u4e66 chapter 5",description:"\u4e3a\u4ec0\u4e48\u4f7f\u7528slab + buddy sys",source:"@site/docs/Chcore\u6e90\u7801\u9605\u8bfb/\u5185\u5b58\u5206\u914d\u5668/4.\u53c2\u8003-\u94f6\u674f\u53f6\u4e66chapter5\u7b14\u8bb0.md",sourceDirName:"Chcore\u6e90\u7801\u9605\u8bfb/\u5185\u5b58\u5206\u914d\u5668",slug:"/Chcore\u6e90\u7801\u9605\u8bfb/\u5185\u5b58\u5206\u914d\u5668/\u53c2\u8003-\u94f6\u674f\u53f6\u4e66chapter5\u7b14\u8bb0",permalink:"/docs/Chcore\u6e90\u7801\u9605\u8bfb/\u5185\u5b58\u5206\u914d\u5668/\u53c2\u8003-\u94f6\u674f\u53f6\u4e66chapter5\u7b14\u8bb0",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"notesSidebar",previous:{title:"kmalloc",permalink:"/docs/Chcore\u6e90\u7801\u9605\u8bfb/\u5185\u5b58\u5206\u914d\u5668/kmalloc"},next:{title:"\u591a\u6838\u652f\u6301",permalink:"/docs/Chcore\u6e90\u7801\u9605\u8bfb/\u591a\u6838\u652f\u6301\u4e0e\u8c03\u5ea6/\u591a\u6838\u652f\u6301"}},r={},o=[{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528slab + buddy sys",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528slab--buddy-sys",level:3},{value:"\u67e5\u770b\u672c\u673a\u7684slab",id:"\u67e5\u770b\u672c\u673a\u7684slab",level:3},{value:"\u5982\u4f55\u83b7\u5f97\u66f4\u591a\u7269\u7406\u5185\u5b58\u8d44\u6e90",id:"\u5982\u4f55\u83b7\u5f97\u66f4\u591a\u7269\u7406\u5185\u5b58\u8d44\u6e90",level:3},{value:"\u6027\u80fd\u4f18\u5316",id:"\u6027\u80fd\u4f18\u5316",level:3}];function d(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"\u94f6\u674f\u53f6\u4e66-chapter-5",children:"\u94f6\u674f\u53f6\u4e66 chapter 5"}),"\n",(0,n.jsx)(s.h3,{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528slab--buddy-sys",children:"\u4e3a\u4ec0\u4e48\u4f7f\u7528slab + buddy sys"}),"\n",(0,n.jsx)(s.p,{children:"buddy sys\u5bf9\u5927\u5185\u5b58\u5757\uff0c\u5916\u90e8\u788e\u7247\u548c\u5206\u914d\u901f\u5ea6\u4e0a\u8868\u73b0\u826f\u597d, \u4f46\u5bf9\u5c0f\u4e8e\u9875\u7c92\u5ea6\u7684\u5185\u5b58\u5206\u914d\u5b58\u5728\u592a\u591a\u7684\u5185\u90e8\u788e\u7247"}),"\n",(0,n.jsx)(s.p,{children:"\u56e0\u6b64linux\u5f15\u5165\u4e86SLab\u4f5c\u4e3abuddy sys\u7684\u8865\u5145, \u6838\u5fc3\u601d\u60f3\u662f\u5c06\u4e00\u4e2apage \u5212\u5206\u6210 meta data + \u4e00\u7cfb\u5217\u7684\u7b49\u957f slot, \u8fd9\u6837\u5728slab\u4e4b\u4e2d\u8fdb\u884c\u5c0f\u5185\u5b58\u5206\u914d\u7684\u65f6\u5019\u5c31\u53ef\u4ee5\u517c\u987e\u8f83\u5feb\u7684\u901f\u5ea6\u548c\u8f83\u5c0f\u7684\u5185\u90e8\u788e\u7247"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"linux\u5185\u6838\u5305\u62ec\u4e09\u79cd\u5c0f\u5bf9\u8c61\u7ba1\u7406\u65b9\u5f0f\uff0cslab\uff0cslub\u548cslob\uff0cslab\u7ef4\u62a4\u590d\u6742\uff0c\u5f00\u9500\u8f83\u5927; slob\u5f00\u9500\u6700\u5c0f,\u4f46\u788e\u7247\u6307\u6807\u7b49\u4e0d\u4f73,\u7528\u4e8e\u5d4c\u5165\u5f0f\u7b49; linux\u9ed8\u8ba4\u4f7f\u7528\u6298\u4e2d\u7684slub"}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["\u5728 ",(0,n.jsx)(s.a,{href:"https://hammertux.github.io/slab-allocator",children:"https://hammertux.github.io/slab-allocator"})," \u4e5f\u6709\u8bba\u8ff0"]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"SLOB Allocator"}),": Was the original slab allocator as implemented in\xa0",(0,n.jsx)(s.em,{children:"Solaris OS"}),". Now used for embedded systems where memory is scarce, performs well when allocating very small chunks of memory. Based on the\xa0",(0,n.jsx)(s.em,{children:"first-fit"}),"\xa0allocation algorithm."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"SLAB Allocator"}),": An improvement over the SLOB allocator, aims to be very\xa0",(0,n.jsx)(s.em,{children:"\u201ccache-friendly\u201d"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"SLUB Allocator"}),": Has better execution time than the SLAB allocator by reducing the number of queues/chains used."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"slab in linux kernel"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://www.dingmos.com/index.php/archives/23/",children:"https://www.dingmos.com/index.php/archives/23/"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://freeflyingsheep.github.io/posts/kernel/memory/slab/",children:"https://freeflyingsheep.github.io/posts/kernel/memory/slab/"})}),"\n",(0,n.jsx)(s.h3,{id:"\u67e5\u770b\u672c\u673a\u7684slab",children:"\u67e5\u770b\u672c\u673a\u7684slab"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"sudo cat /proc/slabinfo\n\n# \u4e13\u7528\u90e8\u5206\n# ...\nnsproxy             1344   1344     72   56    1 : tunables    0    0    0 : slabdata     24     24      0\nvma_lock          366998 451350     40  102    1 : tunables    0    0    0 : slabdata   4425   4425      0\nfiles_cache         1518   1518    704   46    8 : tunables    0    0    0 : slabdata     33     33      0\nsignal_cache        1732   1932   1152   28    8 : tunables    0    0    0 : slabdata     69     69      0\nsighand_cache       1395   1395   2112   15    8 : tunables    0    0    0 : slabdata     93     93      0\ntask_struct         4897   5091  10496    3    8 : tunables    0    0    0 : slabdata   1697   1697      0\n# \u901a\u7528\u90e8\u5206\n# ...\ndma-kmalloc-8k         0      0   8192    4    8 : tunables    0    0    0 : slabdata      0      0      0\ndma-kmalloc-4k         0      0   4096    8    8 : tunables    0    0    0 : slabdata      0      0      0\ndma-kmalloc-2k         0      0   2048   16    8 : tunables    0    0    0 : slabdata      0      0      0\ndma-kmalloc-1k         0      0   1024   32    8 : tunables    0    0    0 : slabdata      0      0      0\ndma-kmalloc-512        0      0    512   32    4 : tunables    0    0    0 : slabdata      0      0      0\ndma-kmalloc-256        0      0    256   32    2 : tunables    0    0    0 : slabdata      0      0      0\ndma-kmalloc-192        0      0    192   42    2 : tunables    0    0    0 : slabdata      0      0      0\ndma-kmalloc-128        0      0    128   32    1 : tunables    0    0    0 : slabdata      0      0      0\ndma-kmalloc-96         0      0     96   42    1 : tunables    0    0    0 : slabdata      0      0      0\ndma-kmalloc-64         0      0     64   64    1 : tunables    0    0    0 : slabdata      0      0      0\ndma-kmalloc-32         0      0     32  128    1 : tunables    0    0    0 : slabdata      0      0      0\ndma-kmalloc-16         0      0     16  256    1 : tunables    0    0    0 : slabdata      0      0      0\ndma-kmalloc-8          0      0      8  512    1 : tunables    0    0    0 : slabdata      0      0      0\nkmalloc-8k            64     64   8192    4    8 : tunables    0    0    0 : slabdata     16     16      0\nkmalloc-4k           569    584   4096    8    8 : tunables    0    0    0 : slabdata     73     73      0\nkmalloc-2k           752    752   2048   16    8 : tunables    0    0    0 : slabdata     47     47      0\nkmalloc-1k           704    704   1024   32    8 : tunables    0    0    0 : slabdata     22     22      0\nkmalloc-512         2112   2112    512   32    4 : tunables    0    0    0 : slabdata     66     66      0\nkmalloc-256          768    768    256   32    2 : tunables    0    0    0 : slabdata     24     24      0\nkmalloc-192         1050   1050    192   42    2 : tunables    0    0    0 : slabdata     25     25      0\nkmalloc-128         1376   1376    128   32    1 : tunables    0    0    0 : slabdata     43     43      0\nkmalloc-96          1134   1134     96   42    1 : tunables    0    0    0 : slabdata     27     27      0\nkmalloc-64          3072   3072     64   64    1 : tunables    0    0    0 : slabdata     48     48      0\nkmalloc-32          3072   3072     32  128    1 : tunables    0    0    0 : slabdata     24     24      0\nkmalloc-16          6144   6144     16  256    1 : tunables    0    0    0 : slabdata     24     24      0\nkmalloc-8          12288  12288      8  512    1 : tunables    0    0    0 : slabdata     24     24      0\n"})}),"\n",(0,n.jsxs)(s.p,{children:["The slab allocator provides two main classes of caches",":slab","\u5206\u914d\u5668\u63d0\u4f9b\u4e24\u79cd\u4e3b\u8981\u7684\u7f13\u5b58\u7c7b\u578b\uff1a"]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Dedicated"}),": These are caches that are created in the kernel for commonly used objects (e.g.,\xa0",(0,n.jsx)(s.code,{children:"mm_struct"}),",\xa0",(0,n.jsx)(s.code,{children:"vm_area_struct"}),", etc\u2026). Structures allocated in this cache are initialised and when they are freed, they remain initialised so that the next allocation will be faster."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Dedicated"}),"\uff1a\u8fd9\u4e9b\u662f\u5728\u5185\u6838\u4e2d\u4e3a\u5e38\u7528\u5bf9\u8c61\uff08\u4f8b\u5982\uff0c",(0,n.jsx)(s.code,{children:"mm_struct"}),"\u3001",(0,n.jsx)(s.code,{children:"vm_area_struct"}),"\u7b49\uff09\u3002\u5728\u8fd9\u4e2a\u7f13\u5b58\u4e2d\u5206\u914d\u7684\u7ed3\u6784\u88ab\u521d\u59cb\u5316\uff0c\u5f53\u5b83\u4eec\u88ab\u91ca\u653e\u65f6\uff0c\u5b83\u4eec\u4fdd\u6301\u521d\u59cb\u5316\uff0c\u4ee5\u4fbf\u4e0b\u4e00\u6b21\u5206\u914d\u4f1a\u66f4\u5feb\u3002"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Generic"}),"\xa0(",(0,n.jsx)(s.em,{children:"size-N"}),"\xa0and\xa0",(0,n.jsx)(s.em,{children:"size-N(DMA)"}),"): These are general purpose caches, which in most cases are of sizes corresponding to powers of two."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u901a\u7528"}),"\uff08",(0,n.jsx)(s.em,{children:"\u5927\u5c0f\u4e3aN"}),"\u548c",(0,n.jsx)(s.em,{children:"\u5927\u5c0f\u4e3aN\uff08DMA\uff09"}),"\uff09\uff1a\u8fd9\u4e9b\u662f\u901a\u7528\u7f13\u5b58\uff0c\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u5176\u5927\u5c0f\u5bf9\u5e94\u4e8e2\u7684\u5e42\u3002"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["In the\xa0",(0,n.jsx)(s.strong,{children:"SLUB allocator"}),"\xa0things are less complicated because it stops keeping lists (queues) of different types, each cpu etc\u2026 Also the data structures used by SLUB are less cluttered and complicated thanks to these adjustments. ",(0,n.jsx)(s.strong,{children:"The only queue that the SLUB allocator manages is a linked list for every of the objects in each of the slab pages"}),". The idea was to ",(0,n.jsx)(s.strong,{children:"minimise TLB thrashing by associating a slab page to the CPU"})," (known as\xa0",(0,n.jsx)(s.strong,{children:"CPU slab"}),") instead of a queue, so that we are only allocating objects within that page, meaning that we will be accessing the same TLB entry."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"\u5982\u4f55\u83b7\u5f97\u66f4\u591a\u7269\u7406\u5185\u5b58\u8d44\u6e90",children:"\u5982\u4f55\u83b7\u5f97\u66f4\u591a\u7269\u7406\u5185\u5b58\u8d44\u6e90"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\u6362\u9875\u673a\u5236","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\u539f\u7406\uff1a\u7f3a\u5c11\u5185\u5b58\u65f6\uff0c\u5c06\u5185\u5b58\u9875\u6362\u51fa\u5230\u78c1\u76d8\uff0c\u4fee\u6539\u5bf9\u5e94\u8fdb\u7a0b\u9875\u8868\u7684pte\uff0c\u540c\u65f6\u5728\u67d0\u4e9b\u5730\u65b9\u8bb0\u5f55\u6362\u51fa\u7684\u5730\u5740; \u5f53\u91cd\u65b0\u8bbf\u95ee\u5230\u8fd9\u4e2a\u9875\u7684\u65f6\u5019\uff0c\u89e6\u53d1\u4e00\u4e2apagefault, os \u53d1\u73b0\u8fd9\u4e2a\u865a\u62df\u9875\u5728\u5408\u6cd5\u7684\u865a\u62df\u5730\u5740\u7a7a\u95f4\uff08linux vma\uff09\u5185\uff0c\u56e0\u800c\u77e5\u9053\u662f\u6362\u51fa\u5230\u4e86\u78c1\u76d8\u3002","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"\u5982\u4f55\u533a\u5206\u662f\u6362\u51fa\uff08swap out\uff09\u8fd8\u662f \u6309\u9700\u5206\u914d\uff08demand paging\uff09? \u53ef\u4ee5\u5728pte\u4e0a\u4f7f\u7528\u989d\u5916\u7684\u6807\u8bb0\u4f4d"}),"\n",(0,n.jsx)(s.li,{children:"\u662f\u5185\u5b58\u7528\u5b8c\u4e86\u624d\u4f1a\u6362\u51fa\u5417\uff1f\u4e0d\u662f\uff0c\u6709\u53ef\u914d\u7f6e\u7684watermark, linux \u7684\u5185\u5b58\u8d44\u6e90\u5c0f\u4e8e\u4f4e\u6c34\u4f4d\u7ebf\u65f6\uff0c\u5f00\u59cb\u542f\u7528\u6362\u51fa\uff0c\u5230\u9ad8\u6c34\u4f4d\u7ebf\u505c\u6b62; \u5982\u679c\u5185\u5b58\u8d44\u6e90\u6bd4\u6700\u5c0f\u6c34\u4f4d\u7ebf\u8fd8\u4f4e\uff0c\u5219\u7acb\u523b\u8fdb\u884c\u6279\u91cf\u6362\u51fa\uff08\u4f9d\u7136\u53ef\u4ee5\u914d\u7f6e\uff09"}),"\n",(0,n.jsx)(s.li,{children:"\u5982\u4f55\u4ece\u7269\u7406\u9875\u5f97\u5230\u6240\u6709\u4f7f\u7528\u5b83\u7684\u8fdb\u7a0b\u7684pte\uff1a Linux reverse mapping // TODO"}),"\n",(0,n.jsx)(s.li,{children:"\u4f18\u5316\uff1a\u6362\u9875\u5e26\u6765\u7684\u6027\u80fd\u635f\u5931\u53ef\u4ee5\u901a\u8fc7\u9884\u53d6\uff08prefetching\uff09\u8fdb\u884c\u964d\u4f4e\uff0c\u4e00\u4e2a\u662f\u51cf\u5c11trap\u7684\u6b21\u6570\uff0c\u53e6\u4e00\u4e2a\u662f\u53ef\u4ee5batch processing\u548c\u5e73\u5747\u78c1\u76d8\u5bfb\u9053\u7b49\u65f6\u95f4"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\u6362\u9875\u7b56\u7565","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"FIFO"}),"\n",(0,n.jsx)(s.li,{children:"Second Chance\uff1a FIFO + \u6bcf\u4e2a\u9875\u4e00\u4e2a\u7269\u7406\u4f4d\uff0c\u5982\u679c\u88ab\u8bbf\u95ee\u5c31\u5c06\u5176\u7f6e1, \u5982\u679c\u4e3a1\u5219\u5728\u88abevict\u7684\u65f6\u5019\u6709\u4e00\u6b21\u56de\u5230\u961f\u5934\u7684\u201c\u514d\u6b7b\u673a\u4f1a\u201d"}),"\n",(0,n.jsx)(s.li,{children:"LRU"}),"\n",(0,n.jsx)(s.li,{children:"\u65f6\u949f\u7b97\u6cd5\uff1a\u8fd1\u4f3cLRU\uff0c\u540c\u6837\u7684\u6bcf\u4e2a\u9875\u4e00\u4e2a\u7269\u7406\u4f4d\uff0c\u4f46\u56e0\u4e3a\u6ca1\u6709\u961f\u5c3e\u2192\u961f\u5934\u7684\u64cd\u4f5c\uff0c\u6bd4Second Chance\u66f4\u9ad8\u6548"}),"\n",(0,n.jsx)(s.li,{children:"\u2026"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.li,{children:"\u5904\u7406thrashing\uff1a\u5de5\u4f5c\u96c6\u6a21\u578b\uff0c\u5728\u524d\u4e00\u6bb5\u65f6\u95f4t\u5185\u8bbf\u95ee\u7684pages\u9884\u6d4b\u4e3a\u540e\u4e00\u6bb5\u65f6\u95f4t\u5185\u7684\u5de5\u4f5c\u96c6\uff0c\u5e94\u8be5\u4f18\u5148\u6362\u51fa\u975e\u5de5\u4f5c\u96c6\u7684\u9875\uff0c\u800c\u4e0d\u662f\u628a\u6240\u6709\u7684\u6362\u5165\u6362\u51fa\u90fd\u4ea4\u7ed9LRU\u7684\u4e0d\u53ef\u63a7\u5927\u624b\uff08\u7531lru\u7684size\u51b3\u5b9a\uff09\u3002\u5de5\u4f5c\u96c6\u8ffd\u8e2a\u7684\u601d\u8def\u5728\u4e8e\u989d\u5916\u5bf9\u6bcf\u4e2a\u9875\u4fdd\u5b58\u4e00\u4e2a\u65f6\u95f4\u6233"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\u7528vm\u8282\u7ea6\u7269\u7406\u8d44\u6e90","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"\u5185\u5b58\u53bb\u91cd\uff1akernel\u5b9a\u65f6\u626b\u63cf\uff0c\u76f8\u540c\u7269\u7406\u9875\u5408\u5e76\uff08Linux KSM\uff09(\u53ef\u80fd\u5bfc\u81f4\u6027\u80fd\u4e0b\u964d)"}),"\n",(0,n.jsx)(s.li,{children:"\u5185\u5b58\u538b\u7f29\uff1a\u7531\u4e8e\u5185\u5b58\u548c\u78c1\u76d8\u7684\u6027\u80fd\u5dee\u5f97\u8d8a\u6765\u8d8a\u5927\uff0c\u4f5c\u4e3a\u6362\u51fa\u7684\u4e2d\u95f4\u9009\u9879\uff0c\u53ef\u4ee5\u628a\u5185\u5b58\u9875\u538b\u7f29\u653e\u5230\u4e00\u6bb5\u4e13\u95e8\u7684\u533a\u57df\uff08Linux zswap\uff09\uff0c\u8bbf\u95ee\u65f6\u89e3\u538b"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"\u6027\u80fd\u4f18\u5316",children:"\u6027\u80fd\u4f18\u5316"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"\u591a\u4e2aslab allocator(\u6bcf\u4e2acpu\u4e00\u4e2a) \u51cf\u5c11\u9501\u7ade\u4e89\uff08TODO: \u5982\u4f55\u4fdd\u8bc1\u4e00\u81f4\u6027\uff1f\uff09"}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"\u7f13\u5b58\u7740\u8272\uff08Cache Coloring/Page Coloring\uff09"}),"\uff1a\u5206\u914d\u7269\u7406\u9875\u7684\u65f6\u5019\u5c3d\u53ef\u80fd\u5747\u5300\u5730\u5360\u7528cpu\u7684\u4e0d\u540ccache set, \u5728\u57fa\u7840\u7684\u5206\u914d\u8fde\u7eed\u5757\u4e4b\u5916\u3002\u5355\u6838\u4e0a\u8fd9\u4e2a\u95ee\u9898\u57fa\u672c\u53ea\u9700\u8981\u4fdd\u8bc1\u5206\u914d\u7684\u5185\u5b58\u8fde\u7eed\u6027\uff0ccache \u7684 set tag\u8bbe\u8ba1\u81ea\u7136\u6ee1\u8db3\u8fd9\u4e00\u70b9\uff0c\u4f46\u5728\u591a\u6838\u4e0a\u5982\u4f55\u4f18\u5316\u4ee5\u51cf\u5c11\u7ade\u4e89\u662f\u4e00\u4e2a\u95ee\u9898","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"\u4e1a\u754c\u65b9\u6848\uff1aIntel CAT\uff0cARMv8-A MPAM\uff0c\u7528\u4f4d\u56fe\u6216\u8005\u5bc4\u5b58\u5668\u7684\u503c\u6765\u6307\u5b9a\u4e00\u4e2a\u8fdb\u7a0b\u53ef\u4ee5\u4f7f\u7528\u54ea\u4e9b\u7f13\u5b58"}),"\n",(0,n.jsxs)(s.li,{children:["ref: ",(0,n.jsx)(s.a,{href:"https://liulei-sys-inventor.github.io/files/Page%20Coloring%E7%9A%84%E5%8E%86%E5%8F%B2%E4%B8%8E%E5%8F%91%E5%B1%95.pdf",children:"https://liulei-sys-inventor.github.io/files/Page Coloring\u7684\u5386\u53f2\u4e0e\u53d1\u5c55.pdf"})," // \u5f85\u589e\u52a0"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.li,{children:"NUMA: \u5c3d\u53ef\u80fd\u8ba9cpu\u8bbf\u95ee\u9760\u8fd1\u7684\u5185\u5b58\uff0c\u73b0\u4ee3cpu\u67b6\u6784\u4e4b\u4e2d\u8fd1\u5185\u5b58\u548c\u8fdc\u5185\u5b58\u8bbf\u95ee\u65f6\u5ef6\u5dee\u8ddd\u88ab\u62c9\u5f00\uff0c\u5bf9OS\u4e0d\u518d\u900f\u660e\uff0clinux libnuma\u5e93\u7b49\uff0c\u5c3d\u53ef\u80fd\u5728\u672c\u5730\u8282\u70b9\u5185\u5b58\u5206\u914d"}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,s,l)=>{l.d(s,{R:()=>i,x:()=>c});var n=l(96540);const a={},t=n.createContext(a);function i(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);