var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var N = parseInt(lines.shift())
var divisor = 2

console.log(divisor)

for (var i = N; i <= 10000; i++) {
    if (i % N == divisor) {
        
        console.log(i)
    }
}