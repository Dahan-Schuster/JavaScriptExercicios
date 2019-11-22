// 'pessoa' possui um endereço de memória:
// pessoa -> 0xA0 -> {...}
// Por ser constante, este endereço não pode mudar
const pessoa = { nome: 'João'}
console.log(pessoa.nome)

// O atributo 'nome' não é constante, por isso pode mudar
pessoa.nome = 'Pedro'
console.log(pessoa.nome)

// Se tentar mudar a própria pessoa, irá dar erro
// Alterar o endereço de memória da constante em si não é permitido:
// pessoa -> 0xA1 -> {...} // tenta apontar para ou objeto
//pessoa = {nome: 'Eu sou um erro'}

// Para tornar os atributos do objeto constantes,
// a função abaixo é utilizada
Object.freeze(pessoa)
pessoa.nome = 'Gabriel'

// Além de tornar os atributo, o objeto também
// congela a quantidade de atributos
pessoa.idade = 30
console.log(pessoa)

// Exemplo de utilização do freeze
const objConstante = Object.freeze({tipo : 'Constante'})
objConstante.tipo = 'Variável'
console.log(objConstante)
