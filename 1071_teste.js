var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var X = parseInt(lines.shift());
var Y = parseInt(lines.shift());

var numeros = [X, Y]

var contadorImpar = 0
var somaImpares = 0

for (var valor of numeros) {
    if (numeros % 2 != 0) {
        contadorImpar++;
        somaImpares += valor
    }
}

console.log(somaImpares)