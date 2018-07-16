
new am.Module ({

    /**
     * enter(controllerName1: String, controllerName2: String, ...)
     * 当前模块在进入前调用，此时该模块对象还未被创建且界面未被渲染，所以此函数内不可使用this
     * 函数参数为对应名称的控制器对象
     * 
     * @return 
     * [false]取消当前url的跳转，保留在原来的页面
     * [路由地址]取消当前url的跳转，并重新跳转到返回的url路径
     * [具有path/query/data属性的Object]取消当前url的跳转，并根据Object中的数据重新跳转
     * [Promise对象]异步控制路由跳转，此时需将返回参数传入resolve函数中，可在此做数据预加载等延迟性的跳转动作
     * [其他]继续原来的模块渲染
     */
    enter (navigatr) {
        return false;
    },

    /**
     * leave(controllerName1: String, controllerName2: String, ...)
     * 当前模块在离开前调用，一般用于重要模块离开前的询问和控制
     * 函数参数为对应名称的控制器对象
     * 
     * @return 
     * [false]取消当前url的跳转，保留在原来的页面
     * [路由地址]取消当前url的跳转，并重新跳转到返回的url路径
     * [具有path/query/data属性的Object]取消当前url的跳转，并根据Object中的数据重新跳转
     * [Promise对象]异步控制路由跳转，此时需将返回参数传入resolve函数中，可在此做数据预加载等延迟性的跳转动作
     * [其他]继续原来的模块渲染
     */
    leave () {
        return new Promise(resolve => {
            setTimeout(() => resolve("/category"), 500);
        });
    }
});