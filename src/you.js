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

export default Trangchu
export {Shorts, Kenhdangky}