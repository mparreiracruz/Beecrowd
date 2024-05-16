/*
beecrowd | 1134
Tipo de Combustível
Adaptado por Neilor Tonin, URI  Brasil
Timelimit: 1
https://judge.beecrowd.com/pt/problems/view/1134
*/

var fs = require('fs');

function readInput(filePath) {
    var input = fs.readFileSync(filePath, 'utf8');
    return input.split('\n');
}

function processInput(lines) {
    var counts = { alcool: 0, gasolina: 0, diesel: 0 };

    while (lines.length > 0) {
        var x = parseInt(lines.shift());

        if (x === 1) {
            counts.alcool += 1;
        } else if (x === 2) {
            counts.gasolina += 1;
        } else if (x === 3) {
            counts.diesel += 1;
        } else if (x === 4) {
            break;
        }
    }

    return counts;
}

function displayResults(counts) {
    console.log('MUITO OBRIGADO');
    console.log(`Alcool: ${counts.alcool}`);
    console.log(`Gasolina: ${counts.gasolina}`);
    console.log(`Diesel: ${counts.diesel}`);
}

// Main execution
var lines = readInput('stdin1134');
var counts = processInput(lines);
displayResults(counts);
