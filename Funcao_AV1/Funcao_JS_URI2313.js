/* 
beecrowd | 2313
Qual Triângulo
Por Alexandre A. Melo, IFSC BR Brazil
Timelimit: 1
https://judge.beecrowd.com/pt/problems/view/2313
*/

const fs = require('fs');

function lerEntrada(arquivo) {
    const input = fs.readFileSync(arquivo, 'utf8');
    const lines = input.split('\n');
    return lines[0].split(" ").map(Number);
}

function classificarTriangulo(A, B, C) {
    if (A < B + C && B < A + C && C < B + A) {
        if (A === B && B === C) {
            return 'Valido-Equilatero';
        } else if (A !== B && A !== C && B !== C) {
            return 'Valido-Escaleno';
        } else {
            return 'Valido-Isoceles';
        }
    } else {
        return 'Invalido';
    }
}

function verificarRetangulo(A, B, C) {
    return (A ** 2 === B ** 2 + C ** 2 || B ** 2 === A ** 2 + C ** 2 || C ** 2 === A ** 2 + B ** 2) ? 'S' : 'N';
}

function main() {
    const [A, B, C] = lerEntrada('stdin2313');
    const tipo = classificarTriangulo(A, B, C);
    console.log(tipo);
    
    if (tipo !== 'Invalido') {
        const retangulo = verificarRetangulo(A, B, C);
        console.log('Retangulo:', retangulo);
    }
}

main();
