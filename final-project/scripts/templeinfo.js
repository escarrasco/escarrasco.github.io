
var section = document.querySelector('.town-grid');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var townsData = request.response;
    showTowns(townsData);
}

function showTowns(jsonObj) {
    var towns = jsonObj['towns'];
    var preston = document.createElement('article');
    var soda = document.createElement('article');
    var fish = document.createElement('article');
    for (var i = 0; i < towns.length; i++) {
        if(towns[i].name == 'Preston' || towns[i].name == 'Soda Springs' || towns[i].name == 'Fish Haven'){
            var name = document.createElement('h3');
            var motto = document.createElement('h4');
            var year = document.createElement('p');
            var population = document.createElement('p');
            var rainFall = document.createElement('p');
            var  eventLabel = document.createElement('p');
            var events = document.createElement('ul');
            var picture = document.createElement('img');
            picture.setAttribute('src', 'images/town' + i + '.jpg');
            picture.setAttribute('alt', towns[i].name + ' picture');

            name.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            year.textContent = 'Year Founded: ' + towns[i].yearFounded;
            population.textContent = 'Current Population: ' + towns[i].currentPopulation;
            rainFall.textContent = 'Average Rain Fall: ' + towns[i].averageRainfall;
            eventLabel.textContent = 'Events: ';
            
            var eventsObj = towns[i].events;
            for (var j = 0; j < eventsObj.length; j++) {
                var listItem = document.createElement('li');
                listItem.textContent = eventsObj[j];
                events.appendChild(listItem);
            }

            if(towns[i].name == 'Preston'){
                preston.appendChild(name);
                preston.appendChild(motto);
                preston.appendChild(year);
                preston.appendChild(population);
                preston.appendChild(rainFall);
                preston.appendChild(eventLabel);
                preston.appendChild(events);
                preston.appendChild(picture);  
            }
            if(towns[i].name == 'Soda Springs'){
                soda.appendChild(name);
                soda.appendChild(motto);
                soda.appendChild(year);
                soda.appendChild(population);
                soda.appendChild(rainFall);
                soda.appendChild(eventLabel);
                soda.appendChild(events);
                soda.appendChild(picture);  
            }
            if(towns[i].name == 'Fish Haven'){
                fish.appendChild(name);
                fish.appendChild(motto);
                fish.appendChild(year);
                fish.appendChild(population);
                fish.appendChild(rainFall);
                fish.appendChild(eventLabel);
                fish.appendChild(events);
                fish.appendChild(picture); 
            }  
        }

    }
    section.appendChild(preston);
    section.appendChild(soda);
    section.appendChild(fish);
}