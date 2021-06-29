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