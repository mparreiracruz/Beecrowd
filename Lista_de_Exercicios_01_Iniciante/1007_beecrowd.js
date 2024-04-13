/*
beecrowd | 1007
Diferença
Adaptado por Neilor Tonin, URI  Brasil
Link: https://judge.beecrowd.com/pt/problems/view/1007
*/
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines.shift());//Entrada 01
var B = parseInt(lines.shift());//Entrada 02
var C = parseInt(lines.shift());//Entrada 03
var D = parseInt(lines.shift());//Entrada 04

var DIFERENCA = (A * B - C * D);//Processamento

console.log("DIFERENCA = " + DIFERENCA);//Saída