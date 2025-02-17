import Navigo from 'navigo';
import renderHome, {renderHome2} from "yt2.js";
import {renderHome1} from "yt2.js";
const router = new Navigo('/');

router.on('/yt.html', function () {
    renderHome()
});

router.on('/shorts.html', function () {
    renderHome1()
});

router.on('/subscriptions.html', function () {
    renderHome2()
});

router.resolve();
export {router}