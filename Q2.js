var readlineSync = require('readline-sync');
let number=readlineSync.question('Enter the last number  ');
printNumber(number);
 function printNumber(number){
    for(i=1;i<=number;i++){
      console.log(i);
    }
}
