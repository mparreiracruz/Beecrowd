/*
beecrowd | 1009
Salário com Bônus
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.

Entrada
O arquivo de entrada contém um texto (primeiro nome do vendedor) e 2 valores de dupla precisão (double) com duas casas decimais, representando o salário fixo do vendedor e montante total das vendas efetuadas por este vendedor, respectivamente.

Saída
Imprima o total que o funcionário deverá receber, conforme exemplo fornecido.

Exemplos de Entrada             Exemplos de Saída
JOAO                            TOTAL = R$ 684.54
500.00
1230.00


PEDRO                           TOTAL = R$ 700.00
700.00
0.00


MANGOJATA                       TOTAL = R$ 1884.58
1700.00
1230.50
*/
var input = require('fs').readFileSync('stdin', 'utf8');//configuracao de entrada
var lines = input.split('\n');//configuracao de saída

var nome = lines.shift();//Entrada 01
var salarioFixo = parseFloat(lines.shift());//Entrada 02
var totalDeVendas = parseFloat(lines.shift());//Entrada 03

var comissao = totalDeVendas * 0.15;//Processamento 01
var valorFinal = salarioFixo + comissao;//Processamento 02
 
console.log("TOTAL = R$ " + valorFinal.toFixed(2));//Saída