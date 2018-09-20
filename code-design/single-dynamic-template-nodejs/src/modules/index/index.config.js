import index from "./index.mod.html";
import childIndex from "./child-index/childIndex.mod.html";

export default R => {
    R.m().r("/", index, CR => {
        CR.m().dr(childIndex);
    });
};