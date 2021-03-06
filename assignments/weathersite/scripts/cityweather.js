//what city is?
var isPreston = document.getElementById("preston");
var isFish = document.getElementById("fish-haven");
var isSoda = document.getElementById("soda-springs");
var cityName = '';
var cityCode = '';
if(isPreston != null){
    cityName = 'Preston';
    cityCode = '5604473';
}
if(isFish != null){
    cityName = 'Fish Haven';
    cityCode = '5585010';
}
if(isSoda != null){
    cityName = 'Soda Springs';
    cityCode = '5607916'
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

//weather forecast
let forecastRequest = new XMLHttpRequest();
apiURLstring = 'https://api.openweathermap.org/data/2.5/forecast?id='+ cityCode + '&units=imperial&APPID=3e1293d42cb2e21f44dcaf91ba956f02';
forecastRequest.open('Get',apiURLstring, true);
forecastRequest.send();
forecastRequest.onload =  function () {
   forecastData = JSON.parse(forecastRequest.responseText);
    console.log(forecastData);
    var day = ['Sunday','Monday','Thuesday','Wednesday','Thursday','Friday','Saturday'];
    var month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var dateArray = [];
    var tempArray = [];
    var iconArray = [];
    var descArray = [];

    for( i = 0 ; i < forecastData.list.length ; i++){
        datetim = forecastData.list[i].dt_txt;
        if(datetim.includes('18:00:00')){
            temp = forecastData.list[i].main.temp;
            var temp = Math.round(temp);
            desc = forecastData.list[i].weather[0].description;
            icon =  "https://openweathermap.org/img/w/" + forecastData.list[i].weather[0].icon + ".png";
            //05114d9b05fc90300235d8704185c770
            // mio 3e1293d42cb2e21f44dcaf91ba956f02
            //date info 
            var dateF = new Date(forecastData.list[i].dt * 1000);
            var dateText = day[dateF.getDay()] + ', ' + month[dateF.getMonth()] +' '+ dateF.getDate();

            dateArray.push(dateText);
            tempArray.push(temp);
            iconArray.push(icon);
            descArray.push(desc);
        }
        continue;
    }
    //days
    document.getElementById('day0').innerHTML = dateArray[0];
    document.getElementById('day1').innerHTML = dateArray[1];
    document.getElementById('day2').innerHTML = dateArray[2];
    document.getElementById('day3').innerHTML = dateArray[3];
    document.getElementById('day4').innerHTML = dateArray[4];
    //temps
    document.getElementById('temp0').innerHTML = tempArray[0];
    document.getElementById('temp1').innerHTML = tempArray[1];
    document.getElementById('temp2').innerHTML = tempArray[2];
    document.getElementById('temp3').innerHTML = tempArray[3];
    document.getElementById('temp4').innerHTML = tempArray[4];
    //imgs -

    document.getElementById('icon0').setAttribute('src', iconArray[0]);
    document.getElementById('icon1').setAttribute('src', iconArray[1]);
    document.getElementById('icon2').setAttribute('src', iconArray[2]);
    document.getElementById('icon3').setAttribute('src', iconArray[3]);
    document.getElementById('icon4').setAttribute('src', iconArray[4]);
    //alts
    document.getElementById('icon0').setAttribute('alt', descArray[0]);
    document.getElementById('icon1').setAttribute('alt', descArray[1]);
    document.getElementById('icon2').setAttribute('alt', descArray[2]);
    document.getElementById('icon3').setAttribute('alt', descArray[3]);
    document.getElementById('icon4').setAttribute('alt', descArray[4]);
}   
    

function getDirection(windDegree) {
    var directions = ['N', 'NW', 'W', 'SW', 'S', 'SE', 'E', 'NE'];
    var d = Math.round(((windDegree %= 360) < 0 ? windDegree + 360 : windDegree) / 45) % 8;
    return directions[d];
}