var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valorInicial = parseInt(lines.shift())
var contador = 0
var numeroAtual = valorInicial

while (contador < 6) {
    if (numeroAtual % 2 == 1) {
        console.log(numeroAtual)
        contador++
    }
    numeroAtual++
}