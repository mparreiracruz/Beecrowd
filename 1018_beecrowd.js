/*
beecrowd | 1018
Cédulas
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

Saída
Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias, conforme o exemplo fornecido. Não esqueça de imprimir o fim de linha após cada linha, caso contrário seu programa apresentará a mensagem: “Presentation Error”.

Exemplo de Entrada                      	Exemplo de Saída
576                                         576
                                            5 nota(s) de R$ 100,00
                                            1 nota(s) de R$ 50,00
                                            1 nota(s) de R$ 20,00
                                            0 nota(s) de R$ 10,00
                                            1 nota(s) de R$ 5,00
                                            0 nota(s) de R$ 2,00
                                            1 nota(s) de R$ 1,00


11257                                       11257
                                            112 nota(s) de R$ 100,00
                                            1 nota(s) de R$ 50,00
                                            0 nota(s) de R$ 20,00
                                            0 nota(s) de R$ 10,00
                                            1 nota(s) de R$ 5,00
                                            1 nota(s) de R$ 2,00
                                            0 nota(s) de R$ 1,00                                      


                                         503
                                            5 nota(s) de R$ 100,00
                                            0 nota(s) de R$ 50,00  
                                            0 nota(s) de R$ 20,00
                                            0 nota(s) de R$ 10,00
                                            0 nota(s) de R$ 5,00
                                            1 nota(s) de R$ 2,00
                                            1 nota(s) de R$ 1,00
*/
var input = require('fs').readFileSync('stdin', 'utf8');
var linha1 = input.split('\n');

var n = parseInt(linha1.shift());
console.log(n);

var nota100 = 100;
var nota50 = 50;
var nota20 = 20;
var nota10 = 10;
var nota5 = 5;
var nota2 = 2;
var nota1 = 1;

var decompornota100 = Math.floor(n / nota100);
resto1 = decompornota100 % nota100;
var decompornota50 = Math.floor(resto1);
var decompornota20 = Math.floor(decompornota50 / nota20);
var decompornota10 = Math.floor(decompornota20 / nota10);
var decompornota5 = Math.floor(decompornota10 / nota5);
var decompornota2 = Math.floor(decompornota5 / nota2);
var decompornota1 = Math.floor(decompornota2 / nota1);

console.log(decompornota100 + " nota(s) de R$ 100,00");
console.log(decompornota50 + " nota(s) de R$ 50,00");
console.log(decompornota10 + " nota(s) de R$ 20,00");
console.log(decompornota5 + " nota(s) de R$ 10,00");
console.log(decompornota5 + " nota(s) de R$ 5,00");
console.log(decompornota2 + " nota(s) de R$ 2,00");
console.log(decompornota1 + " nota(s) de R$ 1,00");