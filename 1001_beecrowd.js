/**
Leia 2 valores inteiros e armazene-os nas variáveis A e B. Efetue a soma de A e B atribuindo o seu resultado na variável X. Imprima X conforme exemplo apresentado abaixo. Não apresente mensagem alguma além daquilo que está sendo especificado e não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".

Entrada
A entrada contém 2 valores inteiros.

Saída
conforme o exemplo abaixo.
*/
var input = require('fs').readFileSync('stdin', 'utf8')//configuracao de entrada
var lines = input.split('\n');//configuracao de saída

var A = parseInt(lines.shift());//Entrada
console.log("Digite o primeiro valor: " + A);//Entrada com pergunta ao usuário

var B = parseInt(lines.shift());//Entrada
console.log("Digite o segundo valor: " + B);//Entrada com pergunta ao usuário

var X = A + B;//Processamento

console.log('X = ' + X);//Saída