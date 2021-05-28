const now = new Date();

let inform = document.querySelector('.nortification');

if (now.getDay() == 5){
    let pancake = document.querySelector('.pancake');
    let start = document.querySelector('.start');
    let middle = document.querySelector('.highlight');
    let end =  document.querySelector('.end');
    let info =  document.querySelector('.event-info');
    let button = document.querySelector('.cta');
    
    start.innerHTML = '🥞 Saturday  =';  
    middle.innerHTML = ' Preston Pancakes ';
    end.innerHTML ='in the Park!'; 
   
    info.innerHTML = '9:00 a.m. Saturday at the city park pavilion.';
    button.innerHTML = 'Check Now';

    pancake.style.display = 'block';
    info.style.display = 'block';
    button.style.display = 'block';
}
    else{
        inform.style.display = 'none';
    }


const hambutton = document.querySelector('.drop');
const menu = document.querySelector('.hide');

hambutton.addEventListener('click', () => {menu.classList.toggle('responsive')}, false);

document.getElementById('year').innerHTML = now.getFullYear();
document.getElementById('date').innerHTML = new Intl.DateTimeFormat("en-US",{ dateStyle:"full"}).format(now);

