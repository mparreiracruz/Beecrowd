var input = require("fs").readFileSync("stdin","utf8");

var lines = input.split("\n");
var line1 = lines.shift();
var mainline = line1.split(" ");

var entradas = [];

var N1 = parseFloat(mainline.shift());
var N2 = parseFloat(mainline.shift());
var N3 = parseFloat(mainline.shift());
var N4 = parseFloat(mainline.shift());
var N5 = parseFloat(mainline.shift());

entradas.push();

var soma = N1 + N2 + N3 + N4 + N5;

if(entradas.length <= 5){
    console.log(soma.toFixed(1));
}







/*
let meuArray = [];
Pedindo ao usuário para inserir informações e adicionando ao array

let entrada1 = prompt("Digite o primeiro valor:");
let entrada2 = prompt("Digite o segundo valor:");
let entrada3 = prompt("Digite o terceiro valor:");

meuArray.push(entrada1);
meuArray.push(entrada2);
meuArray.push(entrada3);

console.log("Array final:", meuArray);
*/