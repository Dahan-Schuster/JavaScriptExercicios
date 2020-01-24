// Uma forma de usar funções assíncronas como se fossem síncronas :v

// Vamos usar o mesmo exemplo do arquivo promisesHeaven.js
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

const obterAlunos = async () => {
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')

    return [].concat(turmaA, turmaB, turmaC)
} // retorna um objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))