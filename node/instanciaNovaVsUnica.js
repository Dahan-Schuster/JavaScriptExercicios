// Veja antes os arquivos instanciaUnica.js e instanciaNova.js, nessa ordem
const contatorA = require('./instanciaUnica')
const contatorB = require('./instanciaUnica')

const novoContador = require('./instanciaNova')

// Como retornamos uma função factory em instanciaNova.js, podemos invocá-la usando o ()
const contatorC = novoContador()
const contatorD = novoContador()

// Testando...
contatorA.increment()
contatorA.increment()
console.log('CA:', contatorA.valor, 'CB:', contatorB.valor) // hm... interessante

// E com os contadores C e D?
contatorC.increment()
contatorC.increment()
console.log('CC:', contatorC.valor, 'CD:', contatorD.valor) // Hehe


// Resumindo: como o node cachea os objetos, os contadores A e B são O MESMO OBJETO
// Há casos em que queremos que nossos módulos retornem objetos separados, então
// devemos retornar uma função factory que CRIA UM NOVO OBJETO ao ser chamada

// O express faz isso: ao usar o require('express'), recebemos uma função factory
// Por padrão, damos a essa função o nome "express", e ao objeto criado por ela damos
// o nome "app". Assim, após o require, podemos criar diversos apps usando
// const app = express(); const app2 = express(); e por aí vai