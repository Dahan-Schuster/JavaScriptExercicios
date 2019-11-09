function Pessoa() {
    this.idade = 0

    // armazenando o this em uma constante que não irá mudar
    const self = this

    setInterval(function() {
        self.idade++
        console.log(self.idade) // se usar o this aqui, estará referenciando a função setInterval
    }/*.bind(this)*/, 1000)
}

new Pessoa