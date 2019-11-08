
// função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma()          // undefined
imprimirSoma(2)         // undefined
imprimirSoma(2, 3)      // 5
imprimirSoma(2, 8, 4)   // 10

console.log('------')

// função com retorno
function soma(a = 0, b = 0) {
    return a + b
}

console.log(soma())
console.log(soma(2))
console.log(soma(2, 2))
console.log(soma(7, 3, 4))
