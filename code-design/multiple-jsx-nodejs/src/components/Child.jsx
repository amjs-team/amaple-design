import am, { Component, Store, Inject } from "amaple";

// store
class ChildStore extends Store {
    constructor () {
        this.state = {
            list: ["a", "b", "c"]
        };
        
        this.auth({
            list: [ChildStore]
        })
    }
}

// component
@Inject({ childStore: ChildStore })
export default class Child extends Component {
    init () {
        this.propsType({
            text: String
        });
    }
    render () {
        return this.childStore.state.list.map(item => <button onClick={this.click}>{item}</button>);
    }
    mounted () {
        // TODOS
    }
    click () {
        this.childStore.state.list.push(this.props.text);
    }
}