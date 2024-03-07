var input = require('fs').readFileSync('stdin', 'utf8')//configuracao
var lines = input.split('\n');//configuracao

var A = parseInt(lines.shift());//Entrada
var B = parseInt(lines.shift());//Entrada

var X = A + B;//Processamento

console.log('X = ' + X);//Saída