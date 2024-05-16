/*
beecrowd | 1072
Intervalo 2
Adaptado por Neilor Tonin, URI  Brasil
Timelimit: 1
https://judge.beecrowd.com/pt/problems/view/1072
*/

var input = require('fs').readFileSync('stdin1072', 'utf8');
var lines = input.split('\n');

function contarIntervalos(numeros) {
    let dentro = 0;
    let fora = 0;

    numeros.forEach(num => {
        if (estaDentroDoIntervalo(num, 10, 20)) {
            dentro++;
        } else {
            fora++;
        }
    });

    return { dentro, fora };
}

function estaDentroDoIntervalo(numero, minimo, maximo) {
    return numero >= minimo && numero <= maximo;
}

function processarEntrada(lines) {
    const N = parseInt(lines.shift());
    const numeros = lines.slice(0, N).map(Number);
    return numeros;
}

function main(lines) {
    const numeros = processarEntrada(lines);
    const { dentro, fora } = contarIntervalos(numeros);

    console.log(`${dentro} in`);
    console.log(`${fora} out`);
}

main(lines);
