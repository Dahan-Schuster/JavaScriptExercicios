// Em node, um arquivo representa um MÓDULO
// Um módulo possui suas informações (variáveis, funções) disponíveis apenas dentro de si
// Para disponibilizar dados para outros módulos, é preciso EXPORTAR o dado 
// Para pegar dados de outros módulos, é necessário IMPORTAR o dado

// Os seguintes dados serão importados no arquivo moduloCliente.js
this.yo = 'Yo!'
exports.ea = 'Ea!'
module.exports.oie = 'Oie!'

// this == exports == module.exports