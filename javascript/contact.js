/* global $ */
$('#submit').click(function(){
    "use strict";
    var name = $('#name').val();
    var uname = $('#username').val();
    var tel = $('#tel').val();
    var email = $('#email').val();
    var message = $('message').text();

    var persona = {
        "name": {
            "first": name,
        },
        "login":{
            "username": uname,
        },
        "phone": tel,
        "email": email,
    };

    $.post('http://localhost:3000/results', persona)
    .done(function(){
        alert('Got your informations!');
    });

});