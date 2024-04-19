var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var palavra1 = lines.shift()
var palavra2 = lines.shift()
var palavra3 = lines.shift()

    if(palavra1 == "vertebrado" && palavra2 == "ave" && palavra3 == "carnivoro"){ 
        console.log("aguia")    
    } 
    
    if (palavra1 == "vertebrado" && palavra2 == "ave" && palavra3 == "onivoro"){
        console.log("pomba")
    } 
    
    if (palavra1 == "vertebrado" && palavra2 == "mamifero" && palavra3 == "onivoro"){
        console.log("homem")
    } 
    
    if (palavra1 == "vertebrado" && palavra2 == "mamifero" && palavra3 == "herbivoro"){
        console.log("vaca")
    } 
    
    if(palavra1 == "invertebrado" && palavra2 == "inseto" && palavra3 == "hematofago"){
        console.log("pulga")
    }
    
    if(palavra1 == "invertebrado" && palavra2 == "inseto" && palavra3 == "herbivoro"){
        console.log("lagarta")
    }
    
    if(palavra1 == "invertebrado" && palavra2 == "anelideo" && palavra3 == "hematofago"){
        console.log("sanguessuga")
    }
    
    if(palavra1 == "invertebrado" && palavra2 == "anelideo" && palavra3 == "onivoro"){
        console.log("minhoca")
    }
