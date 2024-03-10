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
var input = require('fs').readFileSync('stdin', 'utf8');//configuracao de entrada 

var linhaPrincipal = input.split('\n');//configuracao de saída
var linha1 = linhaPrincipal.shift().split(" "); //configuracao de saída
var linha2 = linhaPrincipal.shift().split(" ");//configuracao de saída

var codigoPeca1 = parseInt(linha1.shift());//Entrada
console.log("Digite o código da 1ª peca: " + codigoPeca1);//Entrada com pergunta ao usuário

var numeroDePeca1 = parseInt(linha1.shift());//Entrada
console.log("Digite o número da 1ª peca: " + numeroDePeca1);//Entrada com pergunta ao usuário

var valorUnitarioDeCadaPeca1 = parseFloat(linha1.shift());//Entrada
console.log("Digite o valor unitário de cada peca: " + valorUnitarioDeCadaPeca1);

var codigoPeca2 = parseInt(linha2.shift());//Entrada
console.log("Digite o código da 2ª peca: " + codigoPeca2);

var numeroDePeca2 = parseInt(linha2.shift());//Entrada
console.log("Digite o número da 2ª peca: " + numeroDePeca2);

var valorUnitarioDeCadaPeca2 = parseFloat(linha2.shift());//Entrada
console.log("Digite o valor unitário de cada peca: " + valorUnitarioDeCadaPeca2);


var ValorASerPago = (numeroDePeca1 * valorUnitarioDeCadaPeca1) + (numeroDePeca2 * valorUnitarioDeCadaPeca2);//Processamento

console.log("VALOR A PAGAR: R$ " + ValorASerPago.toFixed(2));//Saída