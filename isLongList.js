const prompt = require('prompt-sync')({ sigint: true });
const input = JSON.parse(prompt('Enter an array: '));

if (input.length >= 10) {
    console.log(true);
} else {
    console.log(false);
}