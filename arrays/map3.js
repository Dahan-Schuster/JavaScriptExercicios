// Implementando o próprio map()
Array.prototype.map2 = function(callback) {
    const output = new Array
    for (let i = 0; i < this.length; i++) {
        output.push(callback(this[i], i, this))
    }
    return output
}

const carrinho = [
    '{"nome" : "Borracha", "preco": 3.45}',
    '{"nome" : "Caderno", "preco": 13.90}',
    '{"nome" : "Kit de Lapis", "preco": 41.22}',
    '{"nome" : "Caneta", "preco": 7.50}'
]

// Retornar um array com apenas os preços
const $ = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`
const extrairPreco = json => $(JSON.parse(json).preco)

const res = carrinho.map2(extrairPreco)
console.log('Preços:', res)
console.log(carrinho)