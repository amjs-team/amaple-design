import am, { Module, Inject } from "amaple";
import storeInstance from "./common.store.js";

@Inject({ storeInstance })
export default new Module({
    render () {
        const state = this.storeInstance.state;
        return (
            <div>
                <h1>{ state.commonData.title }</h1>
                <div>{ state.footer.text }</div>
            </div>
        );
    }
});