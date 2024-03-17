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

Exemplo de entrada:                   Exemplo de saída:
12 1 5.30                             VALOR A PAGAR: R$ 15.50
16 2 5.10


13 2 15.30                            VALOR A PAGAR: R$ 51.40 
161 4 5.20
*/
var input = require("fs").readFileSync("stdin","utf8");
var lines = input.split("\n");

var line1 = lines.shift();
var line2 = lines.shift();

var Produto01 = line1.split(" ");
var codiogoProduto1 = parseInt(Produto01.shift());
var numeroDePeca1 = parseInt(Produto01.shift());
var valorUnitarioDeCadaPeca1     = parseFloat(Produto01.shift());

var Produto02 = line2.split(" ");
var condigoProduto2 = parseInt(Produto02.shift());
var numeroDePeca2 = parseInt(Produto02.shift());
var valorUnitarioDeCadaPeca2 = parseFloat(Produto02.shift());

var ValorASerPago = (numeroDePeca1 * valorUnitarioDeCadaPeca1) + (numeroDePeca2 * valorUnitarioDeCadaPeca2);//Processamento

console.log("VALOR A PAGAR: R$ " + ValorASerPago.toFixed(2));//Saída