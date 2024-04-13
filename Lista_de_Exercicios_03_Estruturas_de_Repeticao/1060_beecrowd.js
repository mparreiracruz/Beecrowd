/*
beecrowd | 1060
Números Positivos
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Faça um programa que leia 6 valores. Estes valores serão somente negativos ou positivos (desconsidere os valores nulos). A seguir, mostre a quantidade de valores positivos digitados.

Entrada
Seis valores, negativos e/ou positivos.

Saída
Imprima uma mensagem dizendo quantos valores positivos foram lidos.

Exemplo de Entrada	                Exemplo de Saída
7                                   4 valores positivos
-5
6
-3.4
4.6
12
*/
var input = require('fs').readFileSync('stdin', 'utf8')

var lines = input.split('\n')

var n1 = parseFloat(lines.shift())
var n2 = parseFloat(lines.shift())
var n3 = parseFloat(lines.shift())
var n4 = parseFloat(lines.shift())
var n5 = parseFloat(lines.shift())
var n6 = parseFloat(lines.shift())

var numeros = [n1, n2, n3, n4, n5, n6]

var contador = 0

for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0) {
        contador++;
    }
}
console.log(contador + " valores positivos")
