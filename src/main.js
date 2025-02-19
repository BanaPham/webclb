import Navigo from "navigo";
import Trangchu, {Kenhdangky, Shorts} from "./you.js"

const router = new Navigo('/');

router.on("/", function(){
    Trangchu()
});

router.on("/shorts", function(){
    Shorts()
});

router.on("/feed", function(){
    Kenhdangky()
});

// router.on('/watch/:id', (params) => {
//     Inid(params);
// });

router.resolve();

export {router}