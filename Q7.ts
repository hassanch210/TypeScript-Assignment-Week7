function calculateSum(numbersArray: number[]): number {
    let sum = 0;

    for (let i = 0; i < numbersArray.length; i++) {
        sum += numbersArray[i];
    }

    return sum;
}
function InsertMyArrayFun() {
    for(let i = 0; i < myArray1.length; i++){
        myArray1[i]  = parseInt(q7Prompt(`Enter string values in array on position ${i+1}: `));
    }
} 

const q7Prompt = require('prompt-sync')();
var myArray1 : number[] = new Array(5);

InsertMyArrayFun();
const resultSum = calculateSum(myArray1);

console.log('Numbers Array:', myArray1);
console.log('Sum of Numbers:', resultSum);