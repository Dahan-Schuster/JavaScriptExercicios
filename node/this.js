// Diferente do navegador, em que this === window retornaria true,
// no node o objeto global não é igual ao módulo em execução
console.log('this === global ->', this === global)

// Mas o this é um objeto que representa o módulo, né?
// Então this === module deve retornar true!!! Não.
// No node, this referencia o objeto module.exports,
// o que permite exportar valores usando this.atributo
// (veja o arquivo exports.js), assim como o objeto exports
console.log('this === module ->', this === module)
console.log('this === exports ->', this === exports)
console.log('this === module.exports ->', this === module.exports)

// Mas vamos lembrar que o this muda de acordo com escopo...
function logThis() {
    console.log('Dentro de uma função...')
    console.log('this === module.exports ->', this === module.exports)
    // E pasmen! O this referencia o global quando em uma função!!
    console.log('this === global ->', this === global)
}

logThis()