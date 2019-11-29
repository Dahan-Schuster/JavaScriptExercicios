const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// Usando uma função normal
// A função forEach de um array recebe três parâmetros:
aprovados.forEach(function(aprovado, index, array) {
    console.log(`${index + 1}º ${aprovado}`)
    console.log(array)
})
console.log()
const exibirNomeDoAprovado = aprovado => console.log(aprovado)
aprovados.forEach(exibirNomeDoAprovado)