/*
beecrowd | 1018
Cédulas
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

Saída
Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias, conforme o exemplo fornecido. Não esqueça de imprimir o fim de linha após cada linha, caso contrário seu programa apresentará a mensagem: “Presentation Error”.

Exemplo de Entrada                      	Exemplo de Saída
576                                         576
                                            5 nota(s) de R$ 100,00
                                            1 nota(s) de R$ 50,00
                                            1 nota(s) de R$ 20,00
                                            0 nota(s) de R$ 10,00
                                            1 nota(s) de R$ 5,00
                                            0 nota(s) de R$ 2,00
                                            1 nota(s) de R$ 1,00


11257                                       11257
                                            112 nota(s) de R$ 100,00
                                            1 nota(s) de R$ 50,00
                                            0 nota(s) de R$ 20,00
                                            0 nota(s) de R$ 10,00
                                            1 nota(s) de R$ 5,00
                                            1 nota(s) de R$ 2,00
                                            0 nota(s) de R$ 1,00                                      


503                                         503
                                            5 nota(s) de R$ 100,00
                                            0 nota(s) de R$ 50,00  
                                            0 nota(s) de R$ 20,00
                                            0 nota(s) de R$ 10,00
                                            0 nota(s) de R$ 5,00
                                            1 nota(s) de R$ 2,00
                                            1 nota(s) de R$ 1,00
*/
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let valor = parseInt(lines.shift())

console.log(valor)

        var qtdnotas = parseInt(valor/100)
        valor = valor % 100
        console.log(`${qtdnotas} nota(s) de R$ ${100},00`)
        
        var qtdnotas = parseInt(valor/50)
        valor = valor % 50
        console.log(`${qtdnotas} nota(s) de R$ ${50},00`)

        var qtdnotas = parseInt(valor/20)
        valor = valor % 20
        console.log(`${qtdnotas} nota(s) de R$ ${20},00`)

        var qtdnotas = parseInt(valor/10)
        valor = valor % 10
        console.log(`${qtdnotas} nota(s) de R$ ${10},00`)

        var qtdnotas = parseInt(valor/5)
        valor = valor % 5
        console.log(`${qtdnotas} nota(s) de R$ ${5},00`)

        var qtdnotas = parseInt(valor/2)
        valor = valor % 2
        console.log(`${qtdnotas} nota(s) de R$ ${2},00`)

        var qtdnotas = parseInt(valor/1)
        valor = valor % 1
        console.log(`${qtdnotas} nota(s) de R$ ${1},00`)