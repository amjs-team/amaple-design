import am from "amaple";
import logger from "amaple-logger";

am.config({

    // 是否开启授权模式，开启后组件或模块中修改state必须在对应的Store中授权，否则会报错，默认为false
    // 此配置建议在开发模式下开启以提高可维护性，但在生产模式下关闭以免产生额外的性能损耗
    authorize: true,

    // 每次mutate被调用时将会触发此函数
    // 当eachMutate被赋值为Function时，所有被Mutate包裹的函数（即mutate函数）都会外包一层用于记录和调用此函数的函数
    // 所以建议只在开发模式下赋值eachMutate，在生产模式下关闭以免产生额外的性能损耗
    eachMutate: (prevState, nextState, modularization, mutationName) => {
        console.log(stateBefore, modularization + mutationName, stateAfter);
    },
    
    // amaple-logger为预封装的mutation检测函数
    eachMutate: logger({

        // logger-configurations
    })
});