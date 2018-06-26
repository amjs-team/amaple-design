// 在模块中调用跳转函数
new am.Module ({
    init (navigator) {
        return {

            // push、replace、pop函数的第二个参数可传递任意类型的参数
            // 对应模块可通过this.data获取传递的参数，但需要注意的是刷新页面后this.data数据不会保留，所以需要做好判断防止出错
            navigateTo ( path ) {
                navigator.push ( {
                    path,
                    query: {},
                    data: {
                        arg1: 0,
                        arg2: 1,
                        arg3: 2
                    }
                } );

                // 也可以直接navigator.push ( url )这样单独传入一个字符串跳转，query也可直接加到path后面，这在没有data时很有用
            },
            redirectTo ( path ) {
                navigator.replace ( {
                    path,
                    query: {},
                    data: {
                        arg1: 0,
                        arg2: 1,
                        arg3: 2
                    }
                } );

                // 也可以直接navigator.replace ( url )这样单独传入一个字符串跳转，query也可直接加到path后面，这在没有data时很有用
            },
            backTo ( delta ) {

                // navigator.pop ( delta: Number|Object )
                // delta：当传入数字时表示返回的层数，如果delta大于现有页面数则返回到第一个页面，默认为1。当传入对象时此对象可带有delta、data属性
                // data参数在跳转后的模块中可通过this.data获取到，它相比于params、query参数是一次性的参数，往往用于在跳转到的模块需要做特殊表现，如：
                // 1. 跳转到登录界面，登录成功后做出不同的操作
                // 2. 保存数据返回到上一个界面时，需刷新数据以显示最新保存的数据
                // 3. 操作成功跳转回上一个页面，并显示操作成功
                navigator.pop ( {
                    delta: 2, 
                    data: {
                        arg1: 0,
                        arg2: 1,
                        arg3: 2
                    }
                } );

                // 也可以直接navigator.pop ( delta )这样单独传入一个数字直接表示返回的层数，这在没有data时很有用
            }
        }
    }
});


// 在组件中调用跳转函数
// 组件中的生命周期也可以像Module一样，通过控制器名称直接获取控制器对象
// Amaple组件的定位是拥有特定功能的封装块，就像由一堆代码封装成的具有特定功能的纯函数（对传入的参数无副作用、不干扰主业务）一样，所以我们不推荐在Amaple组件内进行操作主业务逻辑
// 但确实需要操作，则可使用以下方式
const Comp = am.class ("Comp").extends (am.Component) ({
    init (navigator) {
        return {
            navigator: {
                observe: 0,
                value: navigator
            }
        };
    },
    redirectTo (url) {
        this.state.navigator.push (url);
    }
});