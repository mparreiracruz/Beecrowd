/*
beecrowd | 1051
Imposto de Renda
Por Neilor Tonin, URI  Brasil
Timelimit: 1
https://judge.beecrowd.com/pt/problems/view/1051
*/

const fs = require('fs');

function calcularImposto(salario) {
    let imposto = 0.0;

    if (salario > 2000.00) {
        if (salario > 2000.00 && salario <= 3000.00) {
            imposto = (salario - 2000.00) * 0.08;
        } else if (salario > 3000.00 && salario <= 4500.00) {
            imposto = (salario - 3000.00) * 0.18 + 80.00;
        } else if (salario > 4500.00) {
            imposto = (salario - 4500.00) * 0.28 + 80.00 + 270.00;
        }
    }

    return imposto;
}

function imprimirResultado(salario) {
    const imposto = calcularImposto(salario);

    if (imposto > 0.0) {
        console.log(`R$ ${imposto.toFixed(2)}`);
    } else {
        console.log('Isento');
    }
}

// Leitura do arquivo e execução das funções
const input = fs.readFileSync('stdin', 'utf8');
const lines = input.split('\n');
const salario = parseFloat(lines.shift());

imprimirResultado(salario);
