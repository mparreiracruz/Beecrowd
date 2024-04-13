/*
beecrowd | 1094
Experiências
Adaptado por Neilor Tonin, URI  Brasil
Link: https://judge.beecrowd.com/pt/problems/view/1094
*/
var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

const casosDeTeste = parseInt(lines.shift())

let total = 0
let coelho = 0
let rato = 0
let sapo = 0

let quantia = coelho = rato = sapo

if(quantia <= 1 && quantia <= 15) {
  for(let i = 0; i < casosDeTeste; i++) {
    let coluna = lines.shift().split(' ')
    total += parseInt(coluna[0])
      if (coluna[1].trim() == 'C') {
        coelho += parseInt(coluna[0])
        } else if (coluna[1].trim() == 'R') {
            rato += parseInt(coluna[0])
            } else if (coluna[1].trim() == 'S') {
                sapo += parseInt(coluna[0])
            }
        }
    }
    
console.log('Total: ' + total + ' cobaias')
console.log('Total de coelhos: ' + coelho)
console.log('Total de ratos: ' + rato)
console.log('Total de sapos: '+ sapo)

const percentualCoelho = ((coelho * 100) / total).toFixed(2)
const percentualRato = ((rato * 100) / total).toFixed(2)
const percentualSapo = ((sapo * 100) / total).toFixed(2)

console.log('Percentual de coelhos: ' + percentualCoelho + " %")
console.log('Percentual de ratos: ' + percentualRato + " %")
console.log('Percentual de sapos: ' + percentualSapo + " %")