function pageLoad() {
    var persona = extractRandomUser('Uk');

    var profImg = document.getElementById('profImg');
    insertPicture(persona,profimg);
    var genInfo = ['name', 'birthday', 'email', 'location', 'cell'];
    insertInfo(persona, genInfo);
    var addInfo = ['gender','registered', 'phone','nat'];
    insertInfo(persona, addInfo);

}

function insertPicture(person, idDiv){ // get the picture of the user
    var pic = document.createElement('img');
    pic.src = person.picture.medium;
    idDiv.appendChild(pic);
}

function insertInfo(persona, arrayDati){
    
    for(var i = 0; i<arrayDati.length; i++){
        var key = arrayDati[i];
       
        var content; //= persona[key];
        var p; //= document.getElementById(key);
        //p.innerHTML = key + ': ' + content ;
        // if typeof === object
        
        if (typeof persona[key] === 'object'){
        
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