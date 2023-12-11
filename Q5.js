var readlineSync = require('readline-sync');
let rows=readlineSync.question('Number of raws ');
function printPattern(){
    for(i=1;i<=rows;i++){
        console.log("*".repeat(i));
    }
}
printPattern();