// 在am-loader的webpack插件中有3个功能
// 1. 解析模块语法
// 2. 解析组件语法
// 3. 懒加载配置时，映射源码路径到编译路径，映射路径包含路由配置router和延迟预加载navigator.preload中的路径。

export default function ( router ) {
    router.module ("header").route ("/", "./modules/header.mod.html");
    router.module ().route ("/", "./modules/index.mod.html");
    router.module ("footer").route ("/", "./modules/footer.mod.html");
};