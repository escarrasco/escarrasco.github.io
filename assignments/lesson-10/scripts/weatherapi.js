let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=3e1293d42cb2e21f44dcaf91ba956f02';
weatherRequest.open('Get',apiURLstring, true);
weatherRequest.send();
weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequ    est.responseText);
    console.log(weatherData);
    document.getElementById('cc-temp').innerHTML = weatherData.main.temp;
    
    let desc = weatherData.weather[0].description;
    let icon = "https://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
    document.getElementById('cc-img').setAttribute('src', icon);
    document.getElementById('cc-img').setAttribute('alt', desc);
}