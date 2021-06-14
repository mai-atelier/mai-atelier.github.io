const now = new Date();

/* announcemnet*/
let inform = document.querySelector('.notification');

if (now.getDay() == 5){
    let pancake = document.querySelector('.pancake');
    let start = document.querySelector('.start');
    let middle = document.querySelector('.highlight');
    let end =  document.querySelector('.end');
    let info =  document.querySelector('.event-info');
    let button = document.querySelector('.cta');
    
    start.innerHTML = ' Saturday  =';  
    middle.innerHTML = ' Preston Pancakes ';
    end.innerHTML ='in the Park! 🥞'; 
   
    info.innerHTML = '9:00 a.m. Saturday at the city park pavilion.';
    button.innerHTML = 'Check Now';

    pancake.style.display = 'block';
    info.style.display = 'block';
    button.style.display = 'block';
}
    else{
        inform.style.display = 'none';
    }

/* responsive navigation */
const hambutton = document.querySelector('.drop');
const menu = document.querySelector('.hide');

hambutton.addEventListener('click', () => {menu.classList.toggle('responsive')}, false);

/* footer */

document.getElementById('year').innerHTML = now.getFullYear();
document.getElementById('date').innerHTML = new Intl.DateTimeFormat("en-US",{ dateStyle:"full"}).format(now);

/* gallery page */
/* lazy loading */
const images = document.querySelectorAll('img[data-src]');

const loadImages = (image) =>{
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = ()=>{image.removeAttribute('data-src');};
};

const options = {
    rootMargin: "15px" ,
    threshold: 1
};

const observer = new IntersectionObserver((entries,options)=>{
    entries.forEach(entry =>{
    if (entry.isIntersecting){
        loadImages(entry.target);
        observer.unobserve(entry.target);
    }
    else{
        return;
    }
})
},options);

images.forEach((image)=>{
    observer.observe(image);
});

/*user log*/
function dayOfNumbers(){
const lastVisit = localStorage.getItem('date');
let convert = 1000*60*60*24;
let seconds = now.getTime() -lastVisit;
let days = Math.round(seconds/convert);
return days;
}
document.getElementById('user').innerHTML = dayOfNumbers() ;
const update = localStorage.setItem('date',now.getTime());
