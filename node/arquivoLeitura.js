// O node possui um módulo interno para leitura e manipulação
// de arquivos chamado File System. Neste exercício, vamos ler o arquivo.json

const file_system = require('fs')
const caminho = __dirname + '/arquivo.json'

// Primeiro, vamos ler o diretório atual e conferir se nosso arquivo está lá...
const dir = file_system.readdir(__dirname, (error, diretorio) => {
    if (!error) {
        if (diretorio.includes('arquivo.json')) {
            lerComSincronia()
            lerSemSincronia()
            importarELer()
        }
    } else {
        console.log(error)
    }
})


// Lendo arquivo de forma síncrona
// Não recomendado para operações com grande tempo de resposta
// (arquivos muito grandes, requisições em outros servidores etc),
// pois irá atrasar o Event Loop do node e aplicação
// só continuará quando o arquivo foir lido por completo
function lerComSincronia() {
    const conteudoSync = file_system.readFileSync(caminho, 'utf-8')
    console.log('Lido de forma síncrona:', conteudoSync)
}

// Lendo arquivo de forma assíncrona
// É necessário enviar uma função callback para ser
// chamada assim que a requisição terminar
function lerSemSincronia() {
    file_system.readFile(caminho, 'utf-8', (error, conteudoAssync) => {
        if (!error) {
            const config = JSON.parse(conteudoAssync)
            console.log('Banco de dados:', `${config.db.host}:${config.db.port}`)
        } else {
            console.log(error)
        }
    })
}

/* BÔNUS: para arquivos JSON, é possível apenas importar usando require */
function importarELer() {
    const conteudoRequired = require('./arquivo.json')
    console.log('Importado com require:', conteudoRequired)
}

// Ao rodar esse exercício, verá que o conteudoAssync foi logado depois do
// conteudoRequired, mesmo que tenha sido chamado antes. Isso acontece porque
// ele foi lido de forma assíncrona.