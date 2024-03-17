/*
beecrowd | 1008
Salário
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse funcionário. A seguir, mostre o número e o salário do funcionário, com duas casas decimais.

Entrada
O arquivo de entrada contém 2 números inteiros e 1 número com duas casas decimais, representando o número, quantidade de horas trabalhadas e o valor que o funcionário recebe por hora trabalhada, respectivamente.

Saída
Imprima o número e o salário do funcionário, conforme exemplo fornecido, com um espaço em branco antes e depois da igualdade. No caso do salário, também deve haver um espaço em branco após o $.

Exemplos de Entrada	            Exemplos de Saída
25                              NUMBER = 25
100                             SALARY = U$ 550.00
5.50


1                               NUMBER = 1
200                             SALARY = U$ 4100.00
20.50


6                               NUMBER = 6
145                             SALARY = U$ 2254.75
15.55
*/
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var numeroFuncionario = parseInt(lines.shift());//Entrada 01
var horasTrabalhadas = parseInt(lines.shift());//Entrada 02
var valorPorHora = parseFloat(lines.shift());//Entrada 03

var valorPorHoraTrabalhada = horasTrabalhadas * valorPorHora;//Processamento

console.log("NUMBER = " + numeroFuncionario);//Saída 01
console.log("SALARY = U$ " + valorPorHoraTrabalhada.toFixed(2));//Saída 02