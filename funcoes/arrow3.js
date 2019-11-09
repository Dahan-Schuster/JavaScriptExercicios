let compararComThis = function(param) {
    console.log('this === param ?', this === param)
}

// função normal chamada no contexto global
// this === global
compararComThis(global)

// definindo o this da função como o objeto obj
const obj = {}
compararComThis = compararComThis.bind(obj)

// this === obj !== global
compararComThis(global)
compararComThis(obj)

// Função arrow declarada dentro de um módulo.
// Dentro do Node, um arquivo é um módulo
// this !== global
let compararComThisArrow = param =>
    console.log('this === param ?', this === param)

compararComThisArrow(global)
compararComThisArrow(module.exports)
compararComThisArrow(this)

// bind não funciona em arrow functions
compararComThisArrow = compararComThisArrow.bind(obj)
compararComThisArrow(obj)

