function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(2))
console.log(soma(2, 2))
console.log(soma(1, 2, 3))
console.log(soma(1, 3, 3, 1))
console.log(soma(0.1, 2.7, 3.2, 4))