// Veja antes o arquivo instanciaUnica.js

// Para driblar o cache do node usamos uma função 
// factory, pois ela retorna um novo objeto
module.exports = () => {
    return {
        valor: 1,
        increment() {
            this.valor++
        }
    }
}

// Vá para o arquivo instanciaNovaVsUnica.js