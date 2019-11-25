const pai = {nome: 'Rony', corCabelo: 'ruivo'}

// Atribuindo protótipo a partir da função create
const cacula = Object.create(pai)
// Sombreando o atributo nome
cacula.nome = 'Hanna'
console.log('Filha caçula: ', cacula)
console.log('Atributo do protótipo recebido por Object.create():', cacula.corCabelo)

// Atribuindo protótipo e atributos em uma mesma função
const domeio = Object.create(pai, {
    nome: {
        value: 'Hihanna',
        writable: false,
        enumerable: true
    }
})

console.log('Filha do meio:', domeio)
console.log(`${domeio.nome} tem cabelo ${domeio.corCabelo}`)

console.log('Keys da caçula:', Object.keys(cacula))
console.log('Keys da do meio:', Object.keys(domeio))

console.log('Atributos da caçula:')
for (let key in cacula) {
    cacula.hasOwnProperty(key) ?
        console.log('Atributo do objeto:', key) : console.log('Atributo do protótipo:', key)
}