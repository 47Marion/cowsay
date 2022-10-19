const userInfo = require('./information');

let cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Je suis de ${userInfo.city} Je m'appelle ${userInfo.name}`,
    e : "oO",
    T : "U "
}));