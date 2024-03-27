/*
beecrowd | 1066
Pares, Ímpares, Positivos e Negativos
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia 5 valores Inteiros. A seguir mostre quantos valores digitados foram pares, quantos valores digitados foram ímpares, quantos valores digitados foram positivos e quantos valores digitados foram negativos.

Entrada
O arquivo de entrada contém 5 valores inteiros quaisquer.

Saída
Imprima a mensagem conforme o exemplo fornecido, uma mensagem por linha, não esquecendo o final de linha após cada uma.

Exemplo de Entrada              Exemplo de Saída
-5                              3 valor(es) par(es)
0                               2 valor(es) impar(es)
-3                              1 valor(es) positivo(s)
-4                              3 valor(es) negativo(s)
12
*/

var input = require('fs').readFileSync('stdin', 'utf8')

var lines = input.split('\n')

var n1 = parseInt(lines.shift())
var n2 = parseInt(lines.shift())
var n3 = parseInt(lines.shift())
var n4 = parseInt(lines.shift())
var n5 = parseInt(lines.shift())


var numeros = [n1, n2, n3, n4, n5]

var contadorPares = 0
for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        contadorPares++
    }
}
console.log(contadorPares + " valor(es) par(es)")

var contadorImpares = 0
for (var i = 0; i < numeros.length; i++) {
    if (Math.abs(numeros[i] % 2) == 1) {
        contadorImpares++       
    }
}
console.log(contadorImpares + " valor(es) impar(es)")

var contadorPositivos = 0 
for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0) {
        contadorPositivos++;
    }
}
console.log(contadorPositivos + " valor(es) positivo(s)")

var contadorNegativos = 0
for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] < 0) {
        contadorNegativos++;
    }
}
console.log(contadorNegativos + " valor(es) negativo(s)")