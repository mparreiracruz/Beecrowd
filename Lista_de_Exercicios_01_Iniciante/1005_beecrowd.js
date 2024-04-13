/*
beecrowd | 1005
Média 1
Adaptado por Neilor Tonin, URI  Brasil
Link: https://judge.beecrowd.com/pt/problems/view/1005
*/
var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var A = parseFloat(lines.shift())
var B = parseFloat(lines.shift())

const pesoA = 3.5
const pesoB = 7.5

var media = ((A * pesoA) + (B * pesoB)) / 11

console.log('MEDIA = ' + media.toFixed(5))