/*
beecrowd | 1007
Diferença
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).

Entrada
O arquivo de entrada contém 4 valores inteiros.

Saída
Imprima a mensagem DIFERENCA com todas as letras maiúsculas, conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade. 
*/

var input = require('fs').readFileSync('stdin', 'utf8');//configuracao
var lines = input.split('\n');//configuracao

var A = parseInt(lines.shift());//Entrada
var B = parseInt(lines.shift());//Entrada
var C = parseInt(lines.shift());//Entrada
var D = parseInt(lines.shift());//Entrada

var DIFERENCA = (A * B - C * D);//Processamento

console.log("DIFERENCA = " + DIFERENCA);//Saída