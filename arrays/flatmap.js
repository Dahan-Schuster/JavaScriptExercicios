// Explora a utilidade da função Array.flatmap, não nativa no JS

// Objetivo: extrair as notas dos alunos independente da turma
const escola = [{  /* array de turmas */
    nome: 'Turma JavaScript',
    alunos: [{
        nome: 'Dahan',
        nota: 7.0
    }, {
        nome: 'Danielly',
        nota: 8.3
    }]
}, {
    nome: 'Turma PHP',
    alunos: [{
        nome: 'Nicole',
        nota: 9.1
    }, {
        nome: 'Adailton',
        nota: 8.5
    }]    
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)
const notasEscola = escola.map(getNotasDaTurma)

console.log('Resultado usando o map():', notasEscola) // [ [ 7, 8.3 ], [ 9.1, 8.5 ] ]

// Mas e se quisermos o resultado em um único array?
// A função concat faz mais ou menos isso, pois
// se exercutarmos [].concat([ [ 7, 8.3 ], [ 9.1, 8.5 ] ])
// iremos ter [ 7, 8.3, 9.1, 8.5  ]
// Mas para isso é necessário concatenar a matriz a um array vazio 
// Aí entra o conceito de FlatMap! Ele não existe nativamente no ES,
// mas podemos implementá-lo:

Array.prototype.flatMap = function(callback) {
    // O que o código a seguir faz:
    // envia o resultado do "map(callback)" para o método concat(),
    // chamando o concat() em cima do array vazio ( [] )
    // Para relembrar o apply(), veja o arquivo funcoes/call&apply.js
    return Array.prototype.concat.apply([], this.map(callback))
}

// Okay, agora vejamos...

const notasEscolaFlatMap = escola.flatMap(getNotasDaTurma)
console.log('Resultado usando o flatMap():', notasEscolaFlatMap) // [ 7, 8.3, 9.1, 8.5 ]