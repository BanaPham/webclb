import {router} from './main.js';

function NoiDung()
{
    document.querySelector("#content").innerHTML = `
        <button class="video" style="border: none; background-color: white;">
            <img src="meo.jpg" data-id="051004" style="border-radius: 10px; width: 500px; height: 400px; margin: 20px; cursor: pointer;">
        </button>
        <button class="Saochep"><strong>Click</strong></button>
        <button class="video" style="border: none; background-color: white;">
            <img src="meo.jpg" data-id="051004" style="border-radius: 10px; width: 500px; height: 400px; margin: 20px; cursor: pointer;">
        </button>
        <button class="video" style="border: none; background-color: white;">
            <img src="meo.jpg" data-id="051004" style="border-radius: 10px; width: 500px; height: 400px; margin: 20px; cursor: pointer;">
        </button>
    
    `
    document.getElementById("Saochep").addEventListener("click", function () {
        let videoID = document.querySelector(".video").getAttribute("data-id");
        navigator.clipboard.writeText(videoID);
    });
}

function Trangchu()
{
    NoiDung()
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
    NoiDung()
    document.querySelectorAll(".video").forEach(img => {
        img.addEventListener("click", function () {
            let videoID = this.getAttribute("data-id");
            router.navigate(`/watch/${videoID}`); 
        });
    });
}

export default Trangchu
export {Shorts, Kenhdangky, Inid}
