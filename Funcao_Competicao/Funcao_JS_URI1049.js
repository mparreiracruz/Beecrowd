/*
beecrowd | 1049
Animal
Por Neilor Tonin, URI  Brasil
Timelimit: 
https://judge.beecrowd.com/pt/problems/view/1049
*/

var input = require('fs').readFileSync('stdin1049', 'utf8');
var lines = input.split('\n');

var x1 = lines.shift().replace('\r', '');
var x2 = lines.shift().replace('\r', '');
var x3 = lines.shift().replace('\r', '');

function identificarVertebrado(tipo, classe, alimentacao) {
    if (classe == "ave") {
        return identificarAve(alimentacao);
    } else if (classe == "mamifero") {
        return identificarMamifero(alimentacao);
    }
}

function identificarAve(alimentacao) {
    if (alimentacao == "carnivoro") {
        return "aguia";
    } else {
        return "pomba";
    }
}

function identificarMamifero(alimentacao) {
    if (alimentacao == "onivoro") {
        return "homem";
    } else {
        return "vaca";
    }
}

function identificarInvertebrado(tipo, classe, alimentacao) {
    if (classe == "inseto") {
        return identificarInseto(alimentacao);
    } else if (classe == "anelideo") {
        return identificarAnelideo(alimentacao);
    }
}

function identificarInseto(alimentacao) {
    if (alimentacao == "hematofago") {
        return "pulga";
    } else {
        return "lagarta";
    }
}

function identificarAnelideo(alimentacao) {
    if (alimentacao == "hematofago") {
        return "sanguessuga";
    } else {
        return "minhoca";
    }
}

function identificarAnimal(tipo, classe, alimentacao) {
    if (tipo == "vertebrado") {
        return identificarVertebrado(tipo, classe, alimentacao);
    } else if (tipo == "invertebrado") {
        return identificarInvertebrado(tipo, classe, alimentacao);
    }
}

var resultado = identificarAnimal(x1, x2, x3);
console.log(resultado);
