"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6653],{21244:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>a});var c=r(74848),t=r(28453);const l={title:"JUC",author:"ayanami",tags:["java","concurrency"]},i=void 0,s={permalink:"/blog/JUC",source:"@site/blog/JUC.md",title:"JUC",description:"\u81ea\u65cb\u9501->\u81ea\u65cbN\u6b21(N\u81ea\u9002\u5e94, \u53d6\u51b3\u4e8e\u5148\u524d\u5386\u53f2,\u5f53\u524d\u8d1f\u8f7d\u7b49)->\u5347\u7ea7\u4e3a\u91cd\u91cf\u7ea7\u9501",date:"2024-11-01T18:57:09.000Z",tags:[{inline:!0,label:"java",permalink:"/blog/tags/java"},{inline:!0,label:"concurrency",permalink:"/blog/tags/concurrency"}],readingTime:10.51,hasTruncateMarker:!0,authors:[{name:"ayanami"}],frontMatter:{title:"JUC",author:"ayanami",tags:["java","concurrency"]},unlisted:!1,prevItem:{title:"ostep\u9605\u8bfb\u7b14\u8bb0\uff1a\u5355\u673afs\u7684\u5d29\u6e83\u4e00\u81f4\u6027(chapter42-44)",permalink:"/blog/ostep-chapter42-44"},nextItem:{title:"cs144 labs(Winter 2024)",permalink:"/blog/cs144 labs"}},o={authorsImageUrls:[void 0]},a=[];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:["\u81ea\u65cb\u9501",(0,c.jsx)(n.code,{children:"->"}),"\u81ea\u65cbN\u6b21(N\u81ea\u9002\u5e94, \u53d6\u51b3\u4e8e\u5148\u524d\u5386\u53f2,\u5f53\u524d\u8d1f\u8f7d\u7b49)",(0,c.jsx)(n.code,{children:"->"}),"\u5347\u7ea7\u4e3a\u91cd\u91cf\u7ea7\u9501"]}),"\n",(0,c.jsx)(n.p,{children:"\u91cd\u91cf\u7ea7, mutex \u672c\u8d28\u4e0a\u7684syscall, \u8f7b\u91cf\u7ea7, CAS\u53bb\u5c1d\u8bd5\u62ff\u5230\u5bf9\u8c61\u5934\u4e2d\u7684\u9501\u6807\u8bc6\u5b57\u8282MarkWord"}),"\n",(0,c.jsx)(n.p,{children:"\u66f4\u65b0\u6210\u529f\u8bf4\u660e\u6ca1\u4eba\u62a2"}),"\n",(0,c.jsx)(n.p,{children:"\u504f\u5411\u9501: \u5f53\u67d0\u4e2a\u7ebf\u7a0b\u7b2c\u4e00\u6b21\u83b7\u53d6\u9501\u65f6, \u63a5\u4e0b\u6765\u90fd\u6ca1\u6709\u5176\u4ed6\u7ebf\u7a0b\u62ff, \u90a3\u8fd9\u4e2a\u7ebf\u7a0b\u540e\u7eed\u62ff\u9501\u5c31\u8fdeCAS\u4e5f\u4e0d\u9700\u8981"}),"\n",(0,c.jsxs)(n.p,{children:["\u65e0\u9501",(0,c.jsx)(n.code,{children:"->"}),"\u504f\u5411\u9501",(0,c.jsx)(n.code,{children:"->"}),"\u81ea\u65cb\u9501",(0,c.jsx)(n.code,{children:"->"}),"\u91cd\u91cf\u7ea7\u9501"]}),"\n",(0,c.jsx)(n.p,{children:"JMM"}),"\n",(0,c.jsx)(n.p,{children:"\u6240\u6709\u53ef\u80fd\u51fa\u73b0\u7ade\u4e89\u7684\u53d8\u91cf(\u6210\u5458, \u9759\u6001\u7b49)\u5747\u5728\u4e3b\u5185\u5b58"}),"\n",(0,c.jsx)(n.p,{children:"\u5c40\u90e8\u53d8\u91cf\u7ebf\u7a0b\u79c1\u6709, \u5de5\u4f5c\u5185\u5b58\u76f8\u4e92\u9694\u79bb, \u53ea\u80fd\u901a\u8fc7\u4e3b\u5185\u5b58\u540c\u6b65"}),"\n",(0,c.jsx)(n.p,{children:"volatile"}),"\n",(0,c.jsx)(n.p,{children:"\u9700\u8981\u7acb\u5373\u770b\u5230\u4fee\u6539\u7684\u503c, \u6bcf\u4e00\u6b21\u8bfb\u53d6\u90fd\u4ece\u4e3b\u7ebf\u7a0b\u8bfb, \u6bcf\u4e00\u6b21\u5199\u90fd\u628a\u5de5\u4f5c\u5185\u5b58\u7684\u503c\u5237\u65b0\u5230\u4e3b\u7ebf\u7a0b"}),"\n",(0,c.jsx)(n.p,{children:"\u52a0\u5165\u5185\u5b58\u5c4f\u969c\u7981\u6b62\u6307\u4ee4\u91cd\u6392"}),"\n",(0,c.jsx)(n.p,{children:"\u53ea\u4fdd\u8bc1\u53ef\u89c1\u6027, \u4e0d\u4fdd\u8bc1\u539f\u5b50\u6027"}),"\n",(0,c.jsxs)(n.p,{children:["\u8f7b\u5230\u91cd, volatie",(0,c.jsx)(n.code,{children:"->"}),"\u539f\u5b50\u7c7b",(0,c.jsx)(n.code,{children:"->"}),"\u9501"]}),"\n",(0,c.jsx)(n.p,{children:"\u53ef\u91cd\u5165\u9501, \u591a\u6b21\u52a0\u9501\u9700\u8981\u591a\u6b21\u89e3\u9501"}),"\n",(0,c.jsx)(n.p,{children:"(\u4fe1\u53f7\u91cfPV, bushi)"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"getHoldCount()"}),"\u83b7\u53d6\u5f53\u524d\u7ebf\u7a0b\u52a0\u9501\u6b21\u6570"]}),"\n",(0,c.jsx)(n.p,{children:"\u9501\u516c\u5e73\u6027?"}),"\n",(0,c.jsx)(n.p,{children:"\u53ef\u91cd\u5165\u9501\u9ed8\u8ba4\u662f\u975e\u516c\u5e73\u7684(\u4e0d\u63d0\u4f9b\u516c\u5e73\u6027\u4fdd\u8bc1)"}),"\n",(0,c.jsxs)(n.p,{children:["\u5426\u5219\u6309\u7167\u62ff\u9501\u987a\u5e8f\u6392\u961f ",(0,c.jsx)(n.code,{children:"ReentrantLock(boolean fair=false)"})]}),"\n",(0,c.jsx)(n.p,{children:"\u8bfb\u5199\u9501"}),"\n",(0,c.jsx)(n.p,{children:"\u4e00\u79cd\u8bfb\u5199\u53cc\u4fe1\u53f7\u91cf\u7684\u9ad8\u7ea7\u62bd\u8c61(\u9003)"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://stackoverflow.com/questions/17683575/binary-semaphore-vs-a-reentrantlock",children:"https://stackoverflow.com/questions/17683575/binary-semaphore-vs-a-reentrantlock"})}),"\n",(0,c.jsx)(n.p,{children:"\u4ece\u5e94\u7528\u5c42\u4e0a\u503c\u5f97\u6ce8\u610f\u7684\u5c31\u662f\u53ef\u91cd\u5165\u9501\u8fdb\u884c\u8fdb\u4e00\u6b65\u5c01\u88c5\u4e4b\u540e, \u4fdd\u8bc1\u4e86"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"\u5f3a\u5236\u8981\u6c42\u62ff\u9501\u7684\u7ebf\u7a0b\u653e\u9501,\u727a\u7272\u4e86\u4e00\u4e9b\u81ea\u7531\u5ea6\u6362\u53d6\u7f16\u7a0b\u5b89\u5168\u6027"}),"\n"]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Binary semaphores provide a non-ownership release mechanism"}),". Therefore, any thread can release the permit for a deadlock recovery of a binary semaphore.\n",(0,c.jsx)(n.strong,{children:"\u4e8c\u8fdb\u5236\u4fe1\u53f7\u91cf\u63d0\u4f9b\u4e86\u975e\u6240\u6709\u6743\u91ca\u653e\u673a\u5236"}),"\u3002\u56e0\u6b64\uff0c\u4efb\u4f55\u7ebf\u7a0b\u90fd\u53ef\u4ee5\u91ca\u653e\u4e8c\u8fdb\u5236\u4fe1\u53f7\u91cf\u6b7b\u9501\u6062\u590d\u7684\u8bb8\u53ef\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"On the contrary, deadlock recovery is difficult to achieve in the case of a reentrant lock. For instance, if the owner thread of a reentrant lock goes into sleep or infinite wait, it won\u2019t be possible to release the resource, and a deadlock situation will result.\n\u76f8\u53cd\uff0c\u5728\u53ef\u91cd\u5165\u9501\u7684\u60c5\u51b5\u4e0b\uff0c\u6b7b\u9501\u6062\u590d\u662f\u5f88\u96be\u5b9e\u73b0\u7684\u3002\u4f8b\u5982\uff0c\u5982\u679c\u53ef\u91cd\u5165\u9501\u7684\u6240\u6709\u8005\u7ebf\u7a0b\u8fdb\u5165\u7761\u7720\u6216\u65e0\u9650\u7b49\u5f85\uff0c\u5219\u65e0\u6cd5\u91ca\u653e\u8d44\u6e90\uff0c\u4ece\u800c\u5bfc\u81f4\u6b7b\u9501\u60c5\u51b5\u3002"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u8bfb\u9501: \u5199\u9501\u6ca1\u5360, \u591a\u4e2a\u7ebf\u7a0b\u53ef\u52a0\u8bfb\u9501"}),"\n",(0,c.jsx)(n.p,{children:"\u5199\u9501: \u6ca1\u6709\u8bfb\u9501\u7684\u60c5\u51b5\u4e0b, \u624d\u53ef\u4ee5\u52a0\u5199\u9501(\u770b\u8d77\u6765\u662f\u8bfb\u8005\u4f18\u5148\u7684\u5b9e\u73b0)"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-java",children:"public interface ReadWriteLock {\n    Lock readLock();\n    Lock writeLock();\n}\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5e76\u4e14\u8bfb\u5199\u9501\u4fdd\u7559\u4e86\u53ef\u91cd\u5165\n\u5b9e\u9645\u4e0aCLHLock, \u5c06\u4e00\u4e2a\u5de5\u4f5c\u7ebf\u7a0b\u62bd\u8c61\u6210\u4e00\u4e2a\u8282\u70b9, \u961f\u5217\u672c\u8eab\u4f7f\u7528\u65e0\u9501CAS\u7ef4\u62a4, \u901a\u8fc7CAS\u66f4\u65b0\u8282\u70b9state\u6765\u6807\u8bc6\u72b6\u6001\u5b9e\u73b0\u7ebf\u7a0b\u5185\u7684\u53ef\u91cd\u5165"}),"\n",(0,c.jsx)(n.p,{children:"\u516c\u5e73\u6027\u548c\u975e\u516c\u5e73\u6027\u7684\u5b9e\u73b0"}),"\n",(0,c.jsx)(n.p,{children:"\u516c\u5e73\u9501"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-java",children:'// java.util.concurrent.locks.ReentrantLock.FairSync#tryAcquire\n\nif (c == 0) {\n\tif (!hasQueuedPredecessors() && compareAndSetState(0, acquires)) {\n\t\tsetExclusiveOwnerThread(current);\n\t\treturn true;\n\t}\n}\nelse if (current == getExclusiveOwnerThread()) {\n\tint nextc = c + acquires;\n\tif (nextc < 0)\n\t\tthrow new Error("Maximum lock count exceeded");\n\tsetState(nextc);\n\treturn true;\n}\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u975e\u516c\u5e73\u9501"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-java",children:'// java.util.concurrent.locks.ReentrantLock.Sync#nonfairTryAcquire\n// \u8fd9\u91cc\u5bf9\u6392\u961f\u4e0d\u505a\u5224\u65ad, \u76f4\u63a5\u62ff\u8d70\nif (c == 0) {\n\tif (compareAndSetState(0, acquires)){\n\t\tsetExclusiveOwnerThread(current);\n\t\treturn true;\n\t}\n}\nelse if (current == getExclusiveOwnerThread()) {\n\tint nextc = c + acquires;\n\tif (nextc < 0) // overflow\n\t\tthrow new Error("Maximum lock count exceeded");\n\tsetState(nextc);\n\treturn true;\n}\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u4e00\u4e2a\u94fe\u8868, \u901a\u8fc7\u6bcf\u6b21\u62ff\u9501\u539f\u5b50\u6027\u52a0(AtomicRefence.getAndSet, \u5b9e\u9645\u5c31\u662fCAS)\u8282\u70b9\u5728\u5c3e\u90e8, \u89e3\u9501\u9700\u8981\u7b49\u5f85\u524d\u4e00\u4e2a\u8282\u70b9\u89e3\u9501\u6765\u5f97\u5230fairness"}),"\n",(0,c.jsxs)(n.p,{children:["\u6838\u5fc3CAS, \u7528currentThread()\u521b\u5efa\u4e00\u4e2a\u65b0\u8282\u70b9node, \u4e4b\u540e\u8bbe\u7f6enode.prev\u4e3atail, ",(0,c.jsx)(n.strong,{children:"CAS\u5c1d\u8bd5\u8bbe\u7f6etail\u4e3anode"})]}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u6210\u529f, acquire\u6210\u529f; \u5982\u679c\u5931\u8d25, \u81ea\u65cb\u91cd\u590d"}),"\n",(0,c.jsx)(n.p,{children:"\u5b98\u65b9\u793a\u4f8b"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-java",children:"class RWDictionary {\n    private final Map<String, Data> m = new TreeMap<>();\n    private final ReentrantReadWriteLock rwl = new ReentrantReadWriteLock();\n    private final Lock r = rwl.readLock();\n    private final Lock w = rwl.writeLock();\n\n    public Data get(String key) {\n        r.lock();\n        try {\n            return m.get(key);\n        } finally {\n            r.unlock();\n        }\n    }\n\n    public List<String> allKeys() {\n        r.lock();\n        try {\n            return new ArrayList<>(m.keySet());\n        } finally {\n            r.unlock();\n        }\n    }\n\n    public Data put(String key, Data value) {\n        w.lock();\n        try {\n            return m.put(key, value);\n        } finally {\n            w.unlock();\n        }\n    }\n\n    public void clear() {\n        w.lock();\n        try {\n            m.clear();\n        } finally {\n            w.unlock();\n        }\n    }\n}\n}\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u652f\u6301\u9501\u964d\u7ea7: \u5148\u62ff\u5199\u9501\u518d\u62ff\u8bfb\u9501"}),"\n",(0,c.jsx)(n.p,{children:"\u4e0d\u652f\u6301\u9501\u5347\u7ea7: \u5e9f\u8bdd, \u4e0d\u80fd\u5148\u62ff\u8bfb\u9501\u518d\u62ff\u5199\u9501, \u54ce\u540d\u8bcd\u53d1\u660e\u5bb6"}),"\n",(0,c.jsx)(n.p,{children:"java\u539f\u5b50\u7c7b"}),"\n",(0,c.jsx)(n.p,{children:"AtomicXXX"}),"\n",(0,c.jsx)(n.p,{children:"\u9664\u4e86\u57fa\u672c\u7c7b\u4ee5\u5916\u8fd8\u6709AtomicIntergerArray, AtomicLongArray, AtomicReferenceArray"}),"\n",(0,c.jsx)(n.p,{children:"\u5c31\u662f\u4e2a\u69fd, \u5b9e\u9645\u4e0a\u4e0d\u662f\u4ec0\u4e48\u65b0\u9c9c\u7684\u4e1c\u897f, \u5bf9\u7ed9\u5b9a\u5185\u5b58\u5730\u5740CAS\u800c\u5df2, \u7531\u4e8ejava\u4e0d\u80fd\u76f4\u63a5\u975eUnsafe\u64cd\u4f5c\u6307\u9488\u5bfc\u81f4\u7684"}),"\n",(0,c.jsx)(n.p,{children:"\u8fd8\u6709\u4e00\u4e2a\u6709\u8da3\u7684\u662fLongAdder\u7c7b"}),"\n",(0,c.jsx)(n.p,{children:"\u50cf\u662fostep\u91cc\u9762\u7684lazy\u65f6\u949f, \u62a2\u4e0d\u5230\u539f\u5b50\u52a0\u7684\u65f6\u5019\u5148\u52a0\u672c\u5730, \u6700\u540e\u540c\u6b65"}),"\n",(0,c.jsx)(n.p,{children:"\u6ce8\u610f\u5f15\u7528\u4ea4\u6362\u7684\u5b9e\u7528\u6027: \u4f8b\u5982Object\u7684CAS"}),"\n",(0,c.jsx)(n.p,{children:"\u751a\u81f3\u53ef\u4ee5\u539f\u5b50\u66f4\u65b0\u5b57\u6bb5, AtomicIntegerUpdater"}),"\n",(0,c.jsx)(n.p,{children:"\u907f\u514dABA\u95ee\u9898, \u7ed9\u4e86\u4e2a\u5de5\u5177\u7c7bAtomicStampedReference"}),"\n",(0,c.jsx)(n.p,{children:"\u6838\u5fc3\u601d\u8def\u662f\u5728CAS\u6210\u529f\u6362\u5230\u503c\u7684\u65f6\u5019\u4e5f\u6362\u4e00\u4e2astamp\u8fc7\u53bb, \u5c31\u53ef\u4ee5\u5728\u8bfb\u53d6\u7684\u65f6\u5019\u6839\u636estamp\u6765\u5224\u65ad\u662f\u4e0d\u662f\u60f3\u8981\u7684\u503c(\u6709\u6ca1\u6709\u88ab\u5176\u4ed6\u7ebf\u7a0b\u4fee\u6539\u8fc7)\u4e86"}),"\n",(0,c.jsx)(n.p,{children:"\u5e38\u7528\u5e76\u53d1\u5bb9\u5668"}),"\n",(0,c.jsxs)(n.p,{children:["ArrayList ",(0,c.jsx)(n.code,{children:"->"})," CopyOnWriteArrayList"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-java",children:"    public boolean add(E e) {\n        synchronized (lock) {\n            Object[] es = getArray();\n            int len = es.length;\n            es = Arrays.copyOf(es, len + 1);\n            es[len] = e;\n            setArray(es); // array = es\n            return true;\n        }\n    }\n"})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"This is ordinarily too costly, but may be more efficient than alternatives when traversal operations vastly outnumber mutations, and is useful when you cannot or don't want to synchronize traversals, yet need to preclude interference among concurrent threads"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u5f00\u9500\u5f88\u5927, \u4f46\u786e\u4fdd\u4e86\u4e0d\u4f1a\u51fa\u73b0\u8fed\u4ee3\u5668\u5931\u6548, \u9002\u7528\u4e8e\u8bfb\u591a\u5199\u5c11\u7684\u60c5\u51b5"}),"\n",(0,c.jsx)(n.p,{children:"(\u8fed\u4ee3\u5668\u8bfb\u662f\u4e0d\u5835\u585e\u7684)"}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u4f7f\u7528\u52a0\u5927\u9501\u9700\u8981\u81ea\u5df1\u540c\u6b65\u8fed\u4ee3\u5668"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-java",children:"    List list = Collections.synchronizedList(new ArrayList());\\\n    // \u8fd9\u73a9\u610f\u5c31\u662f\u6240\u6709\u64cd\u4f5c\u90fd\u52a0synchronized(mutex), \u9664\u4e86iterator()\n    ...\n    synchronized (list) {\n        Iterator i = list.iterator(); // Must be in synchronized block\n        while (i.hasNext())\n            foo(i.next());\n    }\n"})}),"\n",(0,c.jsx)(n.p,{children:"ConcurrentLinkedQueue \u7ecf\u5178\u5e76\u53d1\u961f\u5217"}),"\n",(0,c.jsx)(n.p,{children:"ConcurrentSkipListMap \u5e76\u53d1\u8df3\u8868"}),"\n",(0,c.jsx)(n.p,{children:"ConCurrentHashMap"}),"\n",(0,c.jsx)(n.p,{children:"\u9501\u94fe\u8868\u5934(\u7ea2\u9ed1\u6811\u6839, \u957f\u5ea6\u5927\u4e8e8\u5347\u7ea7)"}),"\n",(0,c.jsx)(n.p,{children:"\u963b\u585e\u961f\u5217 BlockingQueue"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["ArrayBlockingQueue  ",(0,c.jsx)(n.code,{children:"<->"})," chan(int)"]}),"\n",(0,c.jsxs)(n.li,{children:["SynchronousQueue ",(0,c.jsx)(n.code,{children:"<->"})," chan(0)"]}),"\n",(0,c.jsxs)(n.li,{children:["LinkedBlockingQueue ",(0,c.jsx)(n.code,{children:"<->"})," chan(inf)"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u7ecf\u5178\u751f\u4ea7\u6d88\u8d39\u8005()"}),"\n",(0,c.jsx)(n.p,{children:"chan\u65b9\u4fbf\u7406\u89e3, \u4f46\u548cchan\u8fd8\u662f\u6709\u70b9\u4e0d\u4e00\u6837, \u53ef\u4ee5\u591a\u6d88\u8d39\u8005"}),"\n",(0,c.jsx)(n.p,{children:"PriorityBlockingQueue \u4f18\u5148\u7ea7\u963b\u585e\u961f\u5217"}),"\n",(0,c.jsx)(n.p,{children:"DelayQueue \u5ef6\u65f6\u961f\u5217, \u5728\u8fbe\u5230\u5ef6\u65f6\u4e4b\u524d\u51fa\u4e0d\u4e86\u961f"}),"\n",(0,c.jsx)(n.p,{children:"\u7528\u4e8e\u9650\u6d41?"}),"\n",(0,c.jsx)(n.p,{children:"\u7ebf\u7a0b\u6c60"}),"\n",(0,c.jsx)(n.p,{children:"ThreadPoolExecutor"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-java",children:"    public ThreadPoolExecutor(int corePoolSize,//\u7ebf\u7a0b\u6c60\u7684\u6838\u5fc3\u7ebf\u7a0b\u6570\u91cf\n                              int maximumPoolSize,//\u7ebf\u7a0b\u6c60\u7684\u6700\u5927\u7ebf\u7a0b\u6570\n                              long keepAliveTime,//\u5f53\u7ebf\u7a0b\u6570\u5927\u4e8e\u6838\u5fc3\u7ebf\u7a0b\u6570\u65f6\uff0c\u591a\u4f59\u7684\u7a7a\u95f2\u7ebf\u7a0b\u5b58\u6d3b\u7684\u6700\u957f\u65f6\u95f4\n                              TimeUnit unit,//\u65f6\u95f4\u5355\u4f4d\n                              BlockingQueue<Runnable> workQueue,//\u4efb\u52a1\u961f\u5217\uff0c\u7528\u6765\u50a8\u5b58\u7b49\u5f85\u6267\u884c\u4efb\u52a1\u7684\u961f\u5217\n                              ThreadFactory threadFactory,//\u7ebf\u7a0b\u5de5\u5382\uff0c\u7528\u6765\u521b\u5efa\u7ebf\u7a0b\uff0c\u4e00\u822c\u9ed8\u8ba4\u5373\u53ef\n                              RejectedExecutionHandler handler//\u62d2\u7edd\u7b56\u7565\uff0c\u5f53\u63d0\u4ea4\u7684\u4efb\u52a1\u8fc7\u591a\u800c\u4e0d\u80fd\u53ca\u65f6\u5904\u7406\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u5b9a\u5236\u7b56\u7565\u6765\u5904\u7406\u4efb\u52a1\n                               )\n"})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"FixedThreadPool"}),"\uff1a\u56fa\u5b9a\u7ebf\u7a0b\u6570\u91cf\u7684\u7ebf\u7a0b\u6c60\u3002\u8be5\u7ebf\u7a0b\u6c60\u4e2d\u7684\u7ebf\u7a0b\u6570\u91cf\u59cb\u7ec8\u4e0d\u53d8\u3002\u5f53\u6709\u4e00\u4e2a\u65b0\u7684\u4efb\u52a1\u63d0\u4ea4\u65f6\uff0c\u7ebf\u7a0b\u6c60\u4e2d\u82e5\u6709\u7a7a\u95f2\u7ebf\u7a0b\uff0c\u5219\u7acb\u5373\u6267\u884c\u3002\u82e5\u6ca1\u6709\uff0c\u5219\u65b0\u7684\u4efb\u52a1\u4f1a\u88ab\u6682\u5b58\u5728\u4e00\u4e2a\u4efb\u52a1\u961f\u5217\u4e2d\uff0c\u5f85\u6709\u7ebf\u7a0b\u7a7a\u95f2\u65f6\uff0c\u4fbf\u5904\u7406\u5728\u4efb\u52a1\u961f\u5217\u4e2d\u7684\u4efb\u52a1\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"SingleThreadExecutor"}),"\uff1a \u53ea\u6709\u4e00\u4e2a\u7ebf\u7a0b\u7684\u7ebf\u7a0b\u6c60\u3002\u82e5\u591a\u4f59\u4e00\u4e2a\u4efb\u52a1\u88ab\u63d0\u4ea4\u5230\u8be5\u7ebf\u7a0b\u6c60\uff0c\u4efb\u52a1\u4f1a\u88ab\u4fdd\u5b58\u5728\u4e00\u4e2a\u4efb\u52a1\u961f\u5217\u4e2d\uff0c\u5f85\u7ebf\u7a0b\u7a7a\u95f2\uff0c\u6309\u5148\u5165\u5148\u51fa\u7684\u987a\u5e8f\u6267\u884c\u961f\u5217\u4e2d\u7684\u4efb\u52a1\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"CachedThreadPool"}),"\uff1a \u53ef\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u8c03\u6574\u7ebf\u7a0b\u6570\u91cf\u7684\u7ebf\u7a0b\u6c60\u3002\u7ebf\u7a0b\u6c60\u7684\u7ebf\u7a0b\u6570\u91cf\u4e0d\u786e\u5b9a\uff0c\u4f46\u82e5\u6709\u7a7a\u95f2\u7ebf\u7a0b\u53ef\u4ee5\u590d\u7528\uff0c\u5219\u4f1a\u4f18\u5148\u4f7f\u7528\u53ef\u590d\u7528\u7684\u7ebf\u7a0b\u3002\u82e5\u6240\u6709\u7ebf\u7a0b\u5747\u5728\u5de5\u4f5c\uff0c\u53c8\u6709\u65b0\u7684\u4efb\u52a1\u63d0\u4ea4\uff0c\u5219\u4f1a\u521b\u5efa\u65b0\u7684\u7ebf\u7a0b\u5904\u7406\u4efb\u52a1\u3002\u6240\u6709\u7ebf\u7a0b\u5728\u5f53\u524d\u4efb\u52a1\u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u5c06\u8fd4\u56de\u7ebf\u7a0b\u6c60\u8fdb\u884c\u590d\u7528\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"ScheduledThreadPool"}),"\uff1a\u7ed9\u5b9a\u7684\u5ef6\u8fdf\u540e\u8fd0\u884c\u4efb\u52a1\u6216\u8005\u5b9a\u671f\u6267\u884c\u4efb\u52a1\u7684\u7ebf\u7a0b\u6c60"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"execute() \u6267\u884c"}),"\n",(0,c.jsx)(n.p,{children:"submit() \u9700\u8981\u8fd4\u56de\u503c, \u5f97\u5230Future"}),"\n",(0,c.jsx)(n.p,{children:"CompletableFuture"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-java",children:'CompletableFuture<Void> task1 =\n  CompletableFuture.supplyAsync(()->{\n    //\u81ea\u5b9a\u4e49\u4e1a\u52a1\u64cd\u4f5c\n  });\n......\nCompletableFuture<Void> task6 =\n  CompletableFuture.supplyAsync(()->{\n    //\u81ea\u5b9a\u4e49\u4e1a\u52a1\u64cd\u4f5c\n  });\n......\n CompletableFuture<Void> headerFuture=CompletableFuture.allOf(task1,.....,task6);\n\n  try {\n    headerFuture.join();\n  } catch (Exception ex) {\n    ......\n  }\nSystem.out.println("all done. ");\n'})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"CompletableFuture"})," \u9ed8\u8ba4\u4f7f\u7528\u5168\u5c40\u5171\u4eab\u7684 ",(0,c.jsx)(n.code,{children:"ForkJoinPool.commonPool()"})," \u4f5c\u4e3a\u6267\u884c\u5668\uff0c\u6240\u6709\u672a\u6307\u5b9a\u6267\u884c\u5668\u7684\u5f02\u6b65\u4efb\u52a1\u90fd\u4f1a\u4f7f\u7528\u8be5\u7ebf\u7a0b\u6c60\u3002\u8fd9\u610f\u5473\u7740\u5e94\u7528\u7a0b\u5e8f\u3001\u591a\u4e2a\u5e93\u6216\u6846\u67b6\uff08\u5982 Spring\u3001\u7b2c\u4e09\u65b9\u5e93\uff09\u82e5\u90fd\u4f9d\u8d56 ",(0,c.jsx)(n.code,{children:"CompletableFuture"}),"\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5b83\u4eec\u90fd\u4f1a\u5171\u4eab\u540c\u4e00\u4e2a\u7ebf\u7a0b\u6c60"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u81ea\u5b9a\u4e49\u7ebf\u7a0b\u6c60\u5c31\u662fRunAsync\u52a0\u4e00\u4e2a\u53c2\u6570ThreadPoolExecutor"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["\u6b63\u786e\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"thenCompose()"})," \u3001 ",(0,c.jsx)(n.code,{children:"thenCombine()"})," \u3001",(0,c.jsx)(n.code,{children:"acceptEither()"}),"\u3001",(0,c.jsx)(n.code,{children:"allOf()"}),"\u3001",(0,c.jsx)(n.code,{children:"anyOf()"}),"\u7b49\u65b9\u6cd5\u6765\u7ec4\u5408\u591a\u4e2a\u5f02\u6b65\u4efb\u52a1\uff0c\u4ee5\u6ee1\u8db3\u5b9e\u9645\u4e1a\u52a1\u7684\u9700\u6c42\uff0c\u63d0\u9ad8\u7a0b\u5e8f\u6267\u884c\u6548\u7387"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u8fd8\u6709"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"thenApply()"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"thenAccept()"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"thenRun()"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"whenComplete()"})}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u5e76\u53d1\u5de5\u5177\u7c7b"}),"\n",(0,c.jsx)(n.p,{children:"CountDownLatch"}),"\n",(0,c.jsx)(n.p,{children:"CyclicBarrier"}),"\n",(0,c.jsx)(n.p,{children:"Semaphore"}),"\n",(0,c.jsx)(n.p,{children:"Fork/Join\u6846\u67b6"})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>s});var c=r(96540);const t={},l=c.createContext(t);function i(e){const n=c.useContext(l);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),c.createElement(l.Provider,{value:n},e.children)}}}]);