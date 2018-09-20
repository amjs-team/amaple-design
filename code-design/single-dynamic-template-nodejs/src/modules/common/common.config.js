import HeaderModule from "./header.mod.html";
import FooterModule from "./footer.mod.html";

export default R => {
    R.m("header").r("/", HeaderModule);
    R.m("footer").r("/", FooterModule);
};