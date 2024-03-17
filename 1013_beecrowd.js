/*
beecrowd | 1013
O Maior
Adaptado por Neilor Tonin, beecrowd  Brasil

Timelimit: 1
Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:

(a+b+abs(a-b))/2 => A função "abs(a-b)" está calculando a diferença entre a e b e retornando o valor absoluto dessa diferença. Isso garante que não importa qual número é maior ou menor entre a e b, a diferença será sempre positiva. Isso é útil quando você quer calcular a distância entre dois valores sem se preocupar com sua direção (+ ou -).

Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.

Entrada
O arquivo de entrada contém três valores inteiros.

Saída
Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".

Exemplos de Entrada             Exemplos de Saída
7 14 106                        106 eh o maior


217 14 6                        217 eh o maior
*/
var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n');
var line1 = lines.shift();
var entrada01 = line1.split(" ");

var A = parseInt(entrada01.shift());//Entrada 01
var B = parseInt(entrada01.shift());//Entrada 02
var C = parseInt(entrada01.shift());//Entrada 03

MaiorAB = (A + B + Math.abs(A - B)) / 2;//Processamento 01
MaiorABC = (MaiorAB + C + Math.abs(MaiorAB - C)) / 2;//Processamento 02

console.log(MaiorABC + " eh o maior");//Saída