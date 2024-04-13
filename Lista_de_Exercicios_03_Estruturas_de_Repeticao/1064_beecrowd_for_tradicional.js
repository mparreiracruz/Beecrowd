/*
beecrowd | 1064
Positivos e Média
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia 6 valores. Em seguida, mostre quantos destes valores digitados foram positivos. Na próxima linha, deve-se mostrar a média de todos os valores positivos digitados, com um dígito após o ponto decimal.

Entrada
A entrada contém 6 números que podem ser valores inteiros ou de ponto flutuante. Pelo menos um destes números será positivo.

Saída
O primeiro valor de saída é a quantidade de valores positivos. A próxima linha deve mostrar a média dos valores positivos digitados.

Exemplo de Entrada              Exemplo de Saída
7                               4 valores positivos
-5                              7.4
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

for(var i = 0, contador = 0, soma = 0 ; i < numeros.length ; i++) {
    if(numeros[i] > 0) {
        contador++;
        var soma = numeros[i] + soma
    }
}

console.log(contador + " valores positivos")

var media = soma / contador

console.log(media)