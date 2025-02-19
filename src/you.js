import {router} from './main.js';
import { videoList } from './content.js';

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

function Videodaxem()
{ 
    videoList.forEach(({id}) => {
        let idSelect = '#' + id;
        document.querySelector(idSelect).addEventListener('click', () => {
            router.navigate('/watch/' + id);
        });
    });
    const items = document.querySelectorAll('.icon');
    items.forEach(btn => {
        btn.addEventListener('click', () => {
            items.forEach(item => item.classList.remove('show'));
            btn.classList.add('show');
        });
    });
}

function Inid(params)
{
    let videoID = params.data.id;
    let currentVideo = videoList.filter((vid) => vid.id === videoID);
    if (currentVideo.length) {
        videoID = '(Bạn đang xem video có ID là ' + videoID + ')';
    }
}

export default Trangchu
export {Shorts, Kenhdangky, Videodaxem,Inid}
