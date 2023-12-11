var readlineSync = require("readline-sync");
let name = readlineSync.question("Type your name ");
let message = greeting(name);
function greeting(){
    return 'Hai '+name;
}
console.log(message);