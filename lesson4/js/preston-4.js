
const drop = document.querySelector('.toggle');
const menu = document.querySelector('.hide');

drop.addEventListener('click', () => {menu.classList.toggle('responsive')}, false);

document.getElementById('year').innerHTML = new Date().getFullYear();

