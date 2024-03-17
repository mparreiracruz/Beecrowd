var input = require('fs').readFileSync('stdin', 'utf8');

var entrada = input.split("\n");

var linha1 = entrada.shift().split(" ");
var linha2 = entrada.shift().split(" ");

var A = parseInt(linha1.shift());//Entrada 01
console.log(A);
var B = parseInt(linha1.shift());//Entrada 02
console.log(B);
var C = parseInt(linha2.shift());
console.log(C);
var D = parseInt(linha2.shift());
console.log(D);
var X = A + B + C + D;//Processamento

console.log('X = ' + X);//Saída
/*
var input = require('fs').readFileSync('stdin', 'utf8');//configuracao de entrada

var lines = input.split('\n');//configuracao de saída
var linha1 = lines.shift().split(" ");//configuracao de saída 


var A = parseInt(linha1.shift());
*/