/*
beecrowd | 1009
Salário com Bônus
Adaptado por Neilor Tonin, URI  Brasil
Link: https://judge.beecrowd.com/pt/problems/view/1009
*/
var input = require('fs').readFileSync('stdin', 'utf8');//configuracao de entrada
var lines = input.split('\n');//configuracao de saída

var nome = lines.shift();//Entrada 01
var salarioFixo = parseFloat(lines.shift());//Entrada 02
var totalDeVendas = parseFloat(lines.shift());//Entrada 03

var comissao = totalDeVendas * 0.15;//Processamento 01
var valorFinal = salarioFixo + comissao;//Processamento 02
 
console.log("TOTAL = R$ " + valorFinal.toFixed(2));//Saída