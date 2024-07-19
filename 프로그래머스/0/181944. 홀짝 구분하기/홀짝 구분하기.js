const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const result =  !(Number(input) % 2) ?  'even' : 'odd';
    console.log(`${Number(input)} is ${result}`);
});