// Para importar módulos de terceiros, basta seguir dois passos:
// 1) instalar via npm (ou outro gerenciador de pacotes do node, como o yarn)
//  ex.: "npm install lodash" ou "yarn add lodash" no terminal aberto na pasta do projeto

// 2) importá-lo sem informar o caminho relativo (usando './' ou '../' ou similares)
//  exemplo a seguir
const lodash = require('lodash')

// utilizando a biblioteca recém importada
setInterval(() => console.log(lodash.random(0, 9)), 500)

// Bibliotecas instaladas globalmente podem ser acessadas pelo terminal
// Por exemplo, esse arquivo foi executado usando a biblioteca nodemon,
// que consegue executar uma aplicação node e resetar automaticamente sempre
// que o arquivo é alterado e salvo
// Para testar, instale o nodemon globalmente usando "sudo npm i -g nodemon"
// Depois, na pasta node/, execute "nodemon usandoModulosDeTerceiros.js"
// e veja o código sendo executando. Depois faça alguma alteração no output,
// salve e veja o nodemon reiniciando automaticamente. 