// novo tipo de laço for

// conhecemos o for (let i = 0; i < n; i ++) {}
// o for (let nome in listaDeNomes) {}
// e o array.forEach((valor, chave, array) => {})

// Agora conheça o for (let letra of "Palavra") {}
// O for...of itera em cima dos VALORES
// É parecido com o for...in, mas este itera em cima das CHAVES
// Bora ver...

const forIn = []
for (let letra in 'Palavra 1') { forIn.push(letra) }
const forOf = []
for (let letra of 'Palavra 2') { forOf.push(letra) }

console.log('Resultado do for...in:', forIn)
console.log('Resultado do for...of:', forOf)

console.log() // Mais exemplos...

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

const assuntos = []
for (let assunto of assuntosMap) {
    assuntos.push(assunto)
}

const assuntosChaves = []
for (let assunto of assuntosMap.keys()) {
    assuntosChaves.push(assunto)
}

const assuntosValores = []
for (let assunto of assuntosMap.values()) {
    assuntosValores.push(assunto)
}

const assuntosChVl = []
for (let [ch, vl] of assuntosMap.entries()) {
    assuntosChVl.push({ ch : vl })
}

console.log('Assuntos:', assuntos)
console.log('Chaves dos Assuntos:', assuntosChaves)
console.log('Valores dos Assuntos:', assuntosValores)
console.log('Chaves => Valores dos Assuntos:', assuntosChVl)


