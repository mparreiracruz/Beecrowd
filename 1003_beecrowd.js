/*
Leia dois valores inteiros, no caso para variáveis A e B. A seguir, calcule a soma entre elas e atribua à variável SOMA. A seguir escrever o valor desta variável.

Entrada
O arquivo de entrada contém 2 valores inteiros.

Saída
Imprima a mensagem "SOMA" com todas as letras maiúsculas, com um espaço em branco antes e depois da igualdade seguido pelo valor correspondente à soma de A e B. Como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".

Exemplos de Entrada                 Exemplos de Saída
30                                  SOMA = 40
10


-30                                 SOMA = -20
10


0                                   SOMA = 0
0
*/

var input = require('fs').readFileSync('stdin', 'utf8');//configuracao de entrada
var lines = input.split('\n');//configuracao de saída

var A = parseInt(lines.shift());//Entrada
console.log("Digite o 1º valor inteiro da adicao: " + A);//Entrada com pergunta ao usuário
var B = parseInt(lines.shift());//Entrada

console.log("Digite o 2º valor inteiro da adicao: " + B);//Entrada com pergunta ao usuário
var SOMA = A + B;//Processamento

console.log('SOMA = ' + SOMA);//Saída