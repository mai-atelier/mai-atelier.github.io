
const drop = document.querySelector('.toggle');
const menu = document.querySelector('.hide');

drop.addEventListener('click', () => {menu.classList.toggle('responsive')}, false);

const now = new Date();
document.getElementById('year').innerHTML = now.getFullYear();
document.getElementById('date').innerHTML = new Intl.DateTimeFormat("en-US",{ dateStyle:"full"}).format(now);