import { Store } from "amaple";
import childIndex from "childIndex.mod.html";

class ChildIndexStore extends Store {
    constructor () {
        this.state = {
            childText: "child text a"
        };

        this.auth({
            childText: [childIndex]
        });
    }
}

export default new ChildIndexStore();