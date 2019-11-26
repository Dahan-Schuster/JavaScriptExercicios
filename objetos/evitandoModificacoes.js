// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Carro', preco: 50000, tag:'promoção' 
})
console.log('Extensível:', Object.isExtensible(produto))

console.log(produto)
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

console.log()

// Object.seal
const pessoa = {nome: 'Danielly', idade: 19}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

console.log(pessoa)
pessoa.sobrenome = 'Silva'
delete pessoa.idade
pessoa.nome = 'Honey'
console.log(pessoa)

// Object.freeze = selado + atributos constantes