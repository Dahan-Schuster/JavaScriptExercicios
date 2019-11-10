// Criar muitos objetos pode ser repetitivo...

const maconha = {
    nome: 'Cannabis',
    apelido: 'Maconha',
    substancia: 'THC'
}

const alcool = {
    nome: 'Destilado',
    apelido: 'Bebida',
    substancia: 'Álcool'
}

// ...

// Para isso existem as funções factory

function criarDroga(nome = 'Nome científico', apelido = 'Nome comum', substancia = 'Substância ativa') {
    return {
        nome,
        apelido,
        substancia
    }
}

console.log(maconha)
console.log(alcool)
console.log(criarDroga('Ácido lisérgico', 'LSD', 'Dietilamida do Ácido Lisérgico'))