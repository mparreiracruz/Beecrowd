/*
beecrowd | 1006
Média 2
Adaptado por Neilor Tonin, URI  Brasil
Link: https://judge.beecrowd.com/pt/problems/view/1006
*/
var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var A = parseFloat(lines.shift())
var B = parseFloat(lines.shift())
var C = parseFloat(lines.shift())

const pesoA = 2
const pesoB = 3
const pesoC = 5

var media = ((A * pesoA) + (B * pesoB) + (C * pesoC)) / 10

console.log('MEDIA = ' + media.toFixed(1))