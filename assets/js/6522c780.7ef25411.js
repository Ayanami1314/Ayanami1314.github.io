"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6022],{6984:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var i=a(4848),s=a(8453);const t={title:"hibernate&jpa",date:new Date("2024-07-11T00:00:00.000Z"),pinned:9,author:"ayanami"},r=void 0,o={permalink:"/blog/hibernate-jpa",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/hibernate-jpa.md",source:"@site/blog/hibernate-jpa.md",title:"hibernate&jpa",description:"jdbc: java database connectivity",date:"2024-07-11T00:00:00.000Z",tags:[],readingTime:12.49,hasTruncateMarker:!1,authors:[{name:"ayanami"}],frontMatter:{title:"hibernate&jpa",date:"2024-07-11T00:00:00.000Z",pinned:9,author:"ayanami"},unlisted:!1,prevItem:{title:"Go,Gin\u5b66\u4e60",permalink:"/blog/Go-Gin\u5b66\u4e60"},nextItem:{title:"linking \u590d\u4e60",permalink:"/blog/linking-\u590d\u4e60"}},c={authorsImageUrls:[void 0]},l=[{value:"<strong>Automatic Custom Queries</strong>",id:"automatic-custom-queries",level:3},{value:"<strong>Manual Custom Queries</strong>",id:"manual-custom-queries",level:3},{value:"<strong>Spring Data JPA Repository Configuration</strong>",id:"spring-data-jpa-repository-configuration",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"jdbc: java database connectivity"}),"\n",(0,i.jsx)(n.p,{children:"jdbc \u8981\u5148\u52a0\u8f7d\u9a71\u52a8\uff0c\u7531\u5404\u4e2a\u6570\u636e\u5e93\u5b9e\u73b0"}),"\n",(0,i.jsx)(n.p,{children:"jpa \u901a\u8fc7 orm \u6846\u67b6\u751f\u6210 sql\uff0c\u518d\u7ecf\u8fc7 jdbc \u64cd\u4f5c\u6570\u636e\u5e93"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"getBean"})," \u65b9\u6cd5\uff1a"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"getBean"})," \u662f ",(0,i.jsx)(n.code,{children:"ApplicationContext"})," \u63a5\u53e3\u4e2d\u7684\u4e00\u4e2a\u65b9\u6cd5\uff0c\u7528\u4e8e\u4ece Spring \u7684 IoC \u5bb9\u5668\u4e2d\u663e\u5f0f\u5730\u83b7\u53d6 Bean \u5b9e\u4f8b\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5b83\u901a\u5e38\u5728\u9700\u8981\u624b\u52a8\u83b7\u53d6 Bean \u65f6\u4f7f\u7528\uff0c\u6bd4\u5982\u5728\u975e Spring \u7ba1\u7406\u7684\u7c7b\u4e2d\u6216\u8005\u5728\u67d0\u4e9b\u7279\u5b9a\u7684\u573a\u666f\u4e0b\uff0c\u4f60\u60f3\u8981\u76f4\u63a5\u4ece\u5bb9\u5668\u4e2d\u83b7\u53d6 Bean \u800c\u4e0d\u662f\u901a\u8fc7\u6ce8\u5165\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"getBean"})," \u65b9\u6cd5\u65f6\uff0c\u4f60\u9700\u8981\u77e5\u9053 Bean \u7684\u540d\u79f0\u6216\u7c7b\u578b\uff0c\u5e76\u5728\u8c03\u7528\u65f6\u6307\u5b9a\u8fd9\u4e9b\u4fe1\u606f\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u793a\u4f8b\u4ee3\u7801\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"ApplicationContext context = ...; // \u83b7\u53d6ApplicationContext\u5b9e\u4f8b\nMyBean myBean = context.getBean(MyBean.class); // \u901a\u8fc7\u7c7b\u578b\u83b7\u53d6Bean\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"hibernate orm \u6846\u67b6,jpql \u4ee5\u53ca JpaRepository"}),"\n",(0,i.jsx)(n.p,{children:"lombok \u4e5f\u5f88\u5e38\u7528\uff0c@Data @NoArgsConstructor"}),"\n",(0,i.jsx)(n.p,{children:"Spring Data"}),"\n",(0,i.jsx)(n.p,{children:"\u7edf\u4e00\u548c\u7b80\u5316\u4e0d\u540c\u7c7b\u578b\u7684\u6301\u4e45\u5316\u5b58\u50a8\uff08Relational & noSQL\uff09\u7684\u8bbf\u95ee"}),"\n",(0,i.jsx)(n.p,{children:"JPA \u901a\u8fc7\u9762\u5411\u5bf9\u8c61\u65b9\u5f0f\u548c ORM \u6846\u67b6\u751f\u6210 SQL"}),"\n",(0,i.jsx)(n.p,{children:"JPA: java persistence API\uff0c \u662f\u4e00\u79cd ORM \u89c4\u8303"}),"\n",(0,i.jsx)(n.p,{children:"\u8be5\u89c4\u8303\u63d0\u4f9b\u4e86\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ORM \u6620\u5c04\u5143\u6570\u636e\uff0c XML/\u6ce8\u89e3\uff0c\u4f8b\u5982@Table, @Id\uff0c @Column"}),"\n",(0,i.jsx)(n.li,{children:"JPA \u7684 API\uff0c\u7528\u4e8e\u64cd\u4f5c\u5b9e\u4f53\u5bf9\u8c61 CRUD"}),"\n",(0,i.jsx)(n.li,{children:"JPQL \u67e5\u8be2\u8bed\u8a00\uff08\u9762\u5411\u5bf9\u8c61\uff09"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"hibernate \u662f JPA \u89c4\u8303\u7684\u4e00\u79cd\u5b9e\u73b0"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["As we discussed in an earlier article, ",(0,i.jsx)(n.a,{href:"https://www.baeldung.com/simplifying-the-data-access-layer-with-spring-and-java-generics",children:"the DAO layer"})," usually consists of a lot of boilerplate code that can and should be simplified. The advantages of such a simplification are many: a decrease in the number of artifacts that we need to define and maintain, consistency of data access patterns, and consistency of configuration."]}),"\n",(0,i.jsxs)(n.p,{children:["Spring Data takes this simplification one step further and ",(0,i.jsx)(n.strong,{children:"makes it possible to remove the DAO implementations entirely"}),". The interface of the DAO is now the only artifact that we need to explicitly define."]}),"\n",(0,i.jsxs)(n.p,{children:["In order to start leveraging the Spring Data programming model with JPA, a DAO interface needs to extend the JPA specific ",(0,i.jsx)(n.em,{children:"Repository"})," interface, ",(0,i.jsx)(n.em,{children:"JpaRepository"}),". This will enable Spring Data to find this interface and automatically create an implementation for it."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"automatic-custom-queries",children:(0,i.jsx)(n.strong,{children:"Automatic Custom Queries"})}),"\n",(0,i.jsxs)(n.p,{children:["When Spring Data creates a new ",(0,i.jsx)(n.em,{children:"Repository"})," implementation, it analyses all the methods defined by the interfaces and tries to ",(0,i.jsx)(n.strong,{children:"automatically generate queries from the method names"}),". While this has some limitations, it\u2019s a very powerful and elegant way of defining new custom access methods with very little effort.\n\u5f53 Spring Data \u521b\u5efa\u65b0\u7684 Repository \u5b9e\u73b0\u65f6\uff0c\u5b83\u4f1a\u5206\u6790\u63a5\u53e3\u5b9a\u4e49\u7684\u6240\u6709\u65b9\u6cd5\uff0c\u5e76\u5c1d\u8bd5\u6839\u636e\u65b9\u6cd5\u540d\u79f0\u81ea\u52a8\u751f\u6210\u67e5\u8be2\u3002\u867d\u7136\u8fd9\u6709\u4e00\u4e9b\u9650\u5236\uff0c\u4f46\u5b83\u662f\u4e00\u79cd\u975e\u5e38\u5f3a\u5927\u4e14\u4f18\u96c5\u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u8f7b\u677e\u5b9a\u4e49\u65b0\u7684\u81ea\u5b9a\u4e49\u8bbf\u95ee\u65b9\u6cd5\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["Let\u2019s look at an example. If the entity has a ",(0,i.jsx)(n.em,{children:"name"})," field (and the Java Bean standard ",(0,i.jsx)(n.em,{children:"getName"})," and ",(0,i.jsx)(n.em,{children:"setName"})," methods), ",(0,i.jsx)(n.strong,{children:"we\u2019ll define the *findByName* method in the DAO interface."})," This will automatically generate the correct query:\n\u8ba9\u6211\u4eec\u770b\u4e00\u4e2a\u4f8b\u5b50\u3002\u5982\u679c\u5b9e\u4f53\u6709\u540d\u79f0\u5b57\u6bb5\uff08\u4ee5\u53ca Java Bean \u6807\u51c6 getName \u548c setName \u65b9\u6cd5\uff09\uff0c\u6211\u4eec\u5c06\u5728 DAO \u63a5\u53e3\u4e2d\u5b9a\u4e49 findByName \u65b9\u6cd5\u3002\u8fd9\u5c06\u81ea\u52a8\u751f\u6210\u6b63\u786e\u7684\u67e5\u8be2\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public interface IFooDAO extends JpaRepository<Foo, Long> {\n\n    Foo findByName(String name);\n\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"manual-custom-queries",children:(0,i.jsx)(n.strong,{children:"Manual Custom Queries"})}),"\n",(0,i.jsxs)(n.p,{children:["Now let\u2019s look at a custom query that we\u2019ll define via the ",(0,i.jsx)(n.em,{children:"@Query"})," annotation:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@Query("SELECT f FROM Foo f WHERE LOWER(f.name) = LOWER(:name)")\nFoo retrieveByName(@Param("name") String name);\n'})}),"\n",(0,i.jsx)(n.h2,{id:"spring-data-jpa-repository-configuration",children:(0,i.jsx)(n.strong,{children:"Spring Data JPA Repository Configuration"})}),"\n",(0,i.jsxs)(n.p,{children:["To activate the Spring JPA repository support, we can use the ",(0,i.jsx)(n.em,{children:"@EnableJpaRepositories"})," annotation and specify the package that contains the DAO interfaces:\n\u8981\u6fc0\u6d3b Spring JPA \u5b58\u50a8\u5e93\u652f\u6301\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 @EnableJpaRepositories \u6ce8\u91ca\u5e76\u6307\u5b9a\u5305\u542b DAO \u63a5\u53e3\u7684\u5305\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@EnableJpaRepositories(basePackages = "com.baeldung.spring.data.persistence.repository")\npublic class PersistenceConfig {\n    ...\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Maven \u4f9d\u8d56"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:"<dependency>\n   <groupId>org.springframework.data</groupId>\n   <artifactId>spring-data-jpa</artifactId>\n   <version>2.4.0</version>\n</dependency>\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4e00\u5bf9\u591a\u6620\u5c04"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Simply put, ",(0,i.jsx)(n.strong,{children:"*one-to-many* mapping means that one row in a table is mapped to multiple rows in another table."})]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["For this example, we\u2019ll implement a cart system where we have a table for each cart and another table for each item. ",(0,i.jsx)(n.strong,{children:"One cart can have many items, so here we have a *one-to-many* mapping."}),"\n\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u5b9e\u73b0\u4e00\u4e2a\u8d2d\u7269\u8f66\u7cfb\u7edf\uff0c\u5176\u4e2d\u6bcf\u4e2a\u8d2d\u7269\u8f66\u90fd\u6709\u4e00\u4e2a\u8868\uff0c\u6bcf\u4e2a\u9879\u76ee\u90fd\u6709\u53e6\u4e00\u4e2a\u8868\u3002\u4e00\u8f86\u8d2d\u7269\u8f66\u53ef\u4ee5\u6709\u5f88\u591a\u5546\u54c1\uff0c\u56e0\u6b64\u8fd9\u91cc\u6211\u4eec\u6709\u4e00\u4e2a\u4e00\u5bf9\u591a\u7684\u6620\u5c04\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["The way this works at the database level is we have a ",(0,i.jsx)(n.em,{children:"cart_id"})," as a primary key in the ",(0,i.jsx)(n.em,{children:"cart"})," table and also a ",(0,i.jsx)(n.em,{children:"cart_id"})," as a foreign key in ",(0,i.jsx)(n.em,{children:"items"}),".\n\u5728\u6570\u636e\u5e93\u7ea7\u522b\u7684\u5de5\u4f5c\u65b9\u5f0f\u662f\uff0c\u6211\u4eec\u5c06 cart_id \u4f5c\u4e3a\u8d2d\u7269\u8f66\u8868\u4e2d\u7684\u4e3b\u952e\uff0c\u5e76\u5c06 cart_id \u4f5c\u4e3a\u9879\u76ee\u4e2d\u7684\u5916\u952e\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["The way we do it in code is with ",(0,i.jsx)(n.em,{children:"@OneToMany"}),".\n\u6211\u4eec\u5728\u4ee3\u7801\u4e2d\u6267\u884c\u6b64\u64cd\u4f5c\u7684\u65b9\u5f0f\u662f\u4f7f\u7528@OneToMany\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["Let\u2019s map the ",(0,i.jsx)(n.em,{children:"Cart"})," class to the collection of ",(0,i.jsx)(n.em,{children:"Item"})," objects in a way that reflects the relationship in the database:\n\u8ba9\u6211\u4eec\u4ee5\u53cd\u6620\u6570\u636e\u5e93\u4e2d\u5173\u7cfb\u7684\u65b9\u5f0f\u5c06 Cart \u7c7b\u6620\u5c04\u5230 Item \u5bf9\u8c61\u7684\u96c6\u5408\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'public class Cart {\n\n    //...\n\n    @OneToMany(mappedBy="cart")\n    private Set<Item> items;\n\n    //...\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["We can also add a reference to ",(0,i.jsx)(n.em,{children:"Cart"})," in each ",(0,i.jsx)(n.em,{children:"Item"})," using ",(0,i.jsx)(n.em,{children:"@ManyToOne"}),", making this a ",(0,i.jsx)(n.a,{href:"https://docs.jboss.org/hibernate/orm/4.1/manual/en-US/html/ch07.html#collections-bidirectional",children:"bidirectional"})," relationship. Bidirectional means that ",(0,i.jsx)(n.strong,{children:"we are able to access *items* from *carts*, and also *carts* from *items*"}),".\n\u6211\u4eec\u8fd8\u53ef\u4ee5\u4f7f\u7528 @ManyToOne \u5728\u6bcf\u4e2a\u9879\u76ee\u4e2d\u6dfb\u52a0\u5bf9 Cart \u7684\u5f15\u7528\uff0c\u4f7f\u5176\u6210\u4e3a\u53cc\u5411\u5173\u7cfb\u3002\u53cc\u5411\u610f\u5473\u7740\u6211\u4eec\u80fd\u591f\u4ece\u8d2d\u7269\u8f66\u8bbf\u95ee\u5546\u54c1\uff0c\u4e5f\u53ef\u4ee5\u4ece\u5546\u54c1\u8bbf\u95ee\u8d2d\u7269\u8f66\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"mappedBy"})," property is what we use to tell Hibernate which variable we are using to represent the parent class in our child class.\nmappedBy \u5c5e\u6027\u662f\u6211\u4eec\u7528\u6765\u544a\u8bc9 Hibernate \u6211\u4eec\u4f7f\u7528\u54ea\u4e2a\u53d8\u91cf\u6765\u8868\u793a\u5b50\u7c7b\u4e2d\u7684\u7236\u7c7b\u7684\u5c5e\u6027\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Hibernate SessionFactory for database intersection"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public static SessionFactory getSessionFactory() {\n\n    ServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder()\n      .applySettings(dbSettings())\n      .build();\n\n    Metadata metadata = new MetadataSources(serviceRegistry)\n      .addAnnotatedClass(Cart.class)\n      // other domain classes\n      .buildMetadata();\n\n    return metadata.buildSessionFactory();\n}\n\nprivate static Map<String, Object> dbSettings() {\n    // return Hibernate settings\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6a21\u677f\u5236\u4f5c"}),"\n",(0,i.jsx)(n.p,{children:"connect java and db"}),"\n",(0,i.jsx)(n.p,{children:"OOP object and relational table how to connect?"}),"\n",(0,i.jsx)(n.p,{children:"ORM: object relational db mapping"}),"\n",(0,i.jsx)(n.p,{children:"\u96c6\u6210\u8fdb IDEA"}),"\n",(0,i.jsx)(n.p,{children:"pom.xml"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>org.hibernate</groupId>\n    <artifactId>hibernate-core</artifactId>\n    <version>6.1.2.Final</version>\n</dependency>\n"})}),"\n",(0,i.jsx)(n.p,{children:"@Entity \u5411 hibernate \u6307\u660e\u67d0\u4e2a class \u9700\u8981\u6620\u5c04\u5230 db"}),"\n",(0,i.jsx)(n.p,{children:'@Table("tbname") \u5411 hibernate \u6307\u660e\u8fde\u63a5\u5230 tbname \u8fd9\u5f20\u8868'}),"\n",(0,i.jsx)(n.p,{children:"@Id"}),"\n",(0,i.jsx)(n.p,{children:"@GeneratedValue(strategy=GenerationType.IDENTITY)"}),"\n",(0,i.jsx)(n.p,{children:"\u4e24\u4e2a\u8fde\u7528\uff0c\u6307\u660e id \u4e3b\u952e"}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u7c7b\u5185\u7684\u5c5e\u6027\u548c\u8868\u7684\u5217\u662f\u76f8\u540c\u7684\u540d\u5b57\uff0c\u4f1a\u81ea\u52a8\u586b\u5145\uff1b\u5982\u679c\u4e0d\u540c\uff0c\u4f7f\u7528",(0,i.jsx)(n.code,{children:'@Column(name="...")'}),"\u6307\u5b9a\u5bf9\u5e94\u7684\u540d\u5b57"]}),"\n",(0,i.jsx)(n.p,{children:"\u7136\u540e\u8981\u6c42\u8fd9\u4e2a\u7c7b\u62e5\u6709\u4e00\u4e2a\u7a7a\u6784\u9020\u51fd\u6570\uff08\u53ef\u4ee5\u6709\u522b\u7684\u8f85\u52a9\u6784\u9020\u51fd\u6570\uff0c\u4f46\u8981\u6709\u4e00\u4e2a\u7a7a\u7684\u91cd\u8f7d\uff1a \u53c2\u6570\u548c\u51fd\u6570\u4f53\u90fd\u4e3a\u7a7a\uff09"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://spring.io/guides/gs/accessing-data-jpa",children:"https://spring.io/guides/gs/accessing-data-jpa"})}),"\n",(0,i.jsx)(n.p,{children:"\u672a\u6ce8\u89e3\u7684\u5c5e\u6027\u9ed8\u8ba4\u6620\u5c04\u5230\u540c\u540d\u5217"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["The other two properties, ",(0,i.jsx)(n.code,{children:"firstName"})," and ",(0,i.jsx)(n.code,{children:"lastName"}),", are left unannotated. It is assumed that they are mapped to columns that share the same names as the properties themselves."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Reposity Interface\uff1a"}),"\n",(0,i.jsx)(n.p,{children:"\u901a\u8fc7\u5b58\u50a8\u5e93\u63a5\u53e3\u52a8\u6001\u5730\u521b\u5efa java<->db \u6620\u5c04\u7684 JPA \u5b9e\u73b0"}),"\n",(0,i.jsx)(n.p,{children:"extends CrudRepository \u63a5\u53e3"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["In a typical Java application, you might expect to write a class that implements ",(0,i.jsx)(n.code,{children:"CustomerRepository"}),". However, that is what makes Spring Data JPA so powerful: You need not write an implementation of the repository interface. Spring Data JPA creates an implementation when you run the application."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u7406\u89e3\u793a\u4f8b\u4ee3\u7801\u4e4b\u4e2d\u6700\u62bd\u8c61\u7684\u4e00\u6bb5\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'\n@SpringBootApplication\npublic class AccessingDataJpaApplication {\n    private static final Logger log = LoggerFactory.getLogger(AccessingDataJpaApplication.class);\n\n    public static void main(String[] args) {\n        SpringApplication.run(AccessingDataJpaApplication.class, args);\n    }\n\n    @Bean\n    public CommandLineRunner demo(CustomerRepository repo) {\n        return args -> {\n            repo.save(new Customer("Jack", "Bauer"));\n            repo.save(new Customer("Chloe", "O\'Brian"));\n            repo.save(new Customer("Kim", "Bauer"));\n            repo.save(new Customer("David", "Palmer"));\n            repo.save(new Customer("Michelle", "Dessler"));\n\n            // fetch all customers\n            log.info("Customers found with findAll():");\n            log.info("-------------------------------");\n            repo.findAll().forEach(customer -> {\n                log.info(customer.toString());\n            });\n            log.info("");\n\n            // fetch an individual customer by ID\n            Customer customer = repo.findById(1L);\n            log.info("Customer found with findById(1L):");\n            log.info("--------------------------------");\n            log.info(customer.toString());\n            log.info("");\n\n            // fetch customers by last name\n            log.info("Customer found with findByLastName(\'Bauer\'):");\n            log.info("--------------------------------------------");\n            repo.findByLastName("Bauer").forEach(bauer -> {\n                log.info(bauer.toString());\n            });\n            log.info("");\n        };\n    }\n}\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"Q1: \u6b64\u5904\u7684@Bean \u662f\u8c01\u6765\u586b\u5165\u7684\uff1fCustomerRepo \u662f\u54ea\u91cc\u83b7\u53d6\u7684\u6570\u636e\uff1f"}),"\n",(0,i.jsx)(n.p,{children:"A1:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"**\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f\u5d4c\u5165\u5f0f\u6570\u636e\u5e93\uff08\u5982 H2\uff09\uff0c\u5219\u4e0d\u9700\u8981\u63d0\u4f9b\u4e3b\u673a\u548c\u7aef\u53e3\uff0c\u56e0\u4e3a\u6570\u636e\u5e93\u662f\u76f4\u63a5\u5d4c\u5165\u5230\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u3002**\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f\u5916\u90e8\u6570\u636e\u5e93\uff0c\u4f60\u9700\u8981\u786e\u4fdd\u6570\u636e\u5e93\u670d\u52a1\u5668\u6b63\u5728\u8fd0\u884c\uff0c\u5e76\u4e14\u7f51\u7edc\u8bbe\u7f6e\u5141\u8bb8\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u8fde\u63a5\u5230\u6570\u636e\u5e93\u670d\u52a1\u5668\uff0c\u5728\u914d\u7f6e\u6587\u4ef6\u4e4b\u4e2d\u8bbe\u7f6e\u914d\u7f6e\u3002\u800c\u793a\u4f8b\u7a0b\u5e8f\u662f\u4f7f\u7528 h2 \u6570\u636e\u5e93"}),"\n",(0,i.jsxs)(n.li,{children:["H2 \u662f\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684\u5d4c\u5165\u5f0f\u6570\u636e\u5e93\uff0c\u5b83\u53ef\u4ee5\u88ab\u76f4\u63a5\u5d4c\u5165\u5230 Java \u5e94\u7528\u7a0b\u5e8f\u4e2d\u3002\u8fd9\u610f\u5473\u7740\u4f60\u4e0d\u9700\u8981\u5b89\u88c5\u4e00\u4e2a\u5355\u72ec\u7684\u6570\u636e\u5e93\u670d\u52a1\u5668\u6765\u4f7f\u7528 H2\uff1b\u5b83\u53ef\u4ee5\u76f4\u63a5\u8fd0\u884c\u5728\u4f60\u7684 Java \u865a\u62df\u673a\uff08JVM\uff09\u4e2d\u3002\u8fd9\u4f7f\u5f97 H2 \u975e\u5e38\u9002\u5408\u7528\u4e8e\u5f00\u53d1\u3001\u6d4b\u8bd5\u548c\u539f\u578b\u8bbe\u8ba1\uff0c\u56e0\u4e3a\u5b83\u7b80\u5316\u4e86\u5f00\u53d1\u73af\u5883\u7684\u8bbe\u7f6e\u548c\u7ba1\u7406\u3002",(0,i.jsxs)(n.strong,{children:["\u901a\u5e38\u4e0d\u9700\u8981\u989d\u5916\u7684\u914d\u7f6e\uff0c\u56e0\u4e3a",(0,i.jsx)(n.code,{children:"spring-boot-starter-data-jpa"}),"\u542f\u52a8\u5668\u5df2\u7ecf\u5305\u542b\u4e86\u5bf9 H2 \u7684\u652f\u6301\u3002\u5982\u679c\u4f60\u7684",(0,i.jsx)(n.code,{children:"application.properties"}),"\u6216",(0,i.jsx)(n.code,{children:"application.yml"}),"\u6587\u4ef6\u4e2d\u6ca1\u6709\u6307\u5b9a\u5176\u4ed6\u7684\u6570\u636e\u5e93\uff0cSpring Boot \u5c06\u9ed8\u8ba4\u4f7f\u7528 H2\uff0c\u5e76\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a\u5185\u5d4c\u7684 H2 \u6570\u636e\u5e93"]})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Q2\uff1aCommandLineRunner \u548c args->\u90fd\u662f\u5565\u73a9\u610f"}),"\n",(0,i.jsx)(n.p,{children:"A2\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"CommandLineRunner"})," \u7684\u4f5c\u7528\uff1a ",(0,i.jsx)(n.code,{children:"CommandLineRunner"})," ",(0,i.jsxs)(n.strong,{children:["\u662f Spring Boot \u63d0\u4f9b\u7684\u4e00\u4e2a\u63a5\u53e3\uff0c\u5b83\u5141\u8bb8\u4f60\u5728\u5e94\u7528\u542f\u52a8\u540e\u6267\u884c\u4e00\u4e9b\u4ee3\u7801\u3002\u5b9e\u73b0\u8fd9\u4e2a\u63a5\u53e3\u7684\u7c7b\u9700\u8981\u63d0\u4f9b\u4e00\u4e2a\u65b9\u6cd5(\u4e5f\u5c31\u662f",(0,i.jsx)(n.code,{children:"public static void main(String[] args)"}),")"]}),(0,i.jsx)(n.code,{children:"run(String... args)"}),"\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u4f1a\u5728 Spring Boot \u5e94\u7528\u542f\u52a8\u5b8c\u6210\u540e\u6267\u884c\u3002",(0,i.jsx)(n.code,{children:"CommandLineRunner"}),"\u901a\u5e38\u7528\u4e8e\u6267\u884c\u5e94\u7528\u542f\u52a8\u540e\u7684\u521d\u59cb\u5316\u4efb\u52a1\uff0c\u6bd4\u5982\u6570\u636e\u52a0\u8f7d\u3001\u53d1\u9001\u6b22\u8fce\u90ae\u4ef6\u3001\u8fd0\u884c\u4e00\u4e9b\u542f\u52a8\u65f6\u7684\u68c0\u67e5\u7b49\u3002\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c",(0,i.jsx)(n.code,{children:"CommandLineRunner"}),"\u88ab\u7528\u6765\u6f14\u793a\u5982\u4f55\u4f7f\u7528 Spring Data JPA \u6765\u64cd\u4f5c\u6570\u636e\u5e93\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"->\u662f java \u7684 lambda \u8868\u8fbe\u5f0f"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"build executable JAR:"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["If you use Maven, you can run the application by using ",(0,i.jsx)(n.code,{children:"./mvnw spring-boot:run"}),". Alternatively, you can build the JAR file with ",(0,i.jsx)(n.code,{children:"./mvnw clean package"})," and then run the JAR file, as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"java -jar target/gs-accessing-data-jpa-0.1.0.jar\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["jar \u5230\u5e95\u662f\u4ec0\u4e48\uff1aJava Archive, \u662f\u6253\u5305 java \u7c7b\u6587\u4ef6\u7684",(0,i.jsx)(n.strong,{children:"\u5f52\u6863\u6587\u4ef6"}),"\uff0c\u57fa\u4e8e zip \u683c\u5f0f\uff0c\u53ef\u4ee5\u5728\u4efb\u4f55\u6709 java \u8fd0\u884c\u65f6\u7684\u73af\u5883\u4e0b\u8fd0\u884c"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u4f7f\u7528 RESTapi \u548c JPA"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://spring.io/guides/gs/accessing-data-rest#scratch",children:"https://spring.io/guides/gs/accessing-data-rest#scratch"})}),"\n",(0,i.jsx)(n.p,{children:"\u5173\u952e\u793a\u4f8b\u4ee3\u7801"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@RepositoryRestResource(collectionResourceRel = "people", path = "people")\npublic interface PersonRepository extends PagingAndSortingRepository<Person, Long>, CrudRepository<Person,Long> {\n\n  List<Person> findByLastName(@Param("name") String name);\n\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Q: \u7b2c\u4e00\u884c\u7684\u6ce8\u89e3\u662f\u4ec0\u4e48\u610f\u601d\uff1f"}),"\n",(0,i.jsx)(n.p,{children:"A\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"@RepositoryRestResource"})," \u662f Spring Data REST \u63d0\u4f9b\u7684\u4e00\u4e2a\u6ce8\u89e3\uff0c\u7528\u4e8e\u5c06 Spring Data \u7684 Repository \u63a5\u53e3\u66b4\u9732\u4e3a RESTful \u7aef\u70b9\u3002\u8fd9\u4e2a\u6ce8\u89e3\u5141\u8bb8\u4f60\u81ea\u5b9a\u4e49\u5982\u4f55\u5c06 Repository \u7684\u65b9\u6cd5\u6620\u5c04\u5230 HTTP \u8bf7\u6c42\u4e0a"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:'path = "people"'}),"\u6307\u5b9a\u4e86\u8fd9\u4e2a repo \u6620\u5c04\u5230\u7684\u8def\u7531(",(0,i.jsx)(n.code,{children:"/people"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:'collectionResourceRel="people"'}),"\u4f1a\u81ea\u52a8\u5904\u7406\u57fa\u672c\u7684\uff08\u9075\u5b88 JPA \u547d\u540d\u7ea6\u5b9a\u7684\uff09\u65b9\u6cd5\u6620\u5c04\uff08\u66ff\u4ee3\u4e86@RequestMapping\uff09\uff0c\u4f8b\u5982\u6b64\u65f6\u53d1\u9001",(0,i.jsx)(n.code,{children:"DELETE /people/:id"}),"\u7684\u8bf7\u6c42\uff0c\u5373\u4f7f\u6ca1\u6709\u624b\u52a8\u5b9e\u73b0\uff0c\u4e5f\u4f1a\u88ab\u9ed8\u8ba4 mapping \u548c\u5b8c\u6210\u5220\u9664"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u81ea\u5b9a\u4e49\u65b9\u6cd5\uff1a"}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u9700\u8981\u6267\u884c\u66f4\u590d\u6742\u7684\u67e5\u8be2\uff0c\u4f60\u53ef\u4ee5\u5728 Repository \u63a5\u53e3\u4e2d\u5b9a\u4e49\u81ea\u5df1\u7684\u65b9\u6cd5\uff0c\u5e76\u4f7f\u7528",(0,i.jsx)(n.code,{children:"@Query"}),"\u6ce8\u89e3\u6765\u63d0\u4f9b JPQL\uff08Java Persistence Query Language\uff09\u6216\u672c\u5730\u67e5\u8be2\uff08\u5982 JDOQL \u6216 Hibernate HQL\uff09\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'public interface CustomerRepository extends JpaRepository<Customer, Long> {\n    @Query("SELECT c FROM Customer c WHERE c.email = :email")\n    Customer findByEmail(String email);\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u5728\u8fd0\u884c\u65f6\uff0cSpring Data REST \u81ea\u52a8\u521b\u5efa\u8be5\u63a5\u53e3\u7684\u5b9e\u73b0"}),"\u3002\u7136\u540e\u5b83\u4f7f\u7528 @RepositoryRestResource \u6ce8\u91ca\u6765\u6307\u793a Spring MVC \u5728 ",(0,i.jsx)(n.code,{children:"/people"})," \u5904\u521b\u5efa RESTful \u7aef\u70b9\u3002"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>o});var i=a(6540);const s={},t=i.createContext(s);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);