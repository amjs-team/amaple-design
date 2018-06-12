// amaple javascript
new am.Module ({
    init () {
        return {
            counter: {
                value: 0,
                
                // observe参数控制此state的观察触发次数，当观察触发次数达到后将会卸载对应的ViewWatcher，默认为"infinite"（无限次数），
                // 当obseve设置为0时，不创建存取器属性，有利于性能提升
                observe: "infinite",

                // watch函数增加watcher对象，可通过watcher.preventAssign()来阻止对此state值的赋值
                // 如counter的watch函数内调用了watcher.preventAssign()，此时this.state.counter = 1将不会触发实际的赋值，也不会触发更新视图
                // 这对于在为一个state值设置变化路径很有用
                // 为防止死循环，设定为在自己的watch中给自身赋值时不会触发watch
                watch (newVal, oldVal, watcher) {
                    watcher.preventAssign ();

                    // 使用tween.js设置state值的变化路径
                    new TWEEN.Tween ({
                        value: oldVal
                    })
                    .to ({
                        value: newVal
                    }, 1000)
                    .onUpdate (obj => {
                        this.value = obj.value;
                    })
                    .start ();
                }
            }
        }
    }
})