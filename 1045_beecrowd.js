/*
beecrowd | 1045
Tipos de Triângulos
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos, sempre escrevendo uma mensagem adequada:

se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
se A elevado a 2 = B elevado a 2 + C elevado a 2, apresente a mensagem: TRIANGULO RETANGULO
se A elevado a 2 > B elevado a 2 + Celevado a 2, apresente a mensagem: TRIANGULO OBTUSANGULO
se A elevado a 2 < B elevado a 2 + C elevado a 2, apresente a mensagem: TRIANGULO ACUTANGULO
se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES
Entrada
A entrada contem três valores de ponto flutuante de dupla precisão A (0 < A) , B (0 < B) e C (0 < C).

Saída
Imprima todas as classificações do triângulo especificado na entrada.

Exemplos de Entrada         	Exemplos de Saída
7.0 5.0 7.0                     TRIANGULO ACUTANGULO
                                TRIANGULO ISOSCELES


6.0 6.0 10.0                    TRIANGULO OBTUSANGULO
                                TRIANGULO ISOSCELES


6.0 6.0 6.0                     TRIANGULO ACUTANGULO
                                TRIANGULO EQUILATERO


5.0 7.0 2.0                     NAO FORMA TRIANGULO


6.0 8.0 10.0                    TRIANGULO RETANGULO
*/
var input = require('fs').readFileSync('stdin', 'utf8')

var lines = input.split("\n")
var line1 = lines.shift()
var linhaPrincipal1 = line1.split(" ")

var A = parseFloat(linhaPrincipal1.shift())
var B = parseFloat(linhaPrincipal1.shift())
var C = parseFloat(linhaPrincipal1.shift())

var numeros = [A, B, C]
numeros.sort((a, b) => b - a)

if(numeros[0] >= numeros[1] + numeros[2]) {  
    console.log("NAO FORMA TRIANGULO")
}
    else if(Math.pow(numeros[0], 2) == Math.pow(numeros[1], 2) + Math.pow(numeros[2], 2)){
        console.log("TRIANGULO RETANGULO")
    }
         else if(Math.pow(numeros[0], 2) > Math.pow(numeros[1], 2) + (Math.pow(numeros[2], 2))) {
            console.log("TRIANGULO OBTUSANGULO")
        }
            else if(Math.pow(numeros[0], 2) < Math.pow(numeros[1], 2) + (Math.pow(numeros[2], 2))) {
                console.log("TRIANGULO ACUTANGULO")
            }
                if(numeros[0] == numeros[1] && numeros[1] == numeros[2]){
                    console.log("TRIANGULO EQUILATERO")
                }
                    else if(numeros[0] == numeros[1] || numeros[1] == numeros[2] || numeros[0] == numeros[2]) {
                        console.log("TRIANGULO ISOSCELES")
                    }
          