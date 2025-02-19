import {router} from './main.js';

function Trangchu()
{
    document.querySelector("#content").innerHTML = `
        <strong>Chế độ lưu danh sách video đã xem đang tắt</strong>
    
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


export default Trangchu
export {Shorts, Kenhdangky}
