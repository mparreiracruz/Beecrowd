/*
beecrowd | 1037
Intervalo
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Você deve fazer um programa que leia um valor qualquer e apresente uma mensagem dizendo em qual dos seguintes intervalos ([0,25], (25,50], (50,75], ((75,100]) este valor se encontra. Obviamente se o valor não estiver em nenhum destes intervalos, deverá ser impressa a mensagem “Fora de intervalo”.

O símbolo ( representa "maior que". Por exemplo:
[0,25]  indica valores entre 0 e 25.0000, inclusive eles.
(25,50] indica valores maiores que 25 Ex: 25.00001 até o valor 50.0000000

Entrada
O arquivo de entrada contém um número com ponto flutuante qualquer.

Saída
A saída deve ser uma mensagem conforme exemplo abaixo.

Exemplo de Entrada	            Exemplo de Saída
25.01                           Intervalo (25,50]


25.00                           Intervalo [0,25]


100.00                          Intervalo (75,100]


-25.02                          Fora de intervalo
*/
var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n');

var valor = parseFloat(lines.shift());//Entrada 

var intervalos = 
    [{ inicio: 0, fim: 25},//0
     { inicio: 25, fim: 50},//1
     { inicio: 50, fim: 75},//2
     { inicio: 75, fim: 100}]//3

    if(valor >= intervalos[0].inicio && valor <= intervalos[0].fim){
        console.log("Intervalo " + "[" + intervalos[0].inicio +  "," + intervalos[0].fim + "]");
    }  else if(valor > intervalos[1].inicio && valor <= intervalos[1].fim){
            console.log("Intervalo " + "(" + intervalos[1].inicio +  "," + intervalos[1].fim + "]");
        } else if(valor > intervalos[2].inicio && valor <= intervalos[2].fim){
               console.log("Intervalo " + "(" + intervalos[2].inicio +  "," + intervalos[2].fim + "]");
            } else if(valor > intervalos[3].inicio && valor <= intervalos[3].fim){
                    console.log("Intervalo " + "(" + intervalos[3].inicio +  "," + intervalos[3].fim + "]");
                } else {
                    console.log("Fora de intervalo");
                    }