const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: false }
]

const alunosSaoBolsitas = alunos.map(aluno => aluno.bolsista)

// Desafio 1: todos os alunos são bolsistas?
const conferirSeTodosSaoBolsistas = (outrosSaoBolsistas, esseEhBolsista) => outrosSaoBolsistas && esseEhBolsista
const todosSaoBolsistas = alunosSaoBolsitas.reduce(conferirSeTodosSaoBolsistas, true)

console.log('Resposta desafio 1 ->', todosSaoBolsistas ? 'Sim' : 'Não')

// Desafio 2: Algum aluno é bolsista?
const conferirSeAlgumEhBolsista = (outrosSaoBolsistas, esseEhBolsista) => outrosSaoBolsistas || esseEhBolsista
const algumEhBolsista = alunosSaoBolsitas.reduce(conferirSeAlgumEhBolsista, false)

console.log('Resposta desafio 2 ->', algumEhBolsista ? 'Sim' : 'Não')