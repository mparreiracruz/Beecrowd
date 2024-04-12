var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var N = parseInt(lines.shift())

for (var i = 1; i <= N; i++) {
    if (i % 2 == 1) {
        console.log(i)
    }
}