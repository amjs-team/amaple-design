import am, { Component, Store, Inject } from "amaple";

class ChildStore extends Store {
    constructor () {
        this.state = {
            list: ["a", "b", "c"]
        };
        
        this.auth({
            list: [ChildStore]
        });
    }
}

@Inject({ childStore: ChildStore })
export default class Child extends Component {
    mounted () {
        // TODOS
    }
    render () {

        // JSX语法中的条件语句和循环语句有待考虑
        return this.childStore.state.list.map(
            item => <button onClick={this.click}>{ item }</button>
        );
    }
    click () {
        this.childStore.state.list.push("1");
    }
}