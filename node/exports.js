// this == exports == module.exports
console.log(module.exports === this)
console.log(module.exports === exports)

// O this e o exports apenas referenciam o module.exports
// Quando damos atributos ao this ou ao exports, eles são
// enviados para o module.exports
this.a = 1
exports.b = 2
module.exports.c = 3

console.log(module.exports)

// Por isso, quando fazemos algo do tipo:
exports = {}

// Não estamos transformando o module.exports 
// em um objeto vazio, confira:
console.log(module.exports)

// Estamos apenas removendo a referência que o exports
// faz ao modules.exports, fazendo com que algo como
// exports.d = 4 pare de funcionar, confira:
exports.d = 4
console.log(module.exports)

// Por isso, ao invés de exportar objetos usando:
exports = {nome: 'Objeto Inútil', serUtil() { return undefined }}

// Devemos usar o module.exports:
module.exports = {nome: 'Objeto Útil', serUtil() { return 'Estou sendo útil!'}}

// Para conferir, vamos ao arquivo testeExports.js
console.log("\n*** Fim do arquivo exports.js ***\n")