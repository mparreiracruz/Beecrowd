var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var N = parseInt(lines.shift())
var contador = 0

for (var i = 0; i <= N; i++) {
    if (i % 2 === 0) {
        contador++
    }
}

console.log(contador + " valores pares")