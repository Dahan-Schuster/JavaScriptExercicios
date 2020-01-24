// Forma interessante de usar o tagged template na vida real
function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        // intercalando o array de partes com o de valores, é possível remontar a string
        resultado.push(partes[indice], valor) 
    })
    return resultado.join('')
}

const preco = 29.99

console.log(real `1x de ${preco} ou 3x de ${preco/2.5}`)