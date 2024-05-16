/*
beecrowd | 2344
Notas da Prova
Por OBI - Olimpíada Brasileira de Informática 2009 BR Brazil
Timelimit: 1
https://judge.beecrowd.com/pt/problems/view/2344
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function obterNota(lines) {
    return parseInt(lines.shift());
}

function calcularConceito(nota) {
    if (nota === 0) {
        return 'E';
    } else if (nota >= 1 && nota <= 35) {
        return 'D';
    } else if (nota <= 60) {
        return 'C';
    } else if (nota <= 85) {
        return 'B';
    } else {
        return 'A';
    }
}

function main() {
    let nota = obterNota(lines);
    let conceito = calcularConceito(nota);
    console.log(conceito);
}

main();
