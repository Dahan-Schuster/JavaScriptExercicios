// Primeiro veja o arquivo passandoParametros.js

// Importando o arquivo, recebemos de volta uma função
// Passando os dados que ela precisa para funcionar, 
// recebemos de volta o resultado da função
const saudacoes = require('./passandoParametros')('Dany', 'Dahan', 'Ed', 'Lins')

console.log(saudacoes)


// Para pensar: não seria uma violação do princípio da inversão de dependências
// acoplar um módulo em outro, de modo que se um módulo deixar de existir o outro
// irá parar de funcionar? Talvez seja melhor utilizar o padrão utilizado pelo
// node e não criar módulos que dependam de outros para existir