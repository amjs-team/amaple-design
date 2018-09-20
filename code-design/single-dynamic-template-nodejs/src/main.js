import am from "amaple";
import amRouter from "amaple-router";
import logger from "amaple-logger";
import routerConfig from "./router.config";

am.config({

    // 每次mutate被调用时将会触发此函数
    // 当mutateWatcher被赋值为Function时，所有被Mutate包裹的函数（即mutate函数）都会外包一层用于记录和调用此函数的函数
    // 所以建议只在开发模式下赋值mutateWatcher，在生产模式下关闭以免产生额外的性能损耗
    mutateWatcher: (prevState, nextState, modularization, mutationName) => {
        console.log(stateBefore, modularization + mutationName, stateAfter);
    },
    
    // amaple-logger为预封装的mutation检测函数
    mutateWatcher: logger({

        // logger-configurations
    })
});

// 安装Router插件
am.install(amRouter);
am.startRouter({
    history: am.AUTO,
    routes: routerConfig
});