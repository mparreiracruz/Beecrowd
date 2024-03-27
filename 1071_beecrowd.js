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
/*var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var X = parseInt(lines.shift())
var Y = parseInt(lines.shift())

var somaImpares = 0

for (var i = X; i < Y; i++) {
    if ((Math.abs(i % 2) == 1)) { 
        //somaImpares += i
        somaImpares = somaImpares + i
    }
}
console.log(somaImpares)
*/

var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var X = parseInt(lines.shift())
var Y = parseInt(lines.shift())

var numeros = [X, Y];

var contadorImpares = 0
var somaImpares = 0
for (var i = 0; i < numeros.length; i++) {
    if (Math.abs(numeros[i] % 2) == 1) {
        contadorImpares++
        somaImpares += i
        somaImpares = somaImpares + i       
    }
}
console.log(somaImpares)