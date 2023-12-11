var readlineSync = require('readline-sync');
let number=readlineSync.question('Enter a number ');
printEvenNumbers(number);
 function printEvenNumbers(number){
    for(i=2;i<=number;i++){
        if(i%2===0){
            console.log(i);
        }
    }
}
