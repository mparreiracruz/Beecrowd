/*
Leia 2 valores inteiros e armazene-os nas variáveis A e B. Efetue a soma de A e B atribuindo o seu resultado na variável X. Imprima X conforme exemplo apresentado abaixo. Não apresente mensagem alguma além daquilo que está sendo especificado e não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".

Entrada
A entrada contém 2 valores inteiros.

Saída
conforme o exemplo abaixo.

Exemplos de Entrada               Exemplos de Saída
10                                X = 19
9


-10                               X = -6
4


15                                X = 8
-7
*/

var input = require('fs').readFileSync('stdin', 'utf8')//configuracao de entrada
var lines = input.split('\n');//configuracao de saída

var A = parseInt(lines.shift());//Entrada
console.log("Digite o 1º valor inteiro da adicao: " + A);//Entrada com pergunta ao usuário

var B = parseInt(lines.shift());//Entrada
console.log("Digite o 2º valor inteiro da adicao: " + B);//Entrada com pergunta ao usuário

var X = A + B;//Processamento

console.log('X = ' + X);//Saída