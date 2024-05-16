/*
beecrowd | 2670
Máquina de Café
Por Maratona de Programção da SBC, ACM ICPC 2017 BR Brazil
Timelimit: 1
https://judge.beecrowd.com/pt/problems/view/2670
*/

function calcularMenorPreco(A1, A2, A3) {
    const P1 = (A2 * 2) + (A3 * 4);
    const P2 = (A1 * 2) + (A3 * 2);
    const P3 = (A1 * 4) + (A2 * 2);

    if (P1 < P2) {
        return P1 < P3 ? P1 : P3;
    } else {
        return P2 < P3 ? P2 : P3;
    }
}

// Exemplo de uso:
const A1 = 2;
const A2 = 3;
const A3 = 4;
const menorPreco = calcularMenorPreco(A1, A2, A3);
console.log(menorPreco);
