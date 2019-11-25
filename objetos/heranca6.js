function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

// método normal 
// Operador new aponta o protótipo do objeto para a função construtora
const aula1 = new Aula('Introdução', 123)
const aula2 = new Aula('Primeiros passos', 456)
console.log('Operador new:', aula1, aula2)

// simulando o new...
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Introdução', 123)
const aula4 = novo(Aula, 'Primeiros passos', 456)
console.log('Operador novo:', aula3, aula4)