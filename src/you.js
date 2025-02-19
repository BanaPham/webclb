import {router} from './main.js';

function Trangchu()
{
    document.querySelector("#content").innerHTML = `
        <img class="video" src="/public/meo.jpg" data-id="051004" style="border-radius: 10px; width: 500px; height: 400px; margin: 20px;">
        <button class="Saochep"><strong>Click</strong></button>
        <br></br>
        <img class="video" src="/public/meo.jpg" data-id="051004" style="border-radius: 10px; width: 500px; height: 400px; margin: 20px;">
        <img class="video" src="/public/meo.jpg" data-id="051004" style="border-radius: 10px; width: 500px; height: 400px; margin: 20px;">
    
    `
    document.querySelectorAll(".video").forEach(img => {
        img.addEventListener("click", function () {
            let videoID = this.getAttribute("data-id");
            router.navigate(`/watch/${videoID}`); 
        });
    });
    document.getElementById("Saochep").addEventListener("click", function () {
        let videoID = document.querySelector(".video").getAttribute("data-id");
        navigator.clipboard.writeText(videoID);
    });
    const items = document.querySelectorAll('.icon');
    if (items.length > 0) {
        items[0].classList.add('show');
    }
    items.forEach(btn => {
        btn.addEventListener('click', () => {
            items.forEach(item => item.classList.remove('show'));
            btn.classList.add('show');
        });
    });
}

function Shorts()
{
    document.querySelector("#content").innerHTML = `
        <strong>Tạm ẩn</strong>
    `
    const items = document.querySelectorAll('.icon');
    items.forEach(btn => {
        btn.addEventListener('click', () => {
            items.forEach(item => item.classList.remove('show'));
            btn.classList.add('show');
        });
    });
}

function Kenhdangky()
{
    document.getElementById("content").innerHTML = `
        <strong>Chưa có kênh đăng kí</strong>
    `
    const items = document.querySelectorAll('.icon');
    items.forEach(btn => {
        btn.addEventListener('click', () => {
            items.forEach(item => item.classList.remove('show'));
            btn.classList.add('show');
        });
    });
}

function Inid(params) {
    if (document.querySelector("#content")) {
        let videoID = params.data.id;
    }
}

export default Trangchu
export {Shorts, Kenhdangky, Inid}
