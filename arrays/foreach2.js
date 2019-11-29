// Implementando o próprio forEach :D
Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(aprovado, index, array) {
    console.log(`${index + 1}º ${aprovado}`)
    console.log(array)
})