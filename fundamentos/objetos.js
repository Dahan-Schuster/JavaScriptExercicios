const produto_1 = {}
produto_1.nome = 'Celular de última geração'
produto_1.preco = 4998.90
produto_1.categoria = {nome: 'Eletrônicos', desc: 'Equipamentos eletrônicos'}

// Evitar atributos com espaço
produto_1['Desconto legal'] = 0.40

console.log(produto_1)

const produto_2 = `{
    "nome": "Camisa Polo",
    "preco": 79.90,
    "categoria": {
        "nome": "Vestuária",
        "desc": "Roupas e etc"
    }
}`

console.log(produto_2)
console.log(JSON.parse(produto_2))