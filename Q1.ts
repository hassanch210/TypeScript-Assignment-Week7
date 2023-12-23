var myArray : string[] = new Array(5);
const q1Prompt = require('prompt-sync')();
let newchangeValue : string = "";
let changeIndex : number = 0;
let ask : string = "";
function UpdateArrayFun(newchangeValue : string, changeIndex : number) {
    if( changeIndex == 0 ){
        myArray[changeIndex] = newchangeValue;
    }
    else{
        myArray[changeIndex-1] = newchangeValue;
    }    
}
function InsertArrayFun() {
    for(let i = 0; i < myArray.length; i++){
        myArray[i] = q1Prompt(`Enter string values in array on position ${i+1}: `);
    }
} 
function ShowArrayFun() {
    for(let i = 0; i < myArray.length; i++){
         console.log(`value of array on position ${i+1} is ${myArray[i]}.`);
    }
}
InsertArrayFun();
ShowArrayFun();
ask = q1Prompt("do you want to update the array! enter 1 for yes or any other key for exit: ");

if(ask == "1"){    
    newchangeValue = q1Prompt("please enter the new value you want change: ");
    changeIndex = q1Prompt("on which index do you want changes in array: ");
    UpdateArrayFun(newchangeValue,changeIndex);
    ShowArrayFun();
}