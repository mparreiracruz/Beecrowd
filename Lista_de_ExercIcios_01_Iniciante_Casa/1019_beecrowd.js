/*
beecrowd | 1019
Conversão de Tempo
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

Entrada
O arquivo de entrada contém um valor inteiro N.

Saída
Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.

Exemplo de Entrada	            Exemplo de Saída
556                             0:9:16


1                               0:0:1


140153                          38:55:53
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines.shift());//Entrada

var divisorHora = Math.floor(N / 3600);//Processamento 01
var dividisorMinuto = Math.floor((N % 3600) / 60);//Processamento 02    
var divisorSegundo = Math.floor((N % 3600) % 60);//Processamento 03

console.log(divisorHora + ":" + dividisorMinuto + ":" + divisorSegundo);//Saída