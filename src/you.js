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
        <img class="Anh" style="cursor: pointer; border-radius: 20px; height: 400px; margin: 20px;" src="/public/meo.jpg" alt="" data-id="0510">
        <img class="Anh" style="cursor: pointer; border-radius: 20px; height: 400px; margin: 20px;" src="/public/meo.jpg" alt="" data-id="0511">
        <img class="Anh" style="cursor: pointer; border-radius: 20px; height: 400px; margin: 20px;" src="/public/meo.jpg" alt="" data-id="0512">
        <img class="Anh" style="cursor: pointer; border-radius: 20px; height: 400px; margin: 20px;" src="/public/meo.jpg" alt="" data-id="0513">
    `  
    const idAnh = document.querySelectorAll(".Anh");
    idAnh.forEach(({id}) => {
        const id = this.getAttribute("data-id");
        let idSelector = '#' + id;
        document.querySelector(idSelector).addEventListener('click', () => {
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

function Videodaxem()
{
    document.getElementById("content").innerHTML = `
        <img class="Anh" style="cursor: pointer; border-radius: 20px; height: 400px; margin: 20px;" src="/public/meo.jpg" alt="" data-id="0510">
        <img class="Anh" style="cursor: pointer; border-radius: 20px; height: 400px; margin: 20px;" src="/public/meo.jpg" alt="" data-id="0511">
        <img class="Anh" style="cursor: pointer; border-radius: 20px; height: 400px; margin: 20px;" src="/public/meo.jpg" alt="" data-id="0512">
        <img class="Anh" style="cursor: pointer; border-radius: 20px; height: 400px; margin: 20px;" src="/public/meo.jpg" alt="" data-id="0513">
    `  
    const idAnh = document.querySelectorAll(".Anh");
    idAnh.forEach(({id}) => {
        const id = this.getAttribute("data-id");
        let idSelector = '#' + id;
        document.querySelector(idSelector).addEventListener('click', () => {
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

export default Trangchu
export {Shorts, Kenhdangky, Videodaxem}
