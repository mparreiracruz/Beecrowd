/**
 A fórmula para calcular a área de uma circunferência é: area = π . raio2. Considerando para este problema que π = 3.14159:

- Efetue o cálculo da área, elevando o valor de raio ao quadrado e multiplicando por π.

Entrada
A entrada contém um valor de ponto flutuante (dupla precisão), no caso, a variável raio.

Saída
Apresentar a mensagem "A=" seguido pelo valor da variável area, conforme exemplo abaixo, com 4 casas após o ponto decimal. Utilize variáveis de dupla precisão (double). Como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".

Exemplos de Entrada              	Exemplos de Saída
2.00                                A=12.5664


100.64                              A=31819.3103


150.00                              A=70685.7750
*/

var input = require('fs').readFileSync('stdin', 'utf8');//configuracao de entrada
var lines = input.split('\n');//configuracao de saída

var raio = parseFloat(lines.shift());//Entrada
console.log("Digite o valor do raio: " + raio);//Entrada com pergunta ao usuário

var pi = 3.14159;//Entrada

var formulaArea = pi * (raio * raio);//Processamento

console.log('A=' + formulaArea.toFixed(4));//Saída