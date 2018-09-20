import { Store } from "amaple";

class IndexStore extends Store {
    constructor () {
        Object.assign(this, {
            commonData: {
                title: "Demo"
            },
            header: {
                text: "Header"
            },
            footer: {
                text: "Footer"
            }
        });

        // -- 废弃授权 --
        // 方式一：授权和state定义放在不同的地方，用于之前没有授权后面需要添加授权的情况
        // this.auth({
        //     commonData: [

        //         // Store.W表示只有可写权限，被授权的组件或模块中只能对该state赋值，而不可显示
        //         // Store.R表示只有可读权限，被授权的组件或模块中只能对该state显示，而不可赋值
        //         // Store.RW表示读写权限，被授权的组件或模块中能对该state赋值和显示
        //         // 默认为Store.RW
        //         [HeaderModule, Store.RW],
        //         FooterModule
        //     ],
        //     header: [HeaderModule],
        //     footer: [FooterModule]
        // });
    }

    // 响应式state被创建完成后触发
    // 通常用于请求服务器数据，创建或恢复本地数据快照
    created () {
        // TODOS
    }

    // 当前Store实例被移除出store树时调用
    // 通常用于卸载该Store内发起的定时任务，websocket等损耗性能的事务
    destroy () {
        // TODOS
    }
}

export default new IndexStore();