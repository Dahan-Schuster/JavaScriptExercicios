function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

// Todos objetos criados por um construtor possuem o mesmo protótipo
console.log(obj1.__proto__ === obj2.__proto__)

// O protótipo de um objeto criado por uma função construtora aponta para o 'prototype' da função
console.log(MeuObjeto.prototype === obj2.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {nome: 'Danielly'}
obj3.__proto__ = MeuObjeto.prototype
obj3.falar()

// Resumindo a loucura...
console.log('O atributo __proto__ de um objeto instanciado aponta para o prototype do construtor:', (new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log('O atributo __proto__ de uma função aponta para o prototype de Function:', MeuObjeto.__proto__ === Function.prototype)
console.log('O atributo __proto__ de Function aponta para o prototype de Object:', Function.prototype.__proto__ === Object.prototype)
console.log('O atributo __proto__ de Object é null (mas não undefined):', Object.prototype.__proto__ === null)

