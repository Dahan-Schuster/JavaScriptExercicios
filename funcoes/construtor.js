function Carro(velMax = 200, delta = 5) {
    // atributo privado
    let velAtual = 0

    // metodo público
    this.acelerar = () => {
        if (velAtual + delta <= velMax)
            velAtual += delta
        else velAtual = velMax
    }

    this.getVelocidadeAtual = () => velAtual
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

