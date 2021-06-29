const cityid = "5604473";
const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=8f806e2b6239d7e309c5ca0798079e25&units=imperial"

fetch(apiURL)
.then((response)=>response.json())
.then((jsObject)=>{ 
    document.getElementById('current').textContent = jsObject.main.temp.toFixed(1);
    document.getElementById('condition').textContent = jsObject.weather[0].description;
    document.getElementById('high').textContent = jsObject.main.temp_max;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('wind').textContent = jsObject.wind.speed;

});

const forecastURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=8f806e2b6239d7e309c5ca0798079e25&units=imperial"
fetch(forecastURL)
.then((response)=>response.json())
.then((jsObject)=>{ console.log(jsObject);

   
    const fivedaysForecast = jsObject.list.filter( forecast => forecast.dt_txt.includes('18:00:00'));
    const weekday = ['sun','mon','tue','wed','thu','fri','sat'];

    console.log(fivedaysForecast);

    fivedaysForecast.forEach( element => {
        let i= 0;
        let d = new Date(element.dt_txt);
        let name = d.getDay();
        let displayDay = weekday[name]; 
       
    const div = document.createElement('div');
    div.className = 'forecast';
    const days = document.createElement('p');
        days.setAttribute = ('id','dayname');
        days.textContent = displayDay;
        console.log(displayDay);

    const temp = document.createElement('p');
        temp.className = 'hightemp';
        temp.textContent = `${element.main.temp}°`;  
         
        console.log(temp);
        const imagesrc = 'https://openweathermap.org/img/w/'+element.weather[0].icon + '.png'; 
        const desc = element.weather[0].description; 
        let icon = document.createElement('img');
        icon.setAttribute('src', imagesrc);  // focus on the setAttribute() method
        icon.setAttribute('alt', desc);
        div.append(days, icon, temp);
        document.querySelector('div.dailyweather').appendChild(div); 

        i++
        });   

        });

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
