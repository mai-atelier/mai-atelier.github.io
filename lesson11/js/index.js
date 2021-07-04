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

    let item = document.createElement('div');
    let townURL = document.createElement('a');
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

   name.append(h2,p);
   statics.append(p1,p2,p3);
   div.append(name, statics);
   card.appendChild(div);
   townURL.appendChild(card);
   item.appendChild(townURL);
   document.querySelector('div.plate').appendChild(item);
   h2.className = 'left';
   p.className = 'left';
   card.className = 'card';
   statics.className = 'statics';
   div.className = 'town';
   item.className = "item";
            
            if (i==6){
                let preston = "preston.html"
                townURL.setAttribute('href', preston);
                let pic1 = document.querySelector('.town1');
                card.insertBefore(pic1, div);
            }
    
            else if (i==2){
                let fishhaven = "fishhaven.html"
                townURL.setAttribute('href', fishhaven);
                let pic2 = document.querySelector('.town2');
                card. insertBefore(pic2, div);
            }

            else if (i==0){
                let sodasprings = "sodasprings.html"
                townURL.setAttribute('href', sodasprings);
                let pic3 = document.querySelector('.town3');
                card. insertBefore(pic3, div);

            }

    }

}

let ep1 = document.createElement('p');
let ep2 = document.createElement('p');
let ep3 = document.createElement('p');

ep1.className = 'center';
ep2.className = 'center';
ep3.className = 'center';

ep1.textContent = towns[6].events[1];
ep2.textContent = towns[0].events[2];
ep3.textContent = towns[2].events[2];

document.querySelector('div#event1').appendChild(ep1);
document.querySelector('div#event2').appendChild(ep2);
document.querySelector('div#event3').appendChild(ep3);
});

/* weahter story */
const prestonid = "5604473";
const prestonURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=8f806e2b6239d7e309c5ca0798079e25&units=imperial"

fetch(prestonURL)
.then((response)=>response.json())
.then((jsObject)=>{ 
    document.getElementById('current-p').textContent = jsObject.main.temp.toFixed(1);
    document.getElementById('condition-p').textContent = jsObject.weather[0].description;

        let imagesrc = 'https://openweathermap.org/img/wn/'+jsObject.weather[0].icon + '.png'; 
        let desc = jsObject.weather[0].description; 
        let icon = document.createElement('img');
        icon.setAttribute('src', imagesrc);  // focus on the setAttribute() method
        icon.setAttribute('alt', desc);
        document.getElementById('wi-p').appendChild(icon); 
    });

const sodaspringsid = "5607916"
const sodaspringsURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=8f806e2b6239d7e309c5ca0798079e25&units=imperial"

fetch(sodaspringsURL)
.then((response)=>response.json())
.then((jsObject)=>{ 
    document.getElementById('current-s').textContent = jsObject.main.temp.toFixed(1);
    document.getElementById('condition-s').textContent = jsObject.weather[0].description;

        let imagesrc = 'https://openweathermap.org/img/wn/'+jsObject.weather[0].icon + '.png'; 
        let desc = jsObject.weather[0].description; 
        let icon = document.createElement('img');
        icon.setAttribute('src', imagesrc);  // focus on the setAttribute() method
        icon.setAttribute('alt', desc);
        document.getElementById('wi-s').appendChild(icon); 
});

const fishhavenid = "5585010"
const fishhavenURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=8f806e2b6239d7e309c5ca0798079e25&units=imperial"

fetch(fishhavenURL)
.then((response)=>response.json())
.then((jsObject)=>{ 
    document.getElementById('current-f').textContent = jsObject.main.temp.toFixed(1);
    document.getElementById('condition-f').textContent = jsObject.weather[0].description;

        let imagesrc = 'https://openweathermap.org/img/wn/'+jsObject.weather[0].icon + '.png'; 
        let desc = jsObject.weather[0].description; 
        let icon = document.createElement('img');
        icon.setAttribute('src', imagesrc);  // focus on the setAttribute() method
        icon.setAttribute('alt', desc);
        document.getElementById('wi-f').appendChild(icon); 
});