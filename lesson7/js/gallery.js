const now = new Date();

const hambutton = document.querySelector('.drop');
const menu = document.querySelector('.hide');

hambutton.addEventListener('click', () => {menu.classList.toggle('responsive')}, false);

document.getElementById('year').innerHTML = now.getFullYear();
document.getElementById('date').innerHTML = new Intl.DateTimeFormat("en-US",{ dateStyle:"full"}).format(now);

function dayOfNumbers(){
const lastViist = localStorage.getItem('date');
let convert = 1000*60*60*24;
let seconds = now.getTime() -lastVisit;
let days = Math.round(days/convert);
return days;
}
document.getElementById('user').innerHTML = dayOfNumbers();
const update = localStorage.setItem('date',now.getTime());
