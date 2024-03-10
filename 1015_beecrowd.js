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
var input = require('fs').readFileSync('stdin', 'utf8');//configuracao de entrada 

var linhaPrincipal = input.split('\n');//configuracao de saída
var linha1 = linhaPrincipal.shift().split(" "); //configuracao de saída
var linha2 = linhaPrincipal.shift().split(" ");//configuracao de saída

var x1 = parseFloat(linha1.shift());//Entrada
console.log("Digite o 1º valor: " + x1);

var y1 = parseFloat(linha1.shift());//Entrada
console.log("Digite o 2º valor: " + y1);

var x2 = parseFloat(linha2.shift());//Entrada
console.log("Digite o 3º valor: " + x2);

var y2 = parseFloat(linha2.shift());//Entrada
console.log("Digite o 4º valor: " + y2);

var distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
//Processamento

console.log(distancia.toFixed(4));//saída
