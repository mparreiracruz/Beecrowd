/*
beecrowd | 1006
Média 2
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia 3 valores, no caso, variáveis A, B e C, que são as três notas de um aluno. A seguir, calcule a média do aluno, sabendo que a nota A tem peso 2, a nota B tem peso 3 e a nota C tem peso 5. Considere que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.

Entrada
O arquivo de entrada contém 3 valores com uma casa decimal, de dupla precisão (double).

Saída
Imprima a mensagem "MEDIA" e a média do aluno conforme exemplo abaixo, com 1 dígito após o ponto decimal e com um espaço em branco antes e depois da igualdade. Assim como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".
 
Exemplos de Entrada             Exemplos de Saída
5.0                             MEDIA = 6.3
6.0
7.0


5.0                             MEDIA = 9.0
10.0
10.0


10.0                            MEDIA = 7.5
10.0
5.0
*/
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift());//Entrada 01
var B = parseFloat(lines.shift());//Entrada 02
var C = parseFloat(lines.shift());//Entrada 03

const pesoA = 2;//Entrada constante 01
const pesoB = 3;//Entrada constante 02
const pesoC = 5;//Entrada constante 03

var media = ((A * pesoA) + (B * pesoB) + (C * pesoC)) / 10;//Processamento

console.log('MEDIA = ' + media.toFixed(1));//Saída