const moduloA = require('../../moduloA')

// usar caminhos absolutos não é uma boa prática! prende o código ao computador em que foi escrito
const moduloB = require('/home/moobi/workspace/JavaScriptExercicios/node/moduloB.js')
console.log(moduloA.yo)
console.log(moduloB.falarMensagem())

// usar o arquivo index.js dentro de uma pasta irá economizar tempo e linhas de código
// dê uma olhadinha lá no pastaC/index
const {hehe, lodash, express} = require('./pastaC') // o node automaticamente busca o index.js
console.log(hehe)
console.log('O pastaC/index.js também importou os seguintes objetos:')
console.log('express ->', express)
console.log('lodash ->', lodash)