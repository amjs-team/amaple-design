// 每次路由跳转后需重置滚动条，同时开发可记录滚动条位置的功能
// 场景1：正常跳转需重置滚动条到最顶端（默认）
// 场景2：onpopstate事件触发时（前进/后退）滚动到离开前的位置，以便于继续上次的浏览
// 场景3：跳转到某页面后需马上滚动到指定的位置（固定位置/某元素所在位置）
// 场景4：开发者需实现自定义的动态的滚动动画，让页面更具生动性

am.startRouter ({

    // ...

    // navigator为路由模块引入的控制对象，包含跳转前的模块信息navigator.referer，当前跳转的模块信息navigator.to，是否为浏览器前进/后退跳转navigator.isPopState，以及多个控制对象等
    // getDOMLocation为路由模块引入的获取元素所在位置的函数
    // scrollTo为路由模块引入的设置滚动条位置的函数
    afterRouter (navigator, getDOMLocation, scrollTo) {

        // 不设置时默认滚动到顶部
        // 滚动到y轴100px处，也可写成scrollTo(100)
        scrollTo ({
            x: 0,
            y: 100,
        });

        // 传入false时不滚动，即当前在哪个位置，跳转后也在哪个位置
        scrollTo (false);

        // 如果为浏览器前进/后退跳转的，可通过navigator.isPopState判断
        if (navigator.isPopState) {
            scrollTo (navigator.to.location);
        }

        // 跳转到某页面后需马上滚动到指定元素所在的位置
        getDOMLocation ("#selector", location => {
            scrollTo (location);
        });
    }
});