const q8Prompt = require('prompt-sync')();

function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
}

function convertTemperatures(): number[] {
    const temperatInF: number[] = [];
    const numTemperatures = parseInt(q8Prompt('Enter the number of temperatures: '));
    

    for (let i = 0; i < numTemperatures; i++) {
        const celsius = parseFloat(q8Prompt(`Enter temperature ${i + 1} in Celsius: `));
        temperatInC.push(celsius);
        const fahrenheit = celsiusToFahrenheit(celsius);
        temperatInF.push(fahrenheit);
    }

    return temperatInF;
}

const temperatInC: number[] = [];
const convertedTemperatures = convertTemperatures();

console.log('Celsius Temperatures:', temperatInC.map(temp => temp.toFixed(2) + '°C'));
console.log('Fahrenheit Temperatures:', convertedTemperatures.map(temp => temp.toFixed(2) + '°F'));
