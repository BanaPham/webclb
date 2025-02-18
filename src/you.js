import {router} from './main.js';

function Trangchu()
{
    document.querySelector("#content").innerHTML = `
        <strong>Chế độ lưu danh sách đã xem đã tắt</strong>
    `
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

function Inid() {
    document.querySelector("#content").innerHTML = `
        <h4>Bạn đang xem video có id là :<span id="id-container"></span></h4>
        <button id="Saochep">Click</button>
    `
    const path = window.location.pathname;
    const parts = path.split('/'); 
    const id = parts[parts.length - 1]; 
    document.getElementById("Saochep").addEventListener("click", function() {
        navigator.clipboard.writeText(id)
            .then(() => alert("Đã sao chép ID: " + id))
    });
    document.getElementById('id-container').textContent = id;
}

export default Trangchu
export {Shorts, Kenhdangky, Inid}