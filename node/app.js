const fs = require('fs');

fs.writeFile('./bv-team.txt', 'melhor time', ()=> {
    console.log('terminei')
})

console.log('printei')