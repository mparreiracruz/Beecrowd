/*
beecrowd | 1115
Quadrante
Adaptado por Neilor Tonin, URI  Brasil
Link: https://judge.beecrowd.com/pt/problems/view/1115
*/
var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

const length = lines.length

for(let i = 0; i < length; i++){
  let line = lines[i].split(' ')
  let X = parseInt(line[0])
  let Y = parseInt(line[1])
  
  if(X == 0 || Y == 0) {
    console.log()
    } else if(X > 0 && Y > 0) {
        console.log('primeiro')
        } else if(X < 0 && Y > 0) {
            console.log('segundo')
            } else if(X < 0 && Y < 0) {
                console.log('terceiro')
                } else {
                    console.log('quarto')
                }
            }