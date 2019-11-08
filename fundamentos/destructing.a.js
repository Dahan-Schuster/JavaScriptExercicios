// ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    habilidades: [
        'gritar',
        'correr',
        'rolar',
        'chorar',
        'rir',
        'comer',
        'dormir'
    ],
    pais: {
        mae: {
            nome: 'Pedro',
            idade: 37
        },
        pai: {
            nome: 'Lucas',
            idade: 29
        }
    }
}

const { nome: n, idade: i } = pessoa
console.log(n, i)
console.log()
const { sobrenome, isBacuri = true } = pessoa
console.log(sobrenome, isBacuri)
console.log()
const { pais: { mae: { nome } } } = pessoa
console.log(nome)
console.log()
const { habilidades } = pessoa
console.log(habilidades)