import am, { Module, Inject } from "amaple";
import IndexStore from "./index.store";
import Child from "../../components/Child.comp.html";

const store = new IndexStore();
@Inject(store)
new Module(document.getElementById("#app"), {
    render () {
        return (
            <div>
                <div>
                    <label>用户名</label>
                    <input type="text" onInput={val => this.store.state.username = val} value={this.store.state.username} />
                </div>
                <div>
                    <label>密码</label>
                    <input type="password" onInput={val => this.store.state.password = val} value={this.store.state.password} />
                </div>
                <Child text={this.store.state.plusFive}></Child>
            </div>
        );
    }
});