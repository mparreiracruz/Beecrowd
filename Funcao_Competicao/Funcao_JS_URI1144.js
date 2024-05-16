/*
beecrowd | 1144
Sequência Lógica
Adaptado por Neilor Tonin, URI  Brasil
Timelimit: 1
https://judge.beecrowd.com/pt/problems/view/1144
*/

function calcularPotencias(N) {
    for (var i = 1; i <= N; i++){
        var potencia2 = Math.pow(i, 2);
        var potencia3 = Math.pow(i, 3);
        
        console.log(i, potencia2, potencia3);
        console.log(i, potencia2 + 1, potencia3 + 1);
    }
}

// Exemplo de uso:
var N = 5; // ou qualquer outro valor desejado
calcularPotencias(N);
