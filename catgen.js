function catgen() {

    var i =document.createElement('img');

    var div=document.getElementById('flex-box');

    var timestamp = new Date().getTime();

    i.src ="http://thecatapi.com/api/images/get?formet=src&type=gif&size=small" + timestamp;

    div.appendChild(i);
}

function doggen() {
    
    var i =document.createElement('img');

    var div=document.getElementById('flex-box');

    var timestamp = new Date().getTime();

    i.src ="http://thedogapi.com/api/images/get?formet=src&type=gif&size=small" + timestamp;

    div.appendChild(i);
}