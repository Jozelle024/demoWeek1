var Name = {
    title: 'Ms.',
    first: 'Courtney',
    last: 'Morris'
}

var Location = {
    street: 'First street 6434',
    city: 'London',
    state: 'United Kingdom',
    postcode: 461234
}

var Login = {
    username: 'courtney',
    password: '123456',
    salt: 'gaegaegadvaasf',
    md5: 6342234,
    sha1: 'bvsbwr4345653',
    sha256: 'sdgsntdhergwefa34'
}

var Id = {
    name: 'mcm',
    value: '34'
}
var Picture = {
    large: "https://randomuser.me/api/portraits/woman/2.jpg",
    medium: "https://randomuser.me/api/portraits/women/2.jpg",
    thumbnail: "https://randomuser.me/api/portraits/women/2.jpg"
}
var Persona = {
    gender: 'female',
    name: Name,
    location: Location,
    email: 'courneymorris17@gmail.com',
    login: Login,
    birthday: '1995-03-12 07:29:45',
    registered: '2005-03-12 07:29:45',
    phone: '+39 02 4882705',
    cell: '+39 331 4885634',
    id: Id,
    picture: Picture,
    nat: 'Uk',
    setNation: function(nazione){
        this.nat= nazione;
    },
}

var getRandomUser = function (nazione){
    var tempP= Persona;
    tempP.setNation(nazione);
    //tempP.nat = nazione;
    return tempP;
}
console.log(getRandomUser('uk').nat);

function extractRandomUser(nazione) {
    var tempP = Persona;
    tempP.setNation(nazione);
    //tempP.nat = nazione;
    return tempP;
}
