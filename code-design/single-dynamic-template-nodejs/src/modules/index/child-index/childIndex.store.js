import { Store } from "amaple";
// import childIndex from "childIndex.mod.html";

class ChildIndexStore extends Store {
    constructor () {
    	Object.assign(this, {
            childText: "child text a"
        });

    	// -- 废弃授权 --
        // this.auth({
        //     childText: [childIndex]
        // });
    }
}

export default new ChildIndexStore();