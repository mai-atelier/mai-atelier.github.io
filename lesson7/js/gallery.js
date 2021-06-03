const now = new Date();

const hambutton = document.querySelector('.drop');
const menu = document.querySelector('.hide');

hambutton.addEventListener('click', () => {menu.classList.toggle('responsive')}, false);

document.getElementById('year').innerHTML = now.getFullYear();
document.getElementById('date').innerHTML = new Intl.DateTimeFormat("en-US",{ dateStyle:"full"}).format(now);