//what city is?
var isSaltLake = document.getElementById("salt-lake");
var isBrigham = document.getElementById("brigham");
var isWashington = document.getElementById("washington");
var isPortland = document.getElementById("portland");
var isCochabamba = document.getElementById("cochabamba");

var cityCode = '';

if(isSaltLake != null){
    cityCode = '5780993';
}
if(isBrigham != null){
    cityCode = '5771960';
}
if(isWashington != null){
    cityCode = '4369976'
    //south kensington  "lon": -77.079979, "lat": 39.019001
}
if(isPortland != null){
    cityCode = '5746545'
    //portland oregon    "lon": -122.676208,      "lat": 45.523449
}
if(isCochabamba != null){
    cityCode = '3919968'
}

//weather summary
let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=' + cityCode + '&units=imperial&APPID=3e1293d42cb2e21f44dcaf91ba956f02';
weatherRequest.open('Get',apiURLstring, true);
weatherRequest.send();
weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    var highTemp = weatherData.main.temp_max;
    var windDir =  weatherData.wind.deg;
    
    document.getElementById('condition').innerHTML = weatherData.weather[0].description;
    
    document.getElementById('temperature').innerHTML = Math.round(highTemp);
    document.getElementById('humidity').innerHTML = weatherData.main.humidity;
    document.getElementById('speed').innerHTML = weatherData.wind.speed;
    document.getElementById('wind').innerHTML = Math.round(windDir) + '&deg;' + getDirection(windDir);
    
}

function getDirection(windDegree) {
    var directions = ['N', 'NW', 'W', 'SW', 'S', 'SE', 'E', 'NE'];
    var d = Math.round(((windDegree %= 360) < 0 ? windDegree + 360 : windDegree) / 45) % 8;
    return directions[d];
}