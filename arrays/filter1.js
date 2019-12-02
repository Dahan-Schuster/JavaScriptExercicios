const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Sugador de Clitóris', preco: 1900, fragil: false },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: .99, fragil: false }
]

const isProductExpensive = product => product.preco >= 500
const isProductFragile = product => product.fragil

console.log('Produtos não frágeis ----->', produtos.filter(p => !p.fragil))
console.log('Produtos frágeis --------->', produtos.filter(p => p.fragil))
console.log('Produtos do tipo "copo" -->', produtos.filter(p => p.nome.toLocaleLowerCase().includes('copo')))
console.log('Produtos caros e frágeis ->',
    produtos
    .filter(p => isProductFragile(p))
    .filter(p => isProductExpensive(p)))
