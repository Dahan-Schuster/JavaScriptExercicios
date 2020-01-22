// Veja antes o arquivo global.js

require('./global') // não é necessário atribuir o require a um objeto aqui, nada foi exportado

console.log(global.saudacao())
console.log(global.projeto)

// Tome cuidado ao ficar usando o global por aí!
// Modificá-lo é tão ruim quanto mexer no window do navegador
// Outras bibliotecas dependem desse objeto e podem estar
// esperando um atributo e/ou um valor. Caso você altere-o,
// comportamentos inesperados poderão ocorrer.

// Por que não usar o sistema de módulos para compartilhar dados?
// Criar atributos dentro do global é perigoso. Ao invés disso,
// crie um módulo e ponha seus dados lá, depois exporte-os com
// o module.exports. Muito mais seguro e tranquilo!