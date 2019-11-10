// Call e Apply: formas de chamar uma função
// Se diferenciam na forma com os parâmetros são passados

// Função que será chamada
function getPreco(imposto = 0.1, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

// Teste inicial: chamando a função como atributo de um objeto
const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}
console.log(produto.getPreco())

// Teste 2: usando o call() e o apply()

// call(contexto, parametros da função)
console.log(getPreco.call(produto, '0.13', '$'))

// apply(contexto, array de parâmetros da função)
console.log(getPreco.apply(produto, ['0.25', 'R$']))