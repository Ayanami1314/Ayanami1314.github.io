"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4955],{43740:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>_,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var s=l(74848),r=l(28453);const t={},a="\u5c0f\u5185\u5b58\u5206\u914d\u4f18\u5316 SLab",i={id:"Chcore\u6e90\u7801\u9605\u8bfb/\u5185\u5b58\u5206\u914d\u5668/slab",title:"\u5c0f\u5185\u5b58\u5206\u914d\u4f18\u5316 SLab",description:"slub \u53ea\u5bf9\u5206\u914d\u56fa\u5b9a\u5927\u5c0f\u7684\u5185\u5b58\u5c0f\u5757\u8fdb\u884c\u4f18\u5316 \uff082^n, 3\u2264n\u226412\uff09",source:"@site/docs/Chcore\u6e90\u7801\u9605\u8bfb/\u5185\u5b58\u5206\u914d\u5668/2.slab.md",sourceDirName:"Chcore\u6e90\u7801\u9605\u8bfb/\u5185\u5b58\u5206\u914d\u5668",slug:"/Chcore\u6e90\u7801\u9605\u8bfb/\u5185\u5b58\u5206\u914d\u5668/slab",permalink:"/docs/Chcore\u6e90\u7801\u9605\u8bfb/\u5185\u5b58\u5206\u914d\u5668/slab",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"notesSidebar",previous:{title:"buddy system",permalink:"/docs/Chcore\u6e90\u7801\u9605\u8bfb/\u5185\u5b58\u5206\u914d\u5668/buddy-sys"},next:{title:"kmalloc",permalink:"/docs/Chcore\u6e90\u7801\u9605\u8bfb/\u5185\u5b58\u5206\u914d\u5668/kmalloc"}},o={},c=[];function d(n){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u5c0f\u5185\u5b58\u5206\u914d\u4f18\u5316-slab",children:"\u5c0f\u5185\u5b58\u5206\u914d\u4f18\u5316 SLab"}),"\n",(0,s.jsxs)(e.p,{children:["slub \u53ea\u5bf9\u5206\u914d\u56fa\u5b9a\u5927\u5c0f\u7684\u5185\u5b58\u5c0f\u5757\u8fdb\u884c\u4f18\u5316 ",(0,s.jsx)(e.code,{children:"\uff082^n, 3\u2264n\u226412\uff09"})]}),"\n",(0,s.jsx)(e.p,{children:"\u5bf9\u6bcf\u4e00\u79cd\u5757\u5927\u5c0f\uff0c \u4f1a\u6709\u4e00\u4e2a\u72ec\u7acb\u7684\u5185\u5b58\u6c60"}),"\n",(0,s.jsx)(e.p,{children:"\u67e5\u770b\u672c\u673aslab\u53ef\u4ee5\u770b\u89c1"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sudo cat /proc/slabinfo\n\nkmalloc-4k           569    584   4096    8    8 : tunables    0    0    0 : slabdata     73     73      0\nkmalloc-2k           752    752   2048   16    8 : tunables    0    0    0 : slabdata     47     47      0\nkmalloc-1k           704    704   1024   32    8 : tunables    0    0    0 : slabdata     22     22      0\nkmalloc-512         2112   2112    512   32    4 : tunables    0    0    0 : slabdata     66     66      0\nkmalloc-256          768    768    256   32    2 : tunables    0    0    0 : slabdata     24     24      0\nkmalloc-192         1050   1050    192   42    2 : tunables    0    0    0 : slabdata     25     25      0\nkmalloc-128         1376   1376    128   32    1 : tunables    0    0    0 : slabdata     43     43      0\nkmalloc-96          1134   1134     96   42    1 : tunables    0    0    0 : slabdata     27     27      0\nkmalloc-64          3072   3072     64   64    1 : tunables    0    0    0 : slabdata     48     48      0\nkmalloc-32          3072   3072     32  128    1 : tunables    0    0    0 : slabdata     24     24      0\nkmalloc-16          6144   6144     16  256    1 : tunables    0    0    0 : slabdata     24     24      0\nkmalloc-8          12288  12288      8  512    1 : tunables    0    0    0 : slabdata     24     24      0\n"})}),"\n",(0,s.jsx)(e.p,{children:"slub \u5206\u914d\u5668\u5411 buddy system\u7533\u8bf7\u4e00\u5b9a\u5927\u5c0f\u7684\u7269\u7406\u5185\u5b58\u5757\uff0c\u5e76\u5c06\u5f97\u5230\u7684\u5185\u5b58\u5757\u4f5c\u4e3aslab"}),"\n",(0,s.jsx)(e.p,{children:"slab\u88ab\u5212\u5206\u4e3a\u7b49\u957f\u7684\u5c0f\u5757\u5185\u5b58, \u5185\u90e8\u662f\u7a7a\u95f2\u94fe\u8868\u7684\u5f62\u5f0f"}),"\n",(0,s.jsx)(e.p,{children:"\u5185\u5b58\u8d44\u6e90\u6c60\u901a\u5e38\u6709current\u548cpartial\u4e24\u4e2a\u6307\u9488\uff0cpartial\u6307\u5411\u90e8\u5206\u7a7a\u95f2\u7684slab\u7ec4\uff0ccurrent\u6307\u5411\u4e00\u4e2aslab\u5757"}),"\n",(0,s.jsx)(e.p,{children:"\u5206\u914d\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5206\u914d\u65f6\uff0c\u6240\u6709\u7684\u5185\u5b58\u5757\u4ececurrent\u62ff"}),"\n",(0,s.jsx)(e.li,{children:"\u5982\u679ccurrent\u5757\u5df2\u7ecf\u6ee1\u4e86\uff0c\u4ecepartial\u4e4b\u4e2d\u53d6\u4e00\u4e2aslab\u4f5c\u4e3a\u65b0\u7684current"}),"\n",(0,s.jsx)(e.li,{children:"\u5982\u679cpartial\u4e3a\u7a7a\uff0c\u5411buddy sys\u7533\u8bf7\u66f4\u591a\u7684\u7a7a\u95f4"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u91ca\u653e\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u627e\u5230\u91ca\u653e\u5757\u6240\u5c5e\u7684slab\uff0c\u5982\u679c\u8fd9\u4e2aslab\u4e4b\u524d\u662f\u5168\u6ee1\u7684\uff0c\u628a\u4ed6\u91cd\u65b0\u653e\u5230partial\u7684\u94fe\u8868\u4e4b\u4e2d","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.strong,{children:"\u95ee\u9898\uff1a\u600e\u4e48\u627e\u5230\u91ca\u653e\u5757\u6240\u5c5e\u7684slab\uff0c\u4e00\u79cd\u65b9\u5f0f\u662f\u7ef4\u62a4\u4e00\u4e2a\u989d\u5916\u7684full slab\u7ec4\uff0c\u53e6\u4e00\u79cd\u65b9\u5f0f\u662f\u8ba9slab\u7684\u5185\u5b58\u5730\u5740\u5bf9\u9f50\uff0c\u5e76\u5728slab\u5934\u90e8\u52a0\u4e0a\u5143\u6570\u636e\u5b9e\u73b0"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:"struct slab_pointer {\n        struct slab_header *current_slab;\n        struct list_head partial_slab_list;\n};\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5728chcore\u4e4b\u4e2d\u91c7\u7528\u7684\u662f\u5185\u5b58\u5bf9\u9f50+\u5143\u6570\u636e\u7684\u65b9\u5f0f\uff0c\u5177\u4f53\u800c\u8a00\uff0c\u5143\u6570\u636e\u4e3a\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5728\u6bcf\u4e00\u4e2aslab\u5757\u7684\u5f00\u5934\uff0c\u7ef4\u62a4\u4e00\u4e2a\u5176\u4e2d\u5185\u5b58\u69fdslot\u7684free list head"}),"\n",(0,s.jsx)(e.li,{children:"\u5728\u6bcf\u4e00\u4e2a\u5185\u5b58\u69fdslot\u4e4b\u4e2d\uff0c\u5b58\u4e00\u4e2anext_free\u7684\u6307\u9488"}),"\n",(0,s.jsx)(e.li,{children:"slab\u7531buddy sys\u5206\u914d\uff0c\u4fdd\u8bc1slab header\u5730\u5740\u6309 page \u5bf9\u9f50"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u8fd9\u6837\uff0c\u5f53\u6211\u60f3\u8981free addr\u65f6, \u53ef\u4ee5\u627e\u5230\u5bf9\u5e94\u7684page, \u8fdb\u800c\u627e\u5230slab header, \u8fdb\u800c\u5f97\u5230free_list\uff0c\u6700\u540e\u5728free_list\u4e4b\u4e2d\u63d2\u5165\u8fd9\u4e2aslot, \u7136\u540e\u7531\u8fd9\u4e2aslab\u7684\u7a7a\u95f2slot\u4e2a\u6570\u5224\u65ad\u662f\u5426\u662f full \u2192 partial, partial\u2192free, \u4ece\u800c\u8fdb\u884c\u63d2\u5165partial list\u6216\u8005\u628aslab\u7a7a\u95f4\u5f52\u8fd8\u7ed9buddy sys\u7684\u64cd\u4f5c"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:"/*\n * order range: [SLAB_MIN_ORDER, SLAB_MAX_ORDER]\n * ChCore prepares the slab for each order in the range.\n */\n#define SLAB_MIN_ORDER (5)\n#define SLAB_MAX_ORDER (11)\n\n/* The size of one slab is 128K. */\n#define SIZE_OF_ONE_SLAB (128*1024)\n\n/* slab_header resides in the beginning of each slab (i.e., occupies the first slot). */\nstruct slab_header {\n        /* The list of free slots, which can be converted to struct slab_slot_list. */\n        void *free_list_head;\n        /* Partial slab list. */\n        struct list_head node;\n\n        int order;\n        unsigned short total_free_cnt; /* MAX: 65536 */\n        unsigned short current_free_cnt;\n};\n\n/* Each free slot in one slab is regarded as slab_slot_list. */\nstruct slab_slot_list {\n        void *next_free;\n};\n\nstruct slab_pointer {\n        struct slab_header *current_slab;\n        struct list_head partial_slab_list;\n};\n\n/* All interfaces are kernel/mm module internal interfaces. */\nvoid init_slab(void);\nvoid *alloc_in_slab(unsigned long, size_t *);\nvoid free_in_slab(void *addr);\nunsigned long get_free_mem_size_from_slab(void);\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:'static void try_insert_full_slab_to_partial(struct slab_header *slab)\n{\n        /* @slab is not a full one. */\n        if (slab->current_free_cnt != 0)\n                return;\n\n        int order;\n        order = slab->order;\n\n        list_append(&slab->node, &slab_pool[order].partial_slab_list);\n}\nstatic void try_return_slab_to_buddy(struct slab_header *slab, int order)\n{\n        /* The slab is whole free now. */\n        if (slab->current_free_cnt != slab->total_free_cnt)\n                return;\n\n        if (slab == slab_pool[order].current_slab)\n                choose_new_current_slab(&slab_pool[order], order);\n        else\n                list_del(&slab->node);\n\n        /* Clear the slab field in the page structures before freeing them. */\n        set_or_clear_slab_in_page(slab, SIZE_OF_ONE_SLAB, false);\n        free_pages_without_record(slab);\n}\nvoid free_in_slab(void *addr)\n{\n        struct page *page;\n        struct slab_header *slab;\n        struct slab_slot_list *slot;\n        int order;\n\n        slot = (struct slab_slot_list *)addr;\n        // \u62ff\u5230\u5bf9\u5e94\u7684page\n        page = virt_to_page(addr);\n        if (!page) {\n                kdebug("invalid page in %s", __func__);\n                return;\n        }\n\n        slab = page->slab;\n        order = slab->order;\n        lock(&slabs_locks[order]);\n        // \u68c0\u67e5\u662f\u5426\u662ffull -> partial(\u901a\u8fc7header\u4e2dslot\u7684free cnt)\n        try_insert_full_slab_to_partial(slab);\n\n#if ENABLE_DETECTING_DOUBLE_FREE_IN_SLAB == ON\n        /*\n         * SLAB double free detection: check whether the slot to free is\n         * already in the free list.\n         */\n        if (check_slot_is_free(slab, slot) == 1) {\n                kinfo("SLAB: double free detected. Address is %p\\n",\n                      (unsigned long)slot);\n                BUG_ON(1);\n        }\n#endif\n\n        slot->next_free = slab->free_list_head;\n        slab->free_list_head = slot;\n        slab->current_free_cnt += 1;\n\n        try_return_slab_to_buddy(slab, order);\n\n        unlock(&slabs_locks[order]);\n}\n\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u8fd9\u91cc\u6709\u4e00\u4e2a\u5f88\u5de7\u5999\u7684\u7c7b\u4f3cunion\u7684\u8bbe\u8ba1"})}),"\n",(0,s.jsx)(e.p,{children:"slot \u662f\u663e\u5f0f\u7a7a\u95f2\u94fe\u8868\u7684\u597d\u5904\u5728\u4e8e\uff0c\u5728\u7a7a\u95f2\u65f6\uff0cslot\u7684\u7a7a\u95f4\u53ef\u4ee5\u7528\u6765\u7ef4\u62a4\u4fe1\u606f\uff0c\u4f8b\u5982"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:"struct slab_slot_list {\n        void *next_free; // \u6b64\u59048\u5b57\u8282\n};\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4f46\u5e76\u6ca1\u6709\u5f71\u54cdslot\u7684\u4e2a\u6570\uff0c\u7f13\u5b58\u884c\u548c\u9875\u7684\u5bf9\u9f50"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u56e0\u4e3a\u5f53\u5b9e\u9645alloc\u7684\u65f6\u5019\uff0c\u521a\u597d\u8fd9\u4e2aslot\u4e0d\u518d\u662f\u7a7a\u95f2\u94fe\u8868\u7684\u6210\u5458\uff0c\u4e0d\u518d\u9700\u8981\u5b83\u7684\u4fe1\u606f"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u6240\u4ee5\u53ef\u4ee5\u76f4\u63a5\u8fd4\u56deslot\u7684\u5730\u5740\u7ed9\u8c03\u7528\u8005\uff0c\u8986\u76d6\u6389\u8fd9\u4e2anext_free\u4e5f\u6ca1\u6709\u4efb\u4f55\u5173\u7cfb"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:"void *alloc_in_slab(unsigned long size, size_t *real_size)\n{\n\t\t\t\t// real_size\u4ec5\u4f5c\u7edf\u8ba1\u7528, \u548cslab\u65e0\u5173\n        int order;\n\n        BUG_ON(size > order_to_size(SLAB_MAX_ORDER));\n\n        order = (int)size_to_order(size);\n        if (order < SLAB_MIN_ORDER)\n                order = SLAB_MIN_ORDER;\n\n#if ENABLE_MEMORY_USAGE_COLLECTING == ON\n        if (real_size)\n                *real_size = 1 << order;\n#endif\n\t\t\t\t// \u8fd9\u91cc\u76f4\u63a5\u8fd4\u56de\u4e86\u8fd9\u4e2aslot\u7684\u6307\u9488\n        return alloc_in_slab_impl(order);\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u503c\u5f97\u501f\u9274\u7684\u8fd8\u6709alloc_in_slab_impl\u7684lazy init"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:'static void *alloc_in_slab_impl(int order)\n{\n        struct slab_header *current_slab;\n        struct slab_slot_list *free_list;\n        void *next_slot;\n\n        lock(&slabs_locks[order]);\n\t\t\t  // \u8fd9\u91cc\u505a\u4e86\u4e00\u4e2alazy init, \u4e0d\u4ec5\u5728\u8d44\u6e90\u4e0a\u83b7\u5f97\u4e86\u4e00\u5b9a\u7684\u4f18\u52bf, \u8fd8\u7b80\u5316\u4e86\u6574\u4f53init\u6a21\u5757\u7684\u903b\u8f91\uff0c\n\t\t\t  // \u628a\u5185\u90e8\u5b9e\u73b0\u7684\u90e8\u5206\u5168\u90e8\u653e\u5230\u4e86\u5185\u90e8\u63a5\u53e3\u91cc\u9762\uff0c\u4fdd\u6301\u5916\u754c\u7684\u65e0\u611f\u77e5\uff0c\u5373\u4e3a"\u9ad8\u5185\u805a\u4f4e\u8026\u5408"\n        current_slab = slab_pool[order].current_slab;\n        /* When serving the first allocation request. */\n        if (unlikely(current_slab == NULL)) {\n                current_slab = init_slab_cache(order, SIZE_OF_ONE_SLAB);\n                if (current_slab == NULL) {\n                        unlock(&slabs_locks[order]);\n                        return NULL;\n                }\n                slab_pool[order].current_slab = current_slab;\n        }\n\n        free_list = (struct slab_slot_list *)current_slab->free_list_head;\n        BUG_ON(free_list == NULL);\n\n        next_slot = free_list->next_free;\n        current_slab->free_list_head = next_slot;\n\n        current_slab->current_free_cnt -= 1;\n        /* When current_slab is full, choose a new slab as the current one. */\n        if (unlikely(current_slab->current_free_cnt == 0))\n                choose_new_current_slab(&slab_pool[order], order);\n\n        unlock(&slabs_locks[order]);\n\n        return (void *)free_list;\n}\n\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6700\u540e\u7684init\u51fd\u6570\u5c31\u5f88\u7b80\u5355\u4e86"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:'void init_slab(void)\n{\n        int order;\n\n        /* slab obj size: 32, 64, 128, 256, 512, 1024, 2048 */\n        for (order = SLAB_MIN_ORDER; order <= SLAB_MAX_ORDER; order++) {\n                lock_init(&slabs_locks[order]);\n                slab_pool[order].current_slab = NULL;\n                init_list_head(&(slab_pool[order].partial_slab_list));\n        }\n        kdebug("mm: finish initing slab allocators\\n");\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u68b3\u7406\u4e00\u4e0b\u6700\u7ec8\u7684\u5b9e\u73b0\u903b\u8f91:"}),"\n",(0,s.jsx)(e.p,{children:"\u9884\u7559\u7a7a\u95f4(\u5168\u5c40\u53d8\u91cf): \u5404\u4e2aorder\u7684slab\u7ec4\u7684\u7ed3\u6784\u4f53array\u548c\u5bf9\u5e94\u7684lock"}),"\n",(0,s.jsx)(e.p,{children:"init:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u521d\u59cb\u5316 32~ 2048 \u5b57\u8282\u4e3aslot\u7684\u5404\u4e2aslab, \u6bcf\u4e00\u4e2aslab\u4e3a ",(0,s.jsx)(e.code,{children:"SIZE_OF_ONE_SLAB=128K"})," \u5927\u5c0f\uff0c\u521d\u59cb\u5316\u5bf9\u5e94\u7684\u9501\uff0c\u5bf9\u5168\u5c40\u53d8\u91cf\u7684slab array\u7684 ",(0,s.jsx)(e.code,{children:"free_list_head"})," ",(0,s.jsx)(e.code,{children:"current_slab"})," ",(0,s.jsx)(e.code,{children:"partial_slab_list"})," \u521d\u59cb\u5316"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"alloc:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5224\u65ad\u53c2\u6570\u6b63\u786e\u6027"}),"\n",(0,s.jsxs)(e.li,{children:["\u5982\u679ccurrent slab\u4e3anull\uff0c\u4e3a\u7b2c\u4e00\u6b21\u5206\u914d\uff0c\u8c03\u7528 ",(0,s.jsx)(e.code,{children:"init_slab_cache"})," \u8fdb\u884c\u521d\u59cb\u5316\uff0c\u4ecebuddy system\u4e4b\u4e2d\u62ff ",(0,s.jsx)(e.code,{children:"SIZE_OF_ONE_SLAB"})," \u5927\u5c0f\u7684\u7a7a\u95f4\uff0c\u4e4b\u540e\u5728\u7b2c\u4e00\u4e2aslot\u5904\u521d\u59cb\u5316\u5934\u5143\u6570\u636e\uff08\u603bslot\u6570\u91cf\uff0cslab order, free_list_head, \u5f53\u524d\u7a7a\u95f2slot\u6570\u91cf\uff09\uff0c\u7136\u540e\u5faa\u73af\u5c06\u6bcf\u4e2aslot\u7684next_free\u6307\u5411\u4e0b\u4e00\u4e2a"]}),"\n",(0,s.jsx)(e.li,{children:"\u62ff\u9501\uff0c\u4ececurrent slab\u7684free list\u4e4b\u4e2d\u62ff\u8d70\u7b2c\u4e00\u4e2aslot\uff0c\u7a7a\u95f2\u5757\u6570\u91cf-=1\uff0c\u4fee\u6539free list\u5934\u6307\u9488"}),"\n",(0,s.jsx)(e.li,{children:"\u5982\u679c\u6b64\u65f6current slab\u662ffull, \u4ecepartial_slab_list\u4e4b\u4e2d\u62ff\u4e00\u4e2a\u8fc7\u6765\u4f5c\u4e3a\u65b0current"}),"\n",(0,s.jsx)(e.li,{children:"\u653e\u9501\uff0c\u8fd4\u56deslot\u7684\u5730\u5740"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"free:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4eceaddr\u62ff\u5230page\u548c\u5176\u4ed6slab\u5934\u4fe1\u606f"}),"\n",(0,s.jsx)(e.li,{children:"\u62ff\u9501\uff0c\u5c06free\u7684slot\u5934\u63d2\u56deslab\u7684free list"}),"\n",(0,s.jsx)(e.li,{children:"\u5982\u679cslab\u539f\u5148\u662ffull\uff0c\u653e\u56departial; \u5982\u679c\u73b0\u5728\u662f\u7a7a\uff0c\u653e\u56debuddy sys(\u5982\u679c\u662fcurrent, \u5148\u9009\u62e9\u65b0current)"}),"\n",(0,s.jsx)(e.li,{children:"\u653e\u9501"}),"\n"]})]})}function _(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},28453:(n,e,l)=>{l.d(e,{R:()=>a,x:()=>i});var s=l(96540);const r={},t=s.createContext(r);function a(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);