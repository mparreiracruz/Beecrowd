/**
 * beecrowd | 1044
Múltiplos
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.

Entrada
A entrada contém valores inteiros.

Saída
A saída deve conter uma das mensagens conforme descrito acima.

Exemplo de Entrada	            Exemplo de Saída
6 24                            Sao Multiplos


6 25                            Nao sao Multiplos
*/
var input = require('fs').readFileSync('stdin', 'utf8')

var lines = input.split("\n")
var line1 = lines.shift()
var linhaPrincipal1 = line1.split(" ")

var A = parseInt(linhaPrincipal1.shift())
var B = parseInt(linhaPrincipal1.shift())

if (A % B == 0 || B % A == 0){
    console.log("Sao Multiplos")
} else {
    console.log("Nao sao Multiplos")
}

