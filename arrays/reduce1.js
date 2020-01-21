// reduce(): itera por uma array aplicando uma função em cada item e acumulando os resultados em um único valor
const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]
console.log('Notas:', alunos.map(a => a.nota))

// irá aplicar o reduce apenas nas notas dos alunos [alunos.map(a => a.nota)]
const resultado = alunos.map(aluno => aluno.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual // irá somar todas as notas e armazenar na const resultado
}, 15)  // irá começar a soma com o valor inicial 15

console.log('15 + 1.3 + 9.2 + 9.8 + 8.7 =', resultado)