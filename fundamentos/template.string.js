const nome = 'Dahan'
const concatenacao = 'Olá ' + nome + '!'

const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template)

console.log(`1 + 1 = ${1 + 1}`) // interpolação

const up = texto => texto.toUpperCase() // arrow function
console.log(`Ei... ${up('cuidado')}!`) // função dentro de template string