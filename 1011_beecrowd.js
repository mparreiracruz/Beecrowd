/*
beecrowd | 1011
Esfera
Adaptado por Neilor Tonin, URI  Brasil
Link: https://judge.beecrowd.com/pt/problems/view/1011
*/
var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var R = parseFloat(lines.shift())
const pi = 3.14159

var volume = (4/3.0) * pi * (R * R * R)

console.log('VOLUME = ' + volume.toFixed(3))