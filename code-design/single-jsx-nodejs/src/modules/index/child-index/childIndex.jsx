import am, { Module, Inject } from "amaple";
import Child from "../../../components/Child.jsx";
import childIndexStore from "./childIndex.store";

@Inject({ store: childIndexStore })
export default new Module({
    render () {
        return <Child text={ this.store.state.childText } />;
    }
});