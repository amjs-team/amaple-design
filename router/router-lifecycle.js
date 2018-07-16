// 模块跳转拦截器
// 场景1：某些模块需登录才能访问，此时需跳转前验证是否登录，未登录则跳转登录页面
// 场景2：表单模块在未保存离开前需提示是否确认离开
// 场景3：路由初始化时预先加载初始化数据
// 场景4：路由跳转完毕后，需定位页面的到指定位置
// 场景5：第一次进入时需解析初始化数据
// 场景6：每次刷新时都需要首先显示封面图
// 场景7：记录每个页面跳转的渲染时间

function afterRouter () {
    // TODOS
}

am.startRouter ({

    /**
     * beforeLoad(controllerName1: String, controllerName2: String, ...)
     * 刷新进入页面，但还未开始渲染模块时调用
     * 函数参数为对应名称的控制器对象
     * 
     * @return 
     * [false]取消当前url的跳转，保留在原来的页面
     * [路由地址]取消当前url的跳转，并重新跳转到返回的url路径
     * [具有path/query/data属性的Object]取消当前url的跳转，并根据Object中的数据重新跳转
     * [Promise对象]异步控制路由跳转，此时需将返回参数传入resolve函数中，可在此做数据预加载等延迟性的跳转动作
     * [其他]继续原来的模块渲染
     */
    beforeLoad () {
        // TODOS
    },

    /**
     * afterLoad(controllerName1: String, controllerName2: String, ...)
     * 刷新进入页面，且已渲染完所有模块时调用
     * 函数参数为对应名称的控制器对象
     * 
     * @return void
     */
    afterLoad () {
        // TODOS
    },

    /**
     * beforeRouter(controllerName1: String, controllerName2: String, ...)
     * 路由跳转前调用，如果跳转模块为懒加载模块，则在触发加载模块前调用
     * 函数参数为对应名称的控制器对象
     * 
     * @return 
     * [false]取消当前url的跳转，保留在原来的页面
     * [路由地址]取消当前url的跳转，并重新跳转到返回的url路径
     * [具有path/query/data属性的Object]取消当前url的跳转，并根据Object中的数据重新跳转
     * [Promise对象]异步控制路由跳转，此时需将返回参数传入resolve函数中，可在此做数据预加载等延迟性的跳转动作
     * [其他]继续原来的模块渲染
     */
    beforeRouter () {

        // navigator.referer和navigator.to分别表示跳转前和即将要跳转的路由信息
        // 它们是一个Object，分别有属性：
        // [fullpath]全路径
        // [path]不带query的路径
        // [query]get参数Object键值对
        // [params]params参数Object键值对
        // [matched]当前匹配的模块信息数组
        // [hash]path中的hash值，browser为hash模式时此属性永远为""
        if (navigator.referer.fullpath === "/" && navigator.to.fullpath) {
            return false;
        }
    },

    /**
     * afterRouter(controllerName1: String, controllerName2: String, ...)
     * 路由跳转后，且已渲染完所有模块时调用
     * 函数参数为对应名称的控制器对象
     * 
     * @return void
     */
    afterRouter () {
        // TODOS
    },
    routes (R) {

        /** 
         * R.br(handler: Function, isTransmitChildren: Boolean)
         * @desc beforeRouter的缩写，当指定模块元素内的模块改变但还未渲染时，将会触发handler函数
         * @param handler为指定模块元素内的模块改变但还未渲染时，将会触发handler函数，函数可通过控制器名称依赖注入对应控制器
         * @param isTransmitChildren为true时，该回调函数将会传递到此模块元素的子模块元素中，即handler函数将会按当前模块对象从外到内的顺序依次被调用，此时可通过navigator.getRoute函数获取当前正在检查的模块配置对象。默认值为false
         * @return 
         * [false]取消当前url的跳转，保留在原来的页面
         * [路由地址]取消当前url的跳转，并重新跳转到返回的url路径
         * [具有path/query/data属性的Object]取消当前url的跳转，并根据Object中的数据重新跳转
         * [Promise对象]异步控制路由跳转，此时需将返回参数传入resolve函数中，可在此做数据预加载等延迟性的跳转动作
         * [其他]继续原来的模块渲染
         */
        R.m().br(navigator => {

            // navigator.getRoute函数用于获取当前正在检查的模块配置对象
            // 此函数将根据当前检查的模块，返回对应的模块配置对象，此时便可获取对应的配置信息
            // 此函数只有在路由配置的beforeRouter/afterRouter函数中调用时才会返回对应的模块配置对象，其他地方调用时将会返回null
            const routeConfig = navigator.getRoute();
            return routeConfig.login ? "/login" : undefined;
        }, true)
        
        /** 
         * R.ar(handler: Function, isTransmitChildren: Boolean)
         * @desc afterRouter的缩写，当指定模块元素内的模块改变且渲染完成时，将会触发handler函数，函数可通过控制器名称依赖注入对应控制器
         * @param handler为指定模块元素内的模块改变且渲染完成时，将会触发handler函数
         * @param isTransmitChildren为true时，该回调函数将会传递到此模块元素的子模块元素中，默认为false
         * @return void
         */
        .ar(afterRouter, true)
        .r("/", "./module/index", CR => {
            CR.m()
            .dr("./module/index/child")
        });
    }
});