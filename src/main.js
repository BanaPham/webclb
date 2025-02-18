import Navigo from "navigo";
import Trangchu, {Inid, Kenhdangky, Shorts} from "./you.js"

const router = new Navigo("/", {
    linksSelector: "button",
});

router.on("/", function(){
    Trangchu()
});

router.on("/shorts", function(){
    Shorts()
});

router.on("/feed", function(){
    Kenhdangky();
});

router.resolve();

export {router}