/*
beecrowd | 2717
Tempo do Duende
Por Cristhian Bonilha, UTFPR BR Brazil
Timelimit: 1
https://judge.beecrowd.com/pt/problems/view/2717
*/

function processInput(input) {
    var lines = input.split('\n');
    var N = parseInt(lines.shift());
    var line = lines.shift();
    var tst = line.split(' ');
    var B1 = parseInt(tst.shift());
    var B2 = parseInt(tst.shift());
    return { N, B1, B2 };
}

function decideTask(N, B1, B2) {
    if ((B1 + B2) > N) {
        return "Deixa para amanha!";
    } else {
        return "Farei hoje!";
    }
}

var input = require('fs').readFileSync('stdin2717', 'utf8');
var { N, B1, B2 } = processInput(input);
console.log(decideTask(N, B1, B2));
