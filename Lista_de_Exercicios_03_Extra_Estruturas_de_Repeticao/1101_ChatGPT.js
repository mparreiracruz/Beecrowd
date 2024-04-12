var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split("\n");

for (let line of lines) {
    let [M, N] = line.split(' ').map(Number);
    if (N > M) {
        [M, N] = [N, M];
    }

    var intervalo = { inicio: M, fim: N };

    var resultadoSequencia = "";
    var somaSequencia = 0;

    for (var i = intervalo.inicio; i <= intervalo.fim; i++) {
        resultadoSequencia += i + " ";
        somaSequencia += i;
    }

    console.log(resultadoSequencia + "Sum=" + somaSequencia);
}
