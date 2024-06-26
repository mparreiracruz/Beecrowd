/*
beecrowd | 1079
Médias Ponderadas
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia 1 valor inteiro N, que representa o número de casos de teste que vem a seguir. Cada caso de teste consiste de 3 valores reais, cada um deles com uma casa decimal. Apresente a média ponderada para cada um destes conjuntos de 3 valores, sendo que o primeiro valor tem peso 2, o segundo valor tem peso 3 e o terceiro valor tem peso 5.

Entrada
O arquivo de entrada contém um valor inteiro N na primeira linha. Cada N linha a seguir contém um caso de teste com três valores com uma casa decimal cada valor.

Saída
Para cada caso de teste, imprima a média ponderada dos 3 valores, conforme exemplo abaixo.

Exemplo de Entrada              Exemplo de saída                
3                               5.7
6.5 4.3 6.2                     6.3
5.1 4.2 8.1                     9.3    
8.0 9.0 10.0                        
*/
var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split("\n")

var N = parseInt(lines.shift())
  
const aPeso = 2
const bPeso = 3
const cPeso = 5

for(i = 0; i < N; i++){
    var [a, b, c] =lines[i].split(" ")    
    var media = (a * aPeso + b * bPeso + c * cPeso) / 10
    console.log(media.toFixed(1))
}