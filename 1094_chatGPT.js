var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n");

var N = parseInt(lines.shift());

const animais = {
    'R': 'ratos',
    'S': 'sapos',
    'C': 'coelhos'
};

for(var i = 0; i < N; i++){
    var [quantidade, TipoDeAnimal] = lines[i].split(" ");
   
    switch (TipoDeAnimal) {
        case 'C':
            console.log("Total de coelhos: " + quantidade + " " + animais[TipoDeAnimal]);
            break;
        case 'S': 
            console.log("Total de sapos: " + quantidade + " " + animais[TipoDeAnimal]);
            break;
        case 'R':
            console.log("Total de ratos: " + quantidade + " " + animais[TipoDeAnimal]);
            break;
    }   
}
