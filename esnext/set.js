// Estrutura de dados não indexada e que não aceita repetição
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians').add('Vasco').add('Flamengo')

console.log(times)
console.log(times.has('Vasco'))
console.log(times.has('vasco'))
console.log(times.delete('Vasco'))
console.log(times.has('Vasco'))
console.log(times.size)

const nomes = ['Dan', 'Lins', 'Scott', 'Gui', 'Lins', 'Tuxo', 'ka']
const nomesSet = new Set(nomes)
console.log(nomesSet)