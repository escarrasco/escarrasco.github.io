        var section = document.querySelector('.town-events');
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
                
            for (var i = 0; i < towns.length; i++) {
                if(towns[i].name == 'Preston'){
                    var myArticle = document.createElement('article');
                    var name = document.createElement('h3');
                    var motto = document.createElement('h4');
                    var  eventLabel = document.createElement('p');
                    var events = document.createElement('ul');
                    var picture = document.createElement('img');
                    picture.setAttribute('src', 'images/town' + i + '.jpeg');
                    picture.setAttribute('alt', 'town picture');

                    name.textContent = towns[i].name;
                    motto.textContent = towns[i].motto;
                    eventLabel.textContent = 'Events: ';
                    
                    var eventsObj = towns[i].events;
                    for (var j = 0; j < eventsObj.length; j++) {
                        var listItem = document.createElement('li');
                        listItem.textContent = eventsObj[j];
                        events.appendChild(listItem);
                    }

                    myArticle.appendChild(picture);
                    myArticle.appendChild(name);
                    myArticle.appendChild(motto);
                    myArticle.appendChild(eventLabel);
                    myArticle.appendChild(events);
                   
                    section.appendChild(myArticle);
                }
                
            }
        }