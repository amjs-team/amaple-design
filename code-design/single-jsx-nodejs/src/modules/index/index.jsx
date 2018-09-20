import am, { Module, Inject } from "amaple";
import IndexStore from "./index.store.js";

const store = new IndexStore();
@Inject(store)
export default new Module({
    render () {
        const userInfo = this.store.state.userInfo;

        return (
            <div>
                <div>
                    <label>用户名</label>
                    <input type="text" onInput={val => userInfo.username = val} value={ userInfo.username } />
                </div>
                <div>
                    <label>密码</label>
                    <input type="password" onInput={val => userInfo.password = val} value={ userInfo.password } />
                </div>
                <div module></div>
            </div>
        );
    }
});