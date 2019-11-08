// Chave/valor
const saudacao = 'Yo!' // contexto léxico 1

function exec() {
    const saudacao = 'Ho!' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de chave -> valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Dos Bobos',
        numero: 0
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)