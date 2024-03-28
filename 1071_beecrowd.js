/*
beecrowd | 1071
Soma de Impares Consecutivos I
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia 2 valores inteiros X e Y. A seguir, calcule e mostre a soma dos números impares entre eles.

Entrada
O arquivo de entrada contém dois valores inteiros.

Saída
O programa deve imprimir um valor inteiro. Este valor é a soma dos valores ímpares que estão entre os valores fornecidos na entrada que deverá caber em um inteiro.

Exemplo de Entrada          Exemplo de saída    
6                           5
-5


15                          13
12


12                          0
12
*/
var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var X = parseInt(lines.shift())
var Y = parseInt(lines.shift())

var numeros = [X, Y]

var contadorImpar = 0
var somaImpares = 0

for (let i = 0 ; i < numeros.length ; i++) {
    if(numeros % 2 != 0) {
        contadorImpar = contadorImpar + 1
        somaImpares += numeros[i]
    } 
}
console.log(somaImpares)