var now = new Date();
if (now.getDay() == 4){
    document.querySelector('.nortification').innerHTML = '🥞🐶 Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.';
    document.querySelector('.nortification').style.display = 'block';
}

var drop = document.querySelector('.toggle');
var menu = document.querySelector('.hide');

drop.addEventListener('click', ()=> {menu.classList.toggle('responsive')}, false);

document.getElementById('year').innerHTML = now.getFullYear();
document.getElementById('date').innerHTML = new Intl.DateTimeFormat("en-US",{ dateStyle:"full"}).format(now);

