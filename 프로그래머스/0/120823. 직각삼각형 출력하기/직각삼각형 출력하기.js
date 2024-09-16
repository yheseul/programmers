const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input;

rl.on('line', function (line) {
    input = Number(line);
    rl.close();
}).on('close', function () {
    for (let i = 1; i <= input; i++) {
      console.log("*".repeat(i))
    }
});