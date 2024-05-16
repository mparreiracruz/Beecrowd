/*
beecrowd | 1050
DDD
Adaptado por Neilor Tonin, URI  Brasil
Timelimit: 1
https://judge.beecrowd.com/pt/problems/view/1050
*/

// Função que mapeia o DDD para a cidade correspondente
function obterCidadePorDDD(ddd) {
    switch (ddd) {
        case 61:
            return 'Brasilia';
        case 71:
            return 'Salvador';
        case 11:
            return 'Sao Paulo';
        case 21:
            return 'Rio de Janeiro';
        case 32:
            return 'Juiz de Fora';
        case 19:
            return 'Campinas';
        case 27:
            return 'Vitoria';
        case 31:
            return 'Belo Horizonte';
        default:
            return 'DDD nao cadastrado';
    }
}

// Função principal que lida com a leitura do arquivo e a exibição da cidade correspondente
function main() {
    var input = require('fs').readFileSync('stdin', 'utf8');
    var lines = input.split('\n');
    let ddd = parseInt(lines.shift());
    var cidade = obterCidadePorDDD(ddd);
    console.log(cidade);
}

// Chamada da função principal
main();
