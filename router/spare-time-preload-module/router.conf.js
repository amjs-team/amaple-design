// 模块的延迟预加载功能
// 此功能主要利用了首屏加载完成后的空闲时间，来加载开发者指定的特定模块
// 此功能的特点是既使首屏加载更加快速，也能使后续的页面得到加载
// ===========================
// 在am.startRouter的函数参数中添加preload属性设置延迟预加载的模块
// 开发者可在此设定首屏加载完成后的预加载模块
// 如需要根据首屏加载的不同模块来确定延迟预加载的模块，可参照此文件夹下的index.mod.html文件编码方式

am.startRouter ({

    // ...
    
    routes (router) {
        router.module ()

        // route方法改造：
        // 将route方法的第二个参数修改为：
        // 传入字符串时表示modulePath，对应懒加载的模块路径；
        // 传入模块对象时表示预加载的模块；
        // 传入对象时可设置额外的参数，module是必须属性（可传入路径或模块对象），其他额外属性可自定义，这些额外属性将会在preload中被使用到。
        // 将modulePath修改为module，预加载时值为am.Module对象，懒加载时为模块路径
        .route ("/", {
            module: "/index.mod",
            name: "index"
        }, childRouter => {
            childRouter.module ().defaultRoute ("/child-index.mod");
        })
        .route ("/about", "/about.mod", childRouter => {
            childRouter.module ().defaultRoute ("/child-about.mod");
        });
    },

    // 未设置preloadURL时，会单独为每个模块发起一次请求（如果是ES6的模块请求则会转换为编译后的映射路径），若预加载请求过多可能导致性能问题
    // 设置preloadURL后，此时调用navigator.preload并传入一个回调函数时，可统一发出模块请求，这是为了避免模块预加载多的时候同时发出多个请求导致的性能问题
    // url为预加载发出的模块get请求，它将会带有一个"modules"参数，参数是包含了所有需要预加载的模块路径数组（如果是ES6的模块请求则会转换为编译后的映射路径）
    // 后端对应的url需根据modules中的模块路径找到对应的模块代码，拼接成字符串统一返回；
    // 多个模块需按modules数组中的顺序，以“，“分割，此时amaple将会依次使用路径映射的方式保存模块的渲染函数
    preloadURL: "/module-preload",

    // 在首屏加载完成后的钩子函数afterLoad中进行模块预加载
    afterLoad (navigator) {

        // 根据routes属性中配置的路由内容依次从外到内调用此函数，并传入对应的router配置信息
        // 此routerConfig参数为一个Object，属性内容如下：
        // modulePath:String  路由模块的路径，与route的第二个参数一直；
        // path:Object  路由匹配路径相关配置；
        // 其他额外的属性，可通过上面的route的第二个参数设定为Object添加额外属性；
        // ============================
        // 该函数返回非falsy值表示确认预加载当前模块
        // 返回falsy值表示不预加载当前模块
        // 如果确认预加载的模块中有已保存的模块，那么它将不会被发起加载请求
        navigator.preload (routerConfig => !!routerConfig.name);
    }
});