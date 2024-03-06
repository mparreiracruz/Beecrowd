/**
Produto Simples
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1

Leia dois valores inteiros. A seguir, calcule o produto entre estes dois valores e atribua esta operação à variável PROD. A seguir mostre a variável PROD com mensagem correspondente.   

Entrada
O arquivo de entrada contém 2 valores inteiros.

Saída
Imprima a mensagem "PROD" e a variável PROD conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade. Não esqueça de imprimir o fim de linha após o produto, caso contrário seu programa apresentará a mensagem: “Presentation Error”.
 */

var input = require('fs').readFileSync('stdin', 'utf8');//configuracao
var lines = input.split('\n');//configuracao

var A = parseInt(lines.shift());//Entrada
var B = parseInt(lines.shift());//Entrada

var PROD = A * B;//Processamento

console.log('PROD = ' + PROD);//Saída