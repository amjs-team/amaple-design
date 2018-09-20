import HeaderModule from "./header.jsx";
import FooterModule from "./footer.jsx";

export default R => {
    R.m("header").r("/", HeaderModule);
    R.m("footer").r("/", FooterModule);
};