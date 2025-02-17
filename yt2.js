import {router} from "yt1.js";

function renderHome() {
    document.querySelector("#content").innerHTML = `
        <div class="trangchu">
            <strong>Chế độ lưu danh sách đã xem đã tắt</strong>
            <p>Bạn có thể thay đổi chế độ cài đặt bất cứ lúc nào để thấy những video mới nhất phù hợp với mình. <a href="https://support.google.com/youtube/answer/95725">Tìm hiểu thêm</a></p>
            <button class="button"><strong>Cập nhật chế độ cài đặt</strong></button>
        </div>
        // <style>
        //     .trangchu {
        //         border-radius: 20px;
        //         border: 2px solid rgb(229, 228, 228);
        //         padding: 30px;
        //         width: 500px;
        //         display: flex;
        //         flex-direction: column;
        //         justify-content: center;
        //         align-items: center;
        //         text-align: center;
        //     }
        //     .trangchu .button {
        //         height: 40px;
        //         width: 400px;
        //         border-radius: 50px;
        //         border: none;
        //         cursor: pointer;
        //         &:hover {
        //             background-color: rgb(232, 230, 230);
        //         }
        //     }
        // </style>
        // <script>
        //     const items = document.querySelectorAll('.icon');
        //     items.forEach(btn => {
        //         btn.addEventListener('click', () => {
        //             items.forEach(item => item.classList.remove('show'));
        //             btn.classList.add('show');
        //         });
        //     });
        // </script>
    `
}

function renderHome1() {
    document.querySelector("#content").innerHTML `
        <div class="short">
            <div>
                <strong>Tính năng đề xuất đang tắt</strong>
                <p>Nhật ký xem của bạn đang tắt. Chúng tôi dựa vào nhật ký này để điều chỉnh trang Shorts cho bạn. Bạn có thể thay đổi chế độ cài đặt bất cứ lúc nào hoặc thử tìm video ngắn. <a href="https://support.google.com/youtube/answer/95725?hl=vi">Tìm hiểu thêm.</a></p>
                <button class="button"><strong>Cập nhật chế độ cài đặt</strong></button>
            </div>
        </div>
        // <style>
        //     .short {
        //         background-color: rgba(48, 48, 48, 0.858);
        //         padding: 400px 20px 30px;
        //         display: flex;
        //         flex-direction: column;
        //         justify-content: center;
        //         align-items: center;
        //         text-align: center;
        //         color: white;
        //         border-radius: 20px;
        //         width: 400px;
        //     }
        //     .short .button.show {
        //         height: 40px;
        //         width: 400px;
        //         border-radius: 50px;
        //         border: none;
        //         cursor: pointer;
        //         &:hover {
        //             background-color: rgb(232, 230, 230);
        //         }
        //     }
        // </style>
        // <script>
        //     const items = document.querySelectorAll('.icon');
        //     items.forEach(btn => {
        //         btn.addEventListener('click', () => {
        //             items.forEach(item => item.classList.remove('show'));
        //             btn.classList.add('show');
        //         });
        //     });
        // </script>
    `
}

function renderHome2() {
    document.querySelector("#content").innerHTML `
        <div class="dki">
            <strong>Chưa có kênh đăng kí.</strong>
        </div>
        // <style>
        //     .dki.show {
        //         font-size: 18px;
        //     }
        // </style>
        // <script>
        //     const items = document.querySelectorAll('.icon');
        //     items.forEach(btn => {
        //         btn.addEventListener('click', () => {
        //             items.forEach(item => item.classList.remove('show'));
        //             btn.classList.add('show');
        //         });
        //     });
        // </script>
    `
}

export {renderHome1, renderHome2}
export default renderHome;