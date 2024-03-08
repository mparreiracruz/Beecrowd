/*
Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula, segundo a fórmula:

Distancia =

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
-12.2 7.0                            16.4575
*/
var input = require('fs').readFileSync('stdin', 'utf8');//configuracao de entrada 

var linhaPrincipal = input.split('\n');//configuracao de saída
var linha1 = linhaPrincipal.shift().split(" "); //configuracao de saída
var linha2 = linhaPrincipal.shift().split(" ");//configuracao de saída

