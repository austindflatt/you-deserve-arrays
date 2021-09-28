const prompt = require('prompt-sync')({ sigint: true });
const input = JSON.parse(prompt('Enter an array: '));

const thirdElement = input[2];

if (typeof thirdElement === 'string') {
    const secondChar = thirdElement[1];
    console.log("The third item from is: " + secondChar)
} else {
    console.log("Error!");
}