const sequencia = {
    _valor: 1, // convenção para indicar que o valor não será acessado publicamente
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        this._valor = valor > this._valor ? valor : this._valor
    }
}

for (i = 0; i < 10; i++)
    console.log(sequencia.valor)

sequencia.valor = 2
console.log(sequencia.valor)

sequencia.valor = 20
console.log(sequencia.valor)