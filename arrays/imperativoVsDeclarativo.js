const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

// Vamos comparar abordagens Imperativas com Declarativas no cálculo da média das notas dos alunos

// Imperativa -> nenhum reuso, foco no COMO fazer
let totalImperativo = 0
for (let i = 0; i < alunos.length; i++) {
    totalImperativo += alunos[i].nota
}
const mediaImperativo = totalImperativo / alunos.length

console.log('Média (usando abordagem Imperativa):', mediaImperativo)

/******************************************/

// Declarativa -> funções reutilizáveis, foco no O QUE fazer
const getNota = aluno => aluno.nota                     // funções que
const soma = (x, y) => x + y                            // podem ser
const media = (soma, quantidade) => soma / quantidade   // reutilizadas

const totalDeclarativo = alunos.map(getNota).reduce(soma)       // a solução
const mediaDeclarativo = media(totalImperativo, alunos.length)  // em si

console.log('Média (usando abordagem Declarativa):', mediaDeclarativo)