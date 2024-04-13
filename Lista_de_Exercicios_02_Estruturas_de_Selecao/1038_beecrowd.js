/*
beecrowd | 1038
Lanche
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.

Entrada
O arquivo de entrada contém dois valores inteiros correspondentes ao código e à quantidade de um item conforme tabela acima.

Saída
O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas após o ponto decimal.

Exemplo de Entrada	            Exemplo de Saída
3 2                             Total: R$ 10.00       


4 3                             Total: R$ 6.00


2 3                             Total: R$ 13.50 
*/

var input = require("fs").readFileSync("stdin","utf8");

var lines = input.split("\n");
var line1 = lines.shift();
var mainline = line1.split(" ");

var numeroDoCodigo = parseInt(mainline.shift());
var quantidadeItem = parseInt(mainline.shift());
var especificacao;

switch (numeroDoCodigo) {
    case 1:
        especificacao = "Cachorro Quente";
        var valor = 4.00;        
        var valorAserPago = quantidadeItem * valor;
        break;
    case 2:
        especificacao = "X-Salada";
        var valor = 4.50;      
        var valorAserPago = quantidadeItem * valor;
        break;
    case 3:
        especificacao = "X-Bacon";
        var valor = 5.00;      
        var valorAserPago = quantidadeItem * valor;
        break;
    case 4:
        especificacao = "Torrada simples";
        var valor = 2.00;      
        var valorAserPago = quantidadeItem * valor;
        break;
    case 5:
        especificacao = "Refrigerante";
        var valor = 1.50;      
        var valorAserPago = quantidadeItem * valor;
        break;
    }

    console.log("Total: R$ " + valorAserPago.toFixed(2));