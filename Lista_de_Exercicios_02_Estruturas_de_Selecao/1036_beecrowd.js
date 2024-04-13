/*beecrowd | 1036
Fórmula de Bhaskara
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”, caso haja uma divisão por 0 ou raiz de numero negativo.

Entrada
Leia três valores de ponto flutuante (double) A, B e C.

Saída
Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto, com uma mensagem correspondente conforme exemplo abaixo. Imprima sempre o final de linha após cada mensagem.

Exemplos de Entrada	            Exemplos de Saída
10.0 20.1 5.1                   R1 = -0.29788
                                R2 = -1.71212

               
0.0 20.0 5.0                    Impossivel calcular


10.3 203.0 5.0                  R1 = -0.02466
                                R2 = -19.68408



10.0 3.0 5.0                    Impossivel calcular
*/

const { Console } = require('console');

var input = require('fs').readFileSync('stdin', 'utf8');//configuracao de entrada 

var linhaPrincipal = input.split('\n');//configuracao de saída
var linha1 = linhaPrincipal.shift().split(" ");//configuracao de saída

var A = parseFloat(linha1.shift());
var B = parseFloat(linha1.shift());
var C = parseFloat(linha1.shift());

var formulaDeBhaskaraPositiva = (-B + Math.sqrt(B * B - 4 * A * C)) / (2 * A);
var formulaDeBhaskaraNegativa = (-B - Math.sqrt(B * B - 4 * A * C)) / (2 * A);

var resultadoBhaskara = formulaDeBhaskaraPositiva + formulaDeBhaskaraNegativa;

if(resultadoBhaskara){
    console.log("R1 = " + formulaDeBhaskaraPositiva.toFixed(5));
    console.log("R2 = " + formulaDeBhaskaraNegativa.toFixed(5));
    } else {
        console.log("Impossivel calcular");
}