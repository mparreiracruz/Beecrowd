/**
 * beecrowd | 1041
Coordenadas de um Ponto
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia 2 valores com uma casa decimal (x e y), que devem representar as coordenadas de um ponto em um plano. A seguir, determine qual o quadrante ao qual pertence o ponto, ou se está sobre um dos eixos cartesianos ou na origem (x = y = 0).

Se o ponto estiver na origem, escreva a mensagem “Origem”.

Se o ponto estiver sobre um dos eixos escreva “Eixo X” ou “Eixo Y”, conforme for a situação.

Entrada
A entrada contem as coordenadas de um ponto.

Saída
A saída deve apresentar o quadrante em que o ponto se encontra.

Exemplo de Entrada	            Exemplo de Saída
4.5 -2.2                        Q4


0.1 0.1                         Q1


0.0 0.0                         Origem
*/

const { Console } = require('console')

var input = require('fs').readFileSync('stdin', 'utf8')

var lines = input.split("\n");
var line1 = lines.shift();
var linhaPrincipal1 = line1.split(" ");

var x = parseFloat(linhaPrincipal1.shift()).toFixed(1);
var y = parseFloat(linhaPrincipal1.shift()).toFixed(1);

if(x == 0 && y == 0){
    console.log("Origem");
    }else if(x == 0 && y != 0){
        console.log("Eixo Y"); 
        }else if(x !== 0 && y == 0) {
            console.log("Eixo X");
            } else if(x > 0 && y > 0) {
                console.log("Q1");
                } else if(x < 0 && y > 0) {
                    console.log("Q2");
                    } else if(x < 0 && y < 0) {
                        console.log("Q3");
                        }else if(x > 0 && y < 0) {
                            console.log("Q4");
                        }