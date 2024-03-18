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
