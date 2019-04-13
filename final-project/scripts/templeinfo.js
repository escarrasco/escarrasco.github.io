//what temple is?
var isSaltLake = document.getElementById("salt-lake");
var isBrigham = document.getElementById("brigham");
var isWashington = document.getElementById("washington");
var isPortland = document.getElementById("portland");
var isCochabamba = document.getElementById("cochabamba");

var templeName = '';

if(isSaltLake != null){
    templeName = 'Salt Lake Temple';
}
if(isBrigham != null){
    templeName = 'Brigham City Utah Temple';
}
if(isWashington != null){
    templeName = 'Washington D.C. Temple'
}
if(isPortland != null){
    templeName = 'Portland Oregon Temple'
}
if(isCochabamba != null){
    templeName = 'Cochabamba Bolivia Temple'
}

var section = document.querySelector('.info-grid');
var requestURL = 'scripts/temples.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var templeData = request.response;
    showData(templeData);
}

/*
var templeData = JSON.parse(temples);
showData(templeData);
*/
function showData(jsonObj) {
    var temples = jsonObj['temples'];
    console.log(temples);
    var contact = document.createElement('article');
    var ordinances = document.createElement('div');
    var sessions = document.createElement('article');
    var closure = document.createElement('article');
    var additional = document.createElement('article');
    var milestones = document.createElement('article');

    console.log(templeName);

    for (var i = 0; i < temples.length; i++) {
       // console.log('enter loop');
        if(temples[i].name == templeName){
            var address = document.createElement('h4');
            var lineadd1 = document.createElement('p');
            var lineadd2 = document.createElement('p');
            var lineadd3 = document.createElement('p');
            var telephone = document.createElement('h4');
            var tel = document.createElement('p');
            var  email = document.createElement('h4');
            var  e = document.createElement('p');
            var  servH = document.createElement('h4');
            var  servU = document.createElement('ul');

            var  ordH = document.createElement('h3');
            var  ordName = document.createElement('h4');
            var ordNote = document.createElement('i');
            var  ordSch = document.createElement('ul');


            var  sessH = document.createElement('h3');
            var  sessU = document.createElement('ul');
            var  closH = document.createElement('h3');
            var  closU = document.createElement('ul');
            var  addH = document.createElement('h3');
            var  addH4 = document.createElement('h4');
            var  addP = document.createElement('p');
            var  milH = document.createElement('h3');
            var  mildate = document.createElement('p');
            var  milevent = document.createElement('p');
           
            //temple contact information 
            address.textContent = "Address";
            lineadd1.textContent = temples[i].address1;
            lineadd2.textContent = temples[i].address2;
            lineadd3.textContent = temples[i].country;
            telephone.textContent = "Telephone";
            tel.textContent = temples[i].telephone;
            email.textContent = 'eMail';
            e.textContent = temples[i].email;
            servH.textContent = "Services";
            var servObj = temples[i].services;
            for (var j = 0; j < servObj.length; j++) {
                var listItem = document.createElement('li');
                listItem.textContent = servObj[j];
                servU.appendChild(listItem);
            }

            contact.appendChild(address);
            contact.appendChild(lineadd1);
            contact.appendChild(lineadd2);
            contact.appendChild(lineadd3);
            contact.appendChild(telephone);
            contact.appendChild(tel);
            contact.appendChild(email);
            contact.appendChild(e);
            contact.appendChild(servH);
            contact.appendChild(servU);

            //ordinances
            ordH.textContent = 'Ordinances Schedule';
            ordinances.appendChild(ordH);

            var ordObj = temples[i].ordinance;
            for (var j = 0; j < ordObj.length; j++) {
                var ordA = document.createElement('article');
                ordName.textContent = ordObj[j].name;
                ordNote.textContent = ordObj[j].note;
                
                var ordSsObj = ordObj[j].schedule;
                for (var k = 0; k < ordSsObj.length; k++) {
                    var listItem = document.createElement('li');
                    listItem.textContent = ordSsObj[k];
                    ordSch.appendChild(listItem);
                }


                ordA.appendChild(ordName);
                ordA.appendChild(ordNote);
                ordA.appendChild(ordSch);
                ordinances.appendChild(ordA);
            }
            
            


            //sessions
            sessH.textContent = "Sessions Schedule";
            var sessObj = temples[i].session;
            for (var j = 0; j < sessObj.length; j++) {
                var listItem = document.createElement('li');
                listItem.textContent = sessObj[j];
                sessU.appendChild(listItem);
            }

            sessions.appendChild(sessH);
            sessions.appendChild(sessU);

            //closures
            closH.textContent = "Temple Closures";
            var closObj = temples[i].closure;
            for (var j = 0; j < closObj.length; j++) {
                var listItem = document.createElement('li');
                listItem.textContent = closObj[j];
                closU.appendChild(listItem);
            }

            closure.appendChild(closH);
            closure.appendChild(closU);
            
            //add
            addH.textContent = 'Additional Information';
            addH4.textContent = temples[i].additional[0].title;
            addP.textContent = temples[i].additional[0].description;

            additional.appendChild(addH);
            additional.appendChild(addH4);
            additional.appendChild(addP);

            //milstone
            milH.textContent = 'Milestones';
            milestones.appendChild(milH);

            var milObj = temples[i].milestones;
            for (var j = 0; j < milObj.length; j++) {
                mildate.textContent = milObj[j].date;
                milevent.textContent = milObj[j].event;
                milestones.appendChild(mildate);
                milestones.appendChild(milevent);
            }
  
        }

    }
    section.appendChild(contact);
    section.appendChild(ordinances);
    section.appendChild(sessions);
    section.appendChild(closure);
    section.appendChild(additional);
    section.appendChild(milestones);
}