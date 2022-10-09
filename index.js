//for analog
setInterval(() => {
    date= new Date();
    hours= date.getHours();
    mins= date.getMinutes();
    secs=date.getSeconds();

    forHours=30*hours+ mins/2+ secs/20;
    forMins=6*mins+sec/10;
    forSecs=6*secs;

    hour.style.transform =`rotate(${forHours}deg)`;
    min.style.transform =`rotate(${forMins}deg)`;
    sec.style.transform =`rotate(${forSecs}deg)`;

}, 1000);

//for digital
setInterval(() => {
    
    var session = document.getElementById('session');

    if(hours >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    if(hours > 12){
        hours = hours - 12;
    }

    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = mins;
    document.getElementById('seconds').innerHTML = secs;

    
}, 1000);
 

