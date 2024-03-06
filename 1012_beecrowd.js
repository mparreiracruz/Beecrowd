/*
beecrowd | 1012
Área
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.
Entrada
O arquivo de entrada contém três valores com um dígito após o ponto decimal.

Saída
O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, sempre com mensagem correspondente e um espaço entre os dois pontos e o valor. O valor calculado deve ser apresentado com 3 dígitos após o ponto decimal.

Exemplos de Entrada	Exemplos de Saída
3.0 4.0 5.2

TRIANGULO: 7.800
CIRCULO: 84.949
TRAPEZIO: 18.200
QUADRADO: 16.000
RETANGULO: 12.000

12.7 10.4 15.2

TRIANGULO: 96.520
CIRCULO: 725.833
TRAPEZIO: 175.560
QUADRADO: 108.160
RETANGULO: 132.080

Fórmula da área do triângulo retângulo: https://mundoeducacao.uol.com.br/matematica/area-triangulo-2.htm#:~:text=A%20%C3%A1rea%20do%20tri%C3%A2ngulo%20ret%C3%A2ngulo,do%20produto%20entre%20os%20catetos.

Fórmula da área do círculo: https://brasilescola.uol.com.br/matematica/area-circulo.htm

Fórmula da área do trapézio: https://brasilescola.uol.com.br/matematica/area-trapezio.htm

Fórmula da área do quadrado: https://brasilescola.uol.com.br/matematica/area-do-quadrado.htm#:~:text=A%20%C3%A1rea%20do%20quadrado%2C%20um,elevando%20seu%20lado%20ao%20quadrado.

Fórmula da área do retângulo: https://mundoeducacao.uol.com.br/matematica/area-retangulo.htm
*/
var input = require('fs').readFileSync('stdin', 'utf8')//configuracao
var linhaPrincipal = input.split('\n');//configuracao
var lines1 = linhaPrincipal.shift().split(" ")//configuracao


var A = parseFloat(lines1.shift());//Entrada
var B = parseFloat(lines1.shift());//Entrada
var C = parseFloat(lines1.shift());//Entrada
var pi = 3.14159;

var areaTriangulo = (A * C) / 2;//Processamento
var areaCirculo = (C * C) * pi;//Processamento
var areaTrapezio = ((A + B) * C) / 2;//Processamento
var areaQuadrado = B * B;//Processamento
var areaRetangulo = A * B;//Processamento

console.log("TRIANGULO: " + areaTriangulo.toFixed(3));//Saída
console.log("CIRCULO: " + areaCirculo.toFixed(3));//Saída
console.log("TRAPEZIO: " + areaTrapezio.toFixed(3));//Saída
console.log("QUADRADO: " + areaQuadrado.toFixed(3));//Saída
console.log("RETANGULO: " + areaRetangulo.toFixed(3));//Saída