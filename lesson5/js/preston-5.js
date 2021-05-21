const now = new Date();

let nortification = document.querySelector('.nortification');

if (now.getDay() == 5){
    let name = document.querySelector('.event-title');
    let info =  document.querySelector('.event-info');
    let button = document.querySelector('.cta');
    
    name.innerHTML = '🥞Saturday = Preston Pancakes in the Park!';  
    info.innerHTML = '9:00 a.m. Saturday at the city park pavilion.';
    button.innerHTML = 'Check Now';

    info.style.display = 'block';
    name.style.display = 'block';
    button.style.display = 'block';
}
    else{
        nortification.style.display = 'none';
    }


const drop = document.querySelector('.toggle');
const menu = document.querySelector('.hide');

drop.addEventListener('click', ()=> {menu.classList.toggle('responsive')}, false);

document.getElementById('year').innerHTML = now.getFullYear();
document.getElementById('date').innerHTML = new Intl.DateTimeFormat("en-US",{ dateStyle:"full"}).format(now);

