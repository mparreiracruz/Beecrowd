function calcularMedia(numeros){
    let soma = 0
    for (let numero of numeros){
        soma += numero  
    }
    let media = soma / numeros.length
    return media  
}

let mediaCalculada = calcularMedia([10, 20, 30, 40])
console.log("A média é: " + mediaCalculada)