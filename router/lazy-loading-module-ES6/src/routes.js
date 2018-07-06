// am-loader的webpack加载器的2个功能，
// 1. 解析模块语法
// 2. 解析组件语法
// ======================
// AmapleLazyLoadWebpackPlugin的webpack插件用于在需使用到懒加载功能时，提供2个功能，
// 1. 获取routes的懒加载模块配置路径，并将这些路径的模块文件添加到webpack的编译列表中；
// 2. 获取routes的懒加载模块配置路径，创建懒加载模块的源码路径到编译路径的映射，使编写代码时写源码文件路径，但加载时访问的是编译文件路径

export default function ( router ) {
    router.module ("header").route ("/", "./modules/header.mod.html");
    router.module ().route ("/", "./modules/index.mod.html");
    router.module ("footer").route ("/", "./modules/footer.mod.html");
};

export default function ( R ) {
    R.r ("/", "/a");
    R.m ("header").r ("/", "./modules/header.mod.html");
    R.m ().r ("/", "./modules/index.mod.html");
    R.m ("footer").r ("/", "./modules/footer.mod.html", CR => {
        CR.m ().dr ("./modules/childRouter.mod.html");
    });
};

// ======================
// ======================
// ======================
// 函数式的路由配置和数组声明式的路由配置对比
// 同级单个嵌套配置
const o = {
    routes: [
        { path: '/a', component: Comp1, children: [
            { path: 'b', component: Comp2 },
            { path: 'c', component: Comp3 },
        ] }
    ]
};

R.m ().r("/a", Comp1, CR => {
    CR.m ()
    .r ("b", Comp2)
    .r ("c", Comp3);
});

// 同级多个路由配置
o = {
    routes: [
        { path: '/a', component: {

            // 当配置了多个同级路由时，就无法单独再为这些同级路由继续配置嵌套路由
            default: Comp1,
            customName: Comp2
        } }
    ]
};

// 可为多个同级路由无限配置嵌套路由
// 且多个嵌套路由内又可以继续配置多个嵌套路由，从而实现无限嵌套
R.m ().r("/a", Comp1, CR => {
    CR.m ()
    .r ("b", Comp2)
    .r ("c", Comp3);
});
R.m ("customName").r ("/", Comp4, CR => {
    CR.m ()
    .r ("b", Comp5)
    .r ("c", Comp6, CR => {
        CR.m ()
        .dr (Comp6)
        .r ("d", Comp7);
    });
});