import Header from "./modules/header.am";
import App from "./modules/index.am";
import Footer from "./modules/footer.am";

export default function ( router ) {
    router.module ("header").route ("/", Header);
    router.module ().route ("/", App);
    router.module ("footer").route ("/", Footer);
}