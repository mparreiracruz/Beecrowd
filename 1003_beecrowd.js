/*
beecrowd | 1003
Soma Simples
Adaptado por Neilor Tonin, URI  Brasil
Link: https://judge.beecrowd.com/pt/problems/view/1003
*/
var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var A = parseInt(lines.shift())
var B = parseInt(lines.shift())

var SOMA = A + B

console.log('SOMA = ' + SOMA)