var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var X = parseInt(lines.shift())
var Y = parseInt(lines.shift())

var contadorEntreXY = 0
for (var i = X + 1; i < Y; i++) {
    contadorEntreXY++
    console.log(contadorEntreXY)
}

/**
 * 
for (var n = 1; n <= 100; n++) {
    if (n % 2 == 0) {
        console.log(n);
    }
}
 */