/*
beecrowd | 1004
Produto Simples
Adaptado por Neilor Tonin, URI  Brasil
Link: https://judge.beecrowd.com/pt/problems/view/1004
*/
var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var A = parseInt(lines.shift())
var B = parseInt(lines.shift())

var PROD = A * B

console.log('PROD = ' + PROD)