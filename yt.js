import Navigo from 'navigo';
const router = new Navigo('/');


const item = document.querySelectorAll('.icon');
item.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.add("show");
        console.log("jsdfjfsidjf");
    });
});

router.resolve();