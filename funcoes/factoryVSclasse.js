// Classe
class Pessoa1 {
    constructor(nome) {
        this.nome = nome
    }

    falar = () => {
        console.log('Meu nome é', this.nome)
    }
}

const joao = new Pessoa1('João')
joao.falar()

// Função Factory
const Pessoa2 = nome => { return { falar: () => console.log('Meu nome é', nome) } }
const eu = Pessoa2('Dahan')
eu.falar()

// Função construtora

function Pessoa3(nome) {
    this.nome = nome
    this.falar = () => console.log('Meu nome é', this.nome)
}

const marcus = new Pessoa3('Marcus')
marcus.falar()