var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var X = parseInt(lines.shift())
var Y = parseInt(lines.shift())

//var somaImpares = 0 
for (var i = X + 1; i < Y; i++) {
    if (Math.abs(i % 2) == 1) {
    var somaImpares = i + i
    console.log(somaImpares)
}
}
//Leia 2 valores inteiros X e Y. A seguir, calcule e mostre a soma dos números //impares entre eles.