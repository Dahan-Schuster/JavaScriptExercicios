// Mesmo exercício do arquivo callbacksHell.js
// Porém do jeito certo... Usando promises :)

const http = require('http')
const site = 'http://files.cod3r.com.br/curso-js'

const getTurma = letra => {
    const url = `${site}/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            // o evento 'data' é disparado quando os dados começam a chegar
            // eles não chegam de uma vez só, então precisamos concatená-los
            res.on('data', dados => {
                resultado += dados
            })

            // o evento 'end' é disparado quando todos os dados já chegaram
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (error) {
                    reject(error)
                }
            })
        })
    })
}

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')/*, getTurma('D') */])
    .then(turmas => [].concat(...turmas)) // concatena os resultados das chamadas em um único array
    .then(alunos => alunos.map(alunos => alunos.nome))
    .then(res => console.log(res))
    .catch(error => console.log(error))