import Navigo from "navigo";
import Trangchu, {Inid, Kenhdangky, Shorts} from "./you.js"

const router = new Navigo("/", {
    linksSelector: "a",
});

document.addEventListener("click", (event) => {
    const button = event.target.closest("button"); 
    if (button) {
        const link = button.querySelector("a"); 
        if (link) {
            event.preventDefault(); 
            router.navigate(link.getAttribute("href")); 
        }
    }
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

router.notFound(() => {
    Inid()
});

router.resolve();

export {router}