/*
beecrowd | 1010
Cálculo Simples
Adaptado por Neilor Tonin, URI  Brasil
Link: https://judge.beecrowd.com/pt/problems/view/1010
*/
var input = require("fs").readFileSync("stdin","utf8");
var lines = input.split("\n");// lines = ["12 1 5.30" ,  "16 2 5.10"]

var line1 = lines.shift();//line1 = ["12 1 5.30"]
var line2 = lines.shift();//line2 = ["16 2 5.10"]

var Produto01 = line1.split(" ");//Produto01 = ["12" , "1" , "5.30"]

var codiogoProduto1 = parseInt(Produto01.shift());
var numeroDePeca1 = parseInt(Produto01.shift());
var valorUnitarioDeCadaPeca1     = parseFloat(Produto01.shift());

var Produto02 = line2.split(" ");//Produto02 = ["16" , "2" , "5.10"]

var condigoProduto2 = parseInt(Produto02.shift());
var numeroDePeca2 = parseInt(Produto02.shift());
var valorUnitarioDeCadaPeca2 = parseFloat(Produto02.shift());

var ValorASerPago = (numeroDePeca1 * valorUnitarioDeCadaPeca1) + (numeroDePeca2 * valorUnitarioDeCadaPeca2);//Processamento

console.log("VALOR A PAGAR: R$ " + ValorASerPago.toFixed(2));//Saída
