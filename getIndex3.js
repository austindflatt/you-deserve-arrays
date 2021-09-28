const prompt = require('prompt-sync')({ sigint: true });
const input = JSON.parse(prompt('Enter an array: '));

if (input >= 4) {
    console.log(input[3]);
} else {
    console.log(input[2]);
}