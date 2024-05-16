/*
beecrowd | 1115
Quadrante
Adaptado por Neilor Tonin, URI  Brasil
Link: https://judge.beecrowd.com/pt/problems/view/1115
*/
var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var A = parseInt(lines.shift())
var B = parseInt(lines.shift())

var X = A + B

console.log('X = ' + X)