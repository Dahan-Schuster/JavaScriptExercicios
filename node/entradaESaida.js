// Usando o objeto process para ler e escrever dados usando os terminais padrões
// Para leitura, a entrada de dados padrão é o teclado
// Para escrita, a saída de dados padrão é o monitor

// No node, é possível saber quais dados foram enviados via teclado
// usando o objeto process. Os dados são inseridos no arquivo atráves da linha
// de comando. Sabe as flags que a gente passa pros comandos? Algo como
// 'git commit -a' ou 'sudo rm -rf /'. Essas flags podem ser acessadas
// no node dessa forma:
const modoAnonimo = process.argv.indexOf('-a') !== -1
//console.log('Flag -a definida:', modoAnonimo) // execute 'node entradaESaida.js -a' para true

if (modoAnonimo) {
    // stdout: standart out, i.e., saída padrão
    process.stdout.write('Entrou no modo anônimo, hein? hehehe\n')
} else {
    process.stdout.write('Por favor, informe seu nome: ')
    // stdin: standart in, i.e., entrada padrão
    // evento 'data' ocorre ao digitar algo e teclar enter
    // na linha abaixo, entamos definindo um handler para o
    // evento 'data' disparado na stdin
    process.stdin.on('data', data => { 
        // o enter, i.e., a quebra de linha, também é enviada no evento 'data'
        const nome = data.toString().replace('\n', '') // é melhor tirarmos ela dalí!

        process.stdout.write(`Seja bem vindo, ${nome}!\n`)

        process.exit() // encerra o processo
    })
}

