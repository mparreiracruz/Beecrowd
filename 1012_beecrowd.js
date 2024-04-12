/*
beecrowd | 1012
Área
Adaptado por Neilor Tonin, URI  Brasil
Link: https://judge.beecrowd.com/pt/problems/view/1012
*/
var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')
var line1 = lines.shift()
var entrada01 = line1.split(" ")

var A = parseFloat(entrada01.shift())
var B = parseFloat(entrada01.shift())
var C = parseFloat(entrada01.shift())

const pi = 3.14159

var areaTriangulo = (A * C) / 2
var areaCirculo = (C * C) * pi
var areaTrapezio = ((A + B) * C) / 2
var areaQuadrado = B * B
var areaRetangulo = A * B

console.log("TRIANGULO: " + areaTriangulo.toFixed(3))
console.log("CIRCULO: " + areaCirculo.toFixed(3))
console.log("TRAPEZIO: " + areaTrapezio.toFixed(3))
console.log("QUADRADO: " + areaQuadrado.toFixed(3))
console.log("RETANGULO: " + areaRetangulo.toFixed(3))