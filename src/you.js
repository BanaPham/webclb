import {router} from './main.js';

function Trangchu()
{
    document.querySelector("#content").innerHTML = `
        <strong>Chế độ lưu danh sách đã xem đã tắt</strong>
    `
}

function Shorts()
{
    document.querySelector("#content").innerHTML = `
        <strong>Tạm ẩn</strong>
    `
}

function Kenhdangky()
{
    document.getElementById("content").innerHTML = `
        <strong>Chưa có kênh đăng kí</strong>
    `
}

function Inid()
{
    document.getElementById("content").innerHTML = `
        <h4>Bạn đang xem video có id là: <p id="id-container"></p></h4>
    `
    const path = window.location.pathname;
    const parts = path.split('/'); 
    const id = parts[parts.length - 1]; 
    document.getElementById('id-container').textContent = id;
}

export default Trangchu
export {Shorts, Kenhdangky, Inid}