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

ep1.textContent = towns[6].events[0];
ep2.textContent = towns[0].events[2];
ep3.textContent = towns[2].events[2];

document.querySelector('div#event1').appendChild(ep1);
document.querySelector('div#event2').appendChild(ep2);
document.querySelector('div#event3').appendChild(ep3);
});
