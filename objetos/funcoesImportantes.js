const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log('Keys:', Object.keys(pessoa))
console.log('Values:', Object.values(pessoa))
console.log('Entries:', Object.entries(pessoa))
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log('[Each entrie]', `${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false,
    writable: false,
    value: '12/08/2017'
})

pessoa.dataNascimento = '19/12/2019'
console.log('dataNascimento:', pessoa.dataNascimento, 'Keys:', Object.keys(pessoa))

// Concatenação de objetos (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)
console.log('Object.assign(dest, o1, o2):', obj)