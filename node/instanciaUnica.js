// O node faz cache dos módulos importados
// realizando uma única instanciação e usando
// a instância cacheada a partir de então (singleton)
module.exports = {
    valor: 1,
    increment() {
        this.valor++
    }
}

// Vá para o arquivo instanciaNova.js