// Armazenando uma função numa variável
const imprimirSoma = function(a = 0, b = 0) {
    console.log(a + b)
}
imprimirSoma(2, 3)

// Armazenando uma arrow function
const soma = (a = 0, b = 0) => {
    return a + b
}
console.log(soma(5, 5))

// Retorno implícito
const sub = (a = 0, b = 0) => a - b
console.log(sub(0, 1))

// Muito pequena aaa
const print = x => console.log(x)
print('yo')