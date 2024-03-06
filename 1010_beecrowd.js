/*
beecrowd | 1010
Cálculo Simples
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

Entrada
O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

Saída
A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto. 
*/
var input = require('fs').readFileSync('stdin', 'utf8');//configuracao
var linesPrincipal = input.split('\n');//configuracao

var lines1 = linesPrincipal.shift().split(" ")//cofiguracao para exibir o resultado em 1 linha com espaco entre os valores 
var lines2 = linesPrincipal.shift().split(" ")//configuracao para exibir o resultado em 1 linha com espaco entre os valores

var codigoPeca1 = parseInt(lines1.shift());//Entrada
var numeroDePeca1 = parseInt(lines1.shift());//Entrada
var valorUnitarioDeCadaPeca1 = parseFloat(lines1.shift());//Entrada
var codigoPeca2 = parseInt(lines2.shift());//Entrada
var numeroDePeca2 = parseInt(lines2.shift());//Entrada
var valorUnitarioDeCadaPeca2 = parseFloat(lines2.shift());//Entrada

var ValorASerPago = (numeroDePeca1 * valorUnitarioDeCadaPeca1) + (numeroDePeca2 * valorUnitarioDeCadaPeca2);//Processamento

console.log("VALOR A PAGAR: R$ " + ValorASerPago.toFixed(2));//Saída