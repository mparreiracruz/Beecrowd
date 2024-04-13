/*
beecrowd | 1002
Área do Círculo
Adaptado por Neilor Tonin, URI  Brasil
Link: https://judge.beecrowd.com/pt/problems/view/1002
*/
var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var raio = parseFloat(lines.shift())
var pi = 3.14159

var formulaArea = pi * (raio * raio)

console.log('A=' + formulaArea.toFixed(4))