function RemoveNegativeNumbers(arr: number[]): number[] {
    const positiveNumbers: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            positiveNumbers.push(arr[i]);
        }
    }
    return positiveNumbers;
}
function PrintAray(arr: number[]): number[] {
    const positiveNumbers: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            positiveNumbers.push(arr[i]);
        }
    }
    return positiveNumbers;
}

const numbersArray: number[] = [5, -3, 8, -2, 0, 7, -1, 4];
const positiveNumbersArray = RemoveNegativeNumbers(numbersArray);

console.log('Original Array:', numbersArray);
console.log('Array without Negative Numbers:', positiveNumbersArray);