const now = new Date();

let inform = document.querySelector('.nortification');

if (now.getDay() == 5){
    let pancake = document.querySelector('.pancake');
     let info =  document.querySelector('.event-info');
    let button = document.querySelector('.cta');
    
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

