import index from "./index.jsx";
import childIndex from "./child-index/childIndex.jsx";

export default R => {
    R.m().r("/", index, CR => {
        CR.m().dr(childIndex);
    });
};