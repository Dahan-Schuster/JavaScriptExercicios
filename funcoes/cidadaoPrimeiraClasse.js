// Função em JS é First-Class Object (Citizens)
// Ou seja, suporta todas as operações geralmente 
// disponíveis em outros objetos
// Higher-order function

// Criar uma função de forma literal
function fun1() {}

// Armazenar uma função numa variável
const fun2 = function() {}

// Armazenar em um array
const array = [function(a, b) { return a + b }, function(b) {}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar um atributo de um objeti
const obj = {
    falar: function() {
        return 'Yo!'
    }
}
console.log(obj.falar())

// Passar como parâmetro
function run(fun) {
    return fun()
}
console.log(run(obj.falar))

// Uma função pode retornar/conter outra função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(2, 7)(1)
const noveMais = soma(2, 7)
noveMais(1)