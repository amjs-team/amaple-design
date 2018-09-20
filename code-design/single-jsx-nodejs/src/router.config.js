import commonConfigFn from "./modules/common/common.config";
import indexConfigFn from "./modules/index/index.config";

export default R => {

    // 来自其他模块路由配置
    commonConfigFn(R);
    indexConfigFn(R);
};