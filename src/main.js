import Navigo from "navigo";
import Trangchu, {Inid, Kenhdangky, Shorts} from "./you.js"

const router = new Navigo("/", {});

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

router.on('/watch/:id', ({data}) => {
    const videoID = data.id; 
    document.querySelector("#content").innerHTML = `
        <strong class="text-2xl font-bold">Bạn đang xem video có ID là ${videoID}</strong>
    `;
});

router.resolve();

export {router}