// 必须导入am对象
import am, { Module, Inject, Mutate } from "amaple";
import commonStore from "./common.store.js";

@Inject({ commonStore })
export default new Module({
    init () {
        this.state = this.commonStore.state;
    },
    mounted () {
        fetch("index.php").then(

            // 异步请求中，如果回调函数中有修改state，则需要用@Mutate注解以跟踪状态
            @Mutate
            res => this.state.header.text = res.text
        )
    },
    render () {
        const state = this.state;

        return (
            <div>
                <h1>{ state.commonData.title }</h1>
                <div>{ state.header.text }</div>
                <button onClick={ this.updateText }>Update</button>
            </div>
        );
    },
    updateText () {
        this.state.text = "New Header";
    }
});