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
            var isPreston = document.getElementById("preston");
            var isFish = document.getElementById("fish-haven");
            var isSoda = document.getElementById("soda-springs");
            var cityName = '';
            if(isPreston != null){
                cityName = 'Preston';
            }
            if(isFish != null){
                cityName = 'Fish Haven';
            }
            if(isSoda != null){
                cityName = 'Soda Springs';
            }

            for (var i = 0; i < towns.length; i++) {
                if(towns[i].name == cityName){
                    var myArticle = document.createElement('article');
                    var eventLabel = document.createElement('h3');
                    var events = document.createElement('ul');
                    
                    eventLabel.textContent = 'Upcoming Events in'+ towns[i].name +': ';
                    
                    var eventsObj = towns[i].events;
                    for (var j = 0; j < eventsObj.length; j++) {
                        var listItem = document.createElement('li');
                        listItem.textContent = eventsObj[j];
                        events.appendChild(listItem);
                    }

                    myArticle.appendChild(eventLabel);
                    myArticle.appendChild(events);
                   
                    section.appendChild(myArticle);
                }
                
            }
        }