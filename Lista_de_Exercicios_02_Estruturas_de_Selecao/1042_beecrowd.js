/*
beecrowd | 1042
Sort Simples
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia 3 valores inteiros e ordene-os em ordem crescente. No final, mostre os valores em ordem crescente, uma linha em branco e em seguida, os valores na sequência como foram lidos.

Entrada
A entrada contem três números inteiros.

Saída
Imprima a saída conforme foi especificado.

Exemplo de Entrada	            Exemplo de Saída
7 21 -14                        -14
                                7
                                21

                                7
                                21
                                -14


-14 21 7                        -14
                                7
                                21

                                -14
                                21
                                7 
*/
var input = require('fs').readFileSync('stdin', 'utf8')

var lines = input.split("\n")
var line1 = lines.shift()
var linhaPrincipal1 = line1.split(" ")

var n1 = parseInt(linhaPrincipal1.shift())
var n2 = parseInt(linhaPrincipal1.shift())
var n3 = parseInt(linhaPrincipal1.shift())

var numeros = [n1, n2, n3]

numeros.sort((a, b) => a - b)

console.log(numeros[0] + "\n" + numeros[1] + "\n" + numeros[2] + "\n")
console.log(n1 + "\n" + n2 + "\n" + n3)