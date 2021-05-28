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
   
