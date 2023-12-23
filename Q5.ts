function CalculateFactorial(factNumber : number) : number {
    let factirialNumber : number = 1;
    for (let i = 1; i <= factNumber; i ++) {       
        factirialNumber = factirialNumber * i;
    }
    return factirialNumber;
}

const q5Prompt = require('prompt-sync')();
let numberFact : number = q5Prompt('Enter number to find factorial: ');

if (!isNaN(numberFact) && numberFact >= 0) {  
    let result = CalculateFactorial(numberFact);
    console.log(`Factorial of ${numberFact} is ${result} .`)
} 
else {
    console.log('Invalid input. Please enter valid numeric value.');
}