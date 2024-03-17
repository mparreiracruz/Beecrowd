/*
beecrowd | 1015
Distância Entre Dois Pontos
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1

Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula, segundo a fórmula:

distancia = (math.pow(x2, 2) - math.pow(x1, 2)) + (math.pow(y2, 2) + math.pow(y1, 2))

Entrada
O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de ponto flutuante: x1 y1 e a segunda linha contém dois valores de ponto flutuante x2 y2.

Saída
Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal.

Exemplo de Entrada                  Exemplo de Saída
1.0 7.0                             4.4721
5.0 9.0


-2.5 0.4                            16.1484
12.1 7.3


2.5 -0.4
-12.2 7.0                           16.4575
*/
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n");

var line1 = lines.shift();
var line2 = lines.shift();

var entrada01 = line1.split(" ");
var entrada02 = line2.split(" ");

var x1 = parseFloat(entrada01.shift());//Entrada 01
var y1 = parseFloat(entrada01.shift());//Entrada 02

var x2 = parseFloat(entrada02.shift());//Entrada 03
var y2 = parseFloat(entrada02.shift());//Entrada 04

var distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
//Processamento

console.log(distancia.toFixed(4));//saída