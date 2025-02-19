import Navigo from "navigo";
import Trangchu, {Kenhdangky, Shorts, Videodaxem, Inid} from "./you.js"

const router = new Navigo('/');

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
    Kenhdangky()
});

router.on("/history", function(){
    Videodaxem()
});

router.on('/watch/:id', (params) => {
    Inid(params.id);
});

router.resolve();

export {router}