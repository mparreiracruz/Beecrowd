/*
beecrowd | 1071
Soma de Impares Consecutivos I
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia 2 valores inteiros X e Y. A seguir, calcule e mostre a soma dos números impares entre eles.

Entrada
O arquivo de entrada contém dois valores inteiros.

Saída
O programa deve imprimir um valor inteiro. Este valor é a soma dos valores ímpares que estão entre os valores fornecidos na entrada que deverá caber em um inteiro.

Exemplo de Entrada          Exemplo de saída    
6                           5
-5


15                          13
12


12                          0
12
*/
var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var X = parseInt(lines.shift())
var Y = parseInt(lines.shift())

const valorMinimo = Math.min(X, Y) + 1//Math.min determina o valor mínimo entre X e Y
/*O + 1 adicionado à constante valorMinimo é necessário para garantir que o intervalo inclua ambos os números X e Y.
Se X for 5 e Y for 10, sem o + 1, o intervalo seria de 5 a 10, excluindo o 5. Adicionando + 1, o intervalo se torna de 5 a 11, incluindo o 5. Isso é importante porque você quer que a soma inclua todos os números ímpares entre X e Y, incluindo ambos os extremos.*/
const valorMaximo = Math.max(X, Y)//Math.max determina o maior valor entre X e Y
var somaImpares = 0

for(var i = valorMinimo; i < valorMaximo; i++) {
/*
var i = valorMinimo:variável i é atribuída ao valor de valorMinimo que será o valor inicial do contador.

i < valorMaximo: Ccondição de continuação do loop. Enquanto i for menor que valorMaximo, o loop continuará será executado.

i++: É o incremento. A cada iteração do loop, o valor de i será incrementado em 1.
*/
    if(i % 2 != 0){
/*
Se i for ímpar (se o resto da divisão de i por 2 for diferente de zero), ele será adicionado à variável somaImpares.
*/        
        somaImpares = somaImpares + i
    }
}

console.log(somaImpares)