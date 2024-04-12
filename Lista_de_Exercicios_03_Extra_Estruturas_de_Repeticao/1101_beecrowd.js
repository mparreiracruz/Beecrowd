const internal = require('stream')
var input = require('fs').readFileSync('stdin', 'utf8')

var lines = input.split("\n")

  const length = lines.length

  for(let x = 0; x < length; x++){
    let line = lines.shift().split(' ')
    let M = parseInt(line[0])
    let N = parseInt(line[1])
    if(N > M) {
      [M, N] = [N, M];
    }

var intervalo = { inicio: M, fim: N }

var resultadoSequencia = ""
var somaSequencia = 0

for (var i = intervalo.inicio; i <= intervalo.fim; i++) {
    resultadoSequencia += i + " "
    somaSequencia += i
    }
}
console.log(resultadoSequencia +"Sum=" + somaSequencia)