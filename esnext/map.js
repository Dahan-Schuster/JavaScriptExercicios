// Estrutura de dados map
// o map (não confunda com a função Array.prototype.map()) 
// é conhecido no mundo C/C++/C#, Python e outras linguagens
// Se trata de uma estrutura de dados de chave : valor

// * Tá, mas objetos já não são assim? *

// O que o map tem de especial são suas chaves
// Com o map é possível definir objetos, funções, números etc
// como chaves de atributos. Ele funciona como um objeto, porém
// com maior flexibilidade para definir os 'nomes' dos atributos

// Vejamos...
const tecnologias = new Map()
tecnologias.set('react', { framework: false }) // Map<any, any>.set(key: any, value: any
tecnologias.set('angular', { framework: true} )
console.log(tecnologias.get('react'))

console.log()
// Nada muito diferente de um objeto até então

const chavesVariadas = new Map([
    [function() {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
    [true, 'Boolean']
])

console.log(chavesVariadas)