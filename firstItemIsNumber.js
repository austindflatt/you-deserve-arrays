const prompt = require('prompt-sync')({ sigint: true });
const input = JSON.parse(prompt('Enter an array: '));

if (input[0] === Number(input[0])) {
    console.log(true);
} else {
    console.log(false);
}