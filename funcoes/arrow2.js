function Pessoa() {
    this.idade = 0

    setInterval(() => {
        // Em uma arrow funcion, o this não varia
        // Sempre referenciará o contexto em que foi escrito
        // nesse caso, Pessoa
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa