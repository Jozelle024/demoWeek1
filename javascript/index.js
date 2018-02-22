/* exported pageLoad */
/* global extractRandomUser */
/* global $ */
function pageLoad() {
    "use strict";
    //var persona = extractRandomUser('Uk');

    $.getJSON('https://randomuser.me/api/', function (data) { // to get json from th website random user
        var persona = data.results[0];
        insertPicture(persona, 'profimg');
        var genInfo = ['name', 'dob', 'email', 'location', 'cell'];
        insertInfo(persona, genInfo);
        var addInfo = ['gender', 'registered', 'phone', 'nat'];
        insertInfo(persona, addInfo);
        var header = document.getElementById('headName');
        var namePerson = persona.name.first + ' ' + persona.name.last;
        header.innerHTML = namePerson;

    });
}

function insertPicture(person, idDiv) { // get the picture of the user
    "use strict";
    var pic = document.createElement('img');
    pic.src = person.picture.large;
    var div = document.getElementById(idDiv);
    div.appendChild(pic);
}

function insertInfo(persona, arrayDati) {
    "use strict";

    for (var i = 0; i < arrayDati.length; i++) {
        var key = arrayDati[i];

        var content; //= persona[key];
        var p; //= document.getElementById(key);
        //p.innerHTML = key + ': ' + content ;
        // if typeof === object

        if (typeof persona[key] === 'object') {

            content = Object.values(persona[key]);
            var contentString = content.toString(); //to string the array content
            p = document.getElementById(key);
            p.innerHTML = key + ': ' + contentString.replace(/,/g, ' ');

        } else {
            content = persona[key];
            p = document.getElementById(key);
            p.innerHTML = key + ': ' + content;
        }

    }
}

/* function insertInfo(idParent, content){
    var id = document.getElementById(idParent);
    var p = document.createElement('p');
    p.innerText = content;
    id.appendChild(p);

    var namePerson = Object.values(person.name);//person.name.first + ' ' + person.name.last;
    var address = Object.values(person.location);
    var email = person.email;
    var phone = person.phone;
    var cell = person.cell;
    idParagraph.innerHTML = 
        "Name: " + namePerson + 
        "</br> Address: " + address + 
        "</br> Email: " + email + 
        "</br> Cellphone number: " + cell;

    } */