const escola = "Cod3r"

console.log(escola.charAt(4)) // 'r'
console.log(escola.charAt(6)) // '' (não existe)
console.log(escola.charCodeAt(3)) // valor na tabela ASCII
console.log(escola.indexOf('3'))
console.log(escola.indexOf(3))

console.log(escola.substring(1))
console.log(escola.substring(0, 4))
console.log(escola.substr(0, 4))

console.log('Escola '.concat(escola).concat('!'))

console.log(escola.replace(/\d/, 'e')) // regex

console.log('Ana,Maria,Pedro'.split(','))
console.log('Ana,Maria,Pedro'.split(/[Aa]/))