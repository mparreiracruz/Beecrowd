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

Exemplos de Entrada	            Exemplos de Saída
5                               DIFERENCA = -26
6
7
8


0                               DIFERENCA = -56
0
7
8


5                               DIFERENCA = 86
6
-7
8
*/
var input = require('fs').readFileSync('stdin', 'utf8');//configuracao de entrada
var lines = input.split('\n');//configuracao de saída 

var A = parseInt(lines.shift());//Entrada
console.log("Digite o 1º valor do tipo inteiro: " + A);//Entrada com pergunta ao usuário

var B = parseInt(lines.shift());//Entrada
console.log("Digite o 2º valor do tipo inteiro: " + B);//Entrada com pergunta ao usuário

var C = parseInt(lines.shift());//Entrada
console.log("Digite o 3º valor do tipo inteiro: " + C);//Entrada com pergunta ao usuário

var D = parseInt(lines.shift());//Entrada
console.log("Digite o 4º valor do tipo inteiro: " + D);//Entrada com pergunta ao usuário

var DIFERENCA = (A * B - C * D);//Processamento

console.log("DIFERENCA = " + DIFERENCA);//Saída