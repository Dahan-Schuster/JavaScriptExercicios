console.log('String é uma...', typeof String)
console.log('Array é uma...', typeof Array)
console.log('Object é uma...', typeof Object)

// Com isso tu pode fazer...
String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('String revertida por uma função criada manualmente:', 'JavaScript é o poder!'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log('Primeiro elemento do array conseguido por uma função criada manualmente:', ['a', 'b', 'c'].first())

// Códigos inapropriados para menores...
// NUNCA sobreponha métodos já existentes!!!
String.prototype.toString = function() {
    return 'atiE'
}

console.log('Você acha que isso vai dar certo?'.reverse())