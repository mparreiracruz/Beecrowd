/*
beecrowd | 1008
Salário
Adaptado por Neilor Tonin, URI  Brasil
Link: https://judge.beecrowd.com/pt/problems/view/1008
*/
var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var numeroFuncionario = parseInt(lines.shift())
var horasTrabalhadas = parseInt(lines.shift())
var valorPorHora = parseFloat(lines.shift())

var valorPorHoraTrabalhada = horasTrabalhadas * valorPorHora

console.log("NUMBER = " + numeroFuncionario)
console.log("SALARY = U$ " + valorPorHoraTrabalhada.toFixed(2))