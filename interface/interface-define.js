// amaple接口定义设计
// 如JAVA interface，可通过接口定义必须的值和成员函数
// 内置接口：http请求、cache、router、globalState等接口
// 这样的设计有3个好处：
// ①用户可通过接口更换为符合业务的解决方案，如request请求接口可将基于ajax的方案更换为基于websocket的
// ②用户可产出更好的解决方案，替代原有方案
// ③可将现有的内置解决方案，在日后以接口的形式剥离出来，让用户自行选择是否需要对应的接口实现实例
// 接口数据只有在调用implements时检测，所以一般只简单在定义数据时使用。如需使用更多功能，可自行引入static type checker。
// 如果项目有使用ts，可使用ts来作为接口校验

// 开发者可自行定义接口
////////////////////////////////
// 对象接口定义
const objInterface = {

    // 以__（双下划线）开头和结束的为说明参数，amaple只会读取此类参数控验证规则
    __strict__: true,  // 此参数表示被验证参数只精确包含如下5个参数，默认为false

    // 以下为具体验证参数
    attrZero: "amaple.js", // 具体的基本数据类型值，它的类型为Number/String/Function/Boolean/Object/Array/Symbol中的一种
    attrOne: Function,  // 属性值基本数据类型 Number/String/Function/Boolean/Object/Array/Symbol/null/undefined
    attrTwo: /\d+/, // 正则表达式，它会调用Regexp.test ()匹配，为true则表示通过，false表示不通过
    attrThree: number => number > 0, // 函数，它接收此属性值，必须返回true或false表示是否通过验证
    attrFour: ["amaple.js", /\s+/, Number]  // 数组，数组内是以上四种值的组合，通过数组内任意一项验证都可以通过，相当于“||”运算符
};  // 如果对象属性中嵌套了对象，则amaple会遍历继续检测对象内的数据
const baseInterface = Array; // 你也可以单独使用上面5种检测方式中的任意一种
const arrInterface = function (array) { // 此为检测数组中只包含特定类型的参数
    if (Array.isArray (array)) {
        for (let i = 0; i < array.length; i ++) {
            if (typeof array[i] !== "string" && typeof array[i] !== "number") {
                return false;
            }
        }
    }
    else {
        return false;
    }

    return true;
}


// 可考虑将插件功能合并到interface中
const 
    HTTP = {
        get: Function,
        post: Function,
        request: Function
    },
    ROUTER = {
        matchesRouter: Function,
        // ...
    };

// 使用defineProperties定义接口，是为了避免用户修改am.interface中的数据
am.interface = {};
Object.defineProperties (am.interface, {
    HTTP: {
        value: HTTP
    },
    ROUTER: {
        value: ROUTER
    }
});