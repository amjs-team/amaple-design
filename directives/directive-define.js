// 动静态指令规则
// 使用“:”表示动态指令
// 使用“@”表示静态指令
// 有些指令只能为动态指令，有些只能为静态指令，有些两者皆可
// for/if/else-if/on/model/directive只能为动态指令
// module/ref/ignore只能为静态指令
// key为两者皆可

// 指令定义规则
export default {
    name: "key",    // 可用
    type: "both",   // 可设置为static、dynamic、both，分别代表静态指令，动态指令和动静态指令，默认为动态指令
    init({ node, attr, tmpl, scoped }, evalValue) {
        evalValue (attr.value);

        return {
            firstKey: 0,
            secondKey: 1
        };
    },

    // 第二个参数将接受init中返回的值
    update({ node, attr, tmpl, scoped }, extObj) {
        console.log (extObj.firstKey, extObj.secondKey);
    }
}