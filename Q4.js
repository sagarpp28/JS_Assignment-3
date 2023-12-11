let readlineSync = require('readline-sync');
let a=readlineSync.question('Enter a number ');
let sum=0;
sumOfSquares();
function sumOfSquares(){
    for(i=1;i<=a;i=i+1){
        sum=sum+i**2;
    }
    console.log("The sum of squares of numbers  =",sum);
}