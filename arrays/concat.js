// concat(): concatena um ou mais valores em outro array

const filhas = ['Eleonor', 'Bianca']
const filhos = ['Enzo', 'Itauan']

const herdeiros = filhas.concat(filhos, 'Aquele da pulada de cerca')

console.log('Filhas:', filhas)
console.log('Filhos:', filhos)
console.log('Geral:',herdeiros)

console.log()
console.log(['array'].concat([1, 2], [3, 4], 5, [[6], [7]]))