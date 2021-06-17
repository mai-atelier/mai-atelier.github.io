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
   
    info.innerHTML = '9:00 a.m. Saturday at the city park pavilion. ';
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

/*JSON Town infomation*/
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"

fetch (requestURL) 
.then (function (response){
    return response.json();
})

.then(function(jsonObject){
    const towns = jsonObject['towns'];
    for (let i = 0; i<towns.length; i++){
        if (i%2 == 0 && i!=4){
    
    let card = document.createElement('div');
    let div = document.createElement('div');
   let name = document.createElement('section');
   let h2 = document.createElement('h2');
   let p = document.createElement('p');
   let statics = document.createElement('section');
   let p1 = document.createElement('p');
   let p2 = document.createElement('p');
   let p3 = document.createElement('p');
            
   h2.textContent = towns[i].name;
   p.textContent = towns[i].motto;
   p1.textContent = 'Year Found: ' +towns[i].yearFounded;
   p2.textContent = 'Population: ' +towns[i].currentPopulation;
   p3.textContent = 'Rain Fall: ' +towns[i].averageRainfall;

   name.appendChild(h2);
   name.appendChild(p);
   statics.append(p1,p2,p3);
   div.append(name, statics);
   card.appendChild(div);
   document.querySelector('div.plate').appendChild(card);
   card.className = 'card';
   name.className = 'townname';
   statics.className = 'statics';
   div.className = 'town';
            
            if (i==6){
                let pic1 = document.querySelector('.hero1');
                card.insertBefore(pic1, div);
            }
    
            else if (i==2){
                let pic2 = document.querySelector('.hero2');
                card. insertBefore(pic2, div);
            }

            else if (i==0){
                let pic3 = document.querySelector('.hero3');
                card. insertBefore(pic3, div);

            }

    }

}
});

/* footer */
document.getElementById('year').innerHTML = now.getFullYear();
document.getElementById('date').innerHTML = new Intl.DateTimeFormat("en-US",{ dateStyle:"full"}).format(now);

/* windchill calculation*/
let temp = parseFloat(document.getElementById('current').innerHTML);
let speed = parseFloat(document.getElementById('wind').innerHTML);
let wc = document.getElementById('chill');

wc.innerHTML= windchill (temp, speed);

function windchill (temp, speed){
if (temp<=50 && speed>3){
let factor = 35.74 + 0.6215*temp - 35.75*(speed**0.16) + 0.4275*temp*(speed**0.16); 
return Math.round(factor);
}
else {
return factor = 'N/A';
}

}
   
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
