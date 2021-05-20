const now = new Date();
if (now.getDay() == 5){
    document.querySelector('.event').innerHTML = '🥞Saturday = Preston Pancakes in the Park!';  
    document.querySelector('.event-info').innerHTML = '9:00 a.m. Saturday at the city park pavilion.';
    document.querySelector('.event').style.display = 'block';
    document.querySelector('.event-info').style.display = 'block';
}

const drop = document.querySelector('.toggle');
const menu = document.querySelector('.hide');

drop.addEventListener('click', ()=> {menu.classList.toggle('responsive')}, false);

document.getElementById('year').innerHTML = now.getFullYear();
document.getElementById('date').innerHTML = new Intl.DateTimeFormat("en-US",{ dateStyle:"full"}).format(now);

