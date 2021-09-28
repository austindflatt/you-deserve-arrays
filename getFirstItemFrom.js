const prompt = require('prompt-sync')({ sigint: true });
const input = JSON.parse(prompt('Enter an array: '));

console.log(input);
console.log(input[0]);