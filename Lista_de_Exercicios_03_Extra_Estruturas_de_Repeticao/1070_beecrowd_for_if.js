var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valorInicial = parseInt(lines.shift())

for (var i = valorInicial; i < valorInicial + 12; i++) {
    if (i % 2 == 1) {
        console.log(i)
    }
}