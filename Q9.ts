function CheckIsPrimeNumber(primeNumber : number) : string {
    
    if(primeNumber == 1  || primeNumber == 2  || primeNumber == 3  ||primeNumber == 5  ||primeNumber == 7 ){
        return `your number ${primeNumber} is prime number.`;
    }
    else if (primeNumber % 2 != 0  && primeNumber % 3 != 0 && primeNumber % 5 != 0 && primeNumber % 7 != 0){
        return `your number ${primeNumber} is prime number.`;
    }
    else{
        return `your number ${primeNumber} is not prime number.`;
    }
}

const q9Prompt = require('prompt-sync')();
let userNumber : number = q9Prompt('Enter number to check prime number: ');

if (!isNaN(userNumber) && userNumber >= 0) {  
    let result = CheckIsPrimeNumber(userNumber);
    console.log( result );
} 
else {
    console.log('Invalid input. Please enter valid numeric value.');
}