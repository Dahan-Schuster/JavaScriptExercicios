// Aqui vamos fazer um código porco usando callbacks
// para buscar JSONs na WEB

// Depois, em outro arquivo, vamos melhorar o código usando Promises
// Eu prometo ;)

// Em um exercício anterior fizemos uma requisição usando o Axios
// Porém o axios é baseado em promises, então não poderíamos ver os
// problemas de NÃO usar promises :v Vamos usar o http cru nesse caso...
const http = require('http')
const site = 'http://files.cod3r.com.br/curso-js'

const getTurma = (letra, callBack) => {
    const url = `${site}/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        // o evento 'data' é disparado quando os dados começam a chegar
        // eles não chegam de uma vez só, então precisamos concatená-los
        res.on('data', dados => {
            resultado += dados
        })

        // o evento 'end' é disparado quando todos os dados já chegaram
        res.on('end', () => {
            callBack(JSON.parse(resultado))
        })
    })
}

let nomes = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `Turma A: ${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `Turma B: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `Turma C: ${a.nome}`))
            console.log(nomes)  
        })
    })
})

// Agora saia desse callback hell e pule pro exercício promisesHeaven.js