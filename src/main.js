import Navigo from "navigo";
import Trangchu, {Inid, Kenhdangky, Shorts} from "./you.js"

const router = new Navigo("/", {
    linksSelector: "a",
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

router.on("//watch/12123131", function(){
    Inid();
});

router.resolve();

export {router}