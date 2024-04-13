/**beecrowd | 1048
Aumento de Salário
Por Neilor Tonin, URI BR Brasil

Timelimit: 1
A empresa ABC resolveu conceder um aumento de salários a seus funcionários de acordo com a tabela abaixo:


Salário	                    Percentual de Reajuste                 
0 - 400.00                  15%
400.01 - 800.00             12&
800.01 - 1200.00            10%
1200.01 - 2000.00           7%
Acima de 2000.00            4%     

Leia o salário do funcionário e calcule e mostre o novo salário, bem como o valor de reajuste ganho e o índice reajustado, em percentual.

Entrada
A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.

Saída
Imprima 3 linhas na saída: o novo salário, o valor ganho de reajuste (ambos devem ser apresentados com 2 casas decimais) e o percentual de reajuste ganho, conforme exemplo abaixo.

Exemplo de Entrada	            Exemplo de Saída
400.00                          Novo salario: 460.00
                                Reajuste ganho: 60.00
                                Em percentual: 15 %


800.01                          Novo salario: 880.01
                                Reajuste ganho: 80.00
                                Em percentual: 10 %



2000.00                         Novo salario: 2140.00
                                Reajuste ganho: 140.00
                                Em percentual: 7 %
*/

var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n');
var salario = parseFloat(lines.shift()).toFixed(2);//Entrada 01

if(salario > 0 && salario <= 400.00) {
    var reajusteDe15 = (salario * 1.15).toFixed(2)
    var reajusteGanho15 = (reajusteDe15 - salario).toFixed(2)
    console.log("Novo salario: " + reajusteDe15)
    console.log("Reajuste ganho: " + reajusteGanho15)
    console.log("Em percentual: 15 %")
}
    if(salario >=400.01 && salario <= 800.00) {
        var reajusteDe12 = (salario * 1.12).toFixed(2)
        var reajusteGanho12 = (reajusteDe12 - salario).toFixed(2)
        console.log("Novo salario: " + reajusteDe12)
        console.log("Reajuste ganho: " + reajusteGanho12)
        console.log("Em percentual: 12 %")
    }
        if(salario >= 800.01 && salario <= 1200.00) {
            var reajusteDe10 = (salario * 1.10).toFixed(2)
            var reajusteGanho10 = (reajusteDe10 - salario).toFixed(2)
            console.log("Novo salario: " + reajusteDe10)
            console.log("Reajuste ganho: " + reajusteGanho10)
            console.log("Em percentual: 10 %")                
        }
            if(salario >= 1200.01 && salario <= 2000.00) {
                var reajusteDe7 = (salario * 1.07).toFixed(2)
                var reajusteGanho7 = (reajusteDe7 - salario).toFixed(2)
                console.log("Novo salario: " + reajusteDe7)
                console.log("Reajuste ganho: " + reajusteGanho7)
                console.log("Em percentual: 7 %")
            }
                if(salario > 2000.00) {
                    var reajusteDe4 = (salario * 1.04).toFixed(2)
                    var reajusteGanho4 = (reajusteDe4 - salario).toFixed(2)
                    console.log("Novo salario: " + reajusteDe4)
                    console.log("Reajuste ganho: " + reajusteGanho4)
                    console.log("Em percentual: 4 %")
                }