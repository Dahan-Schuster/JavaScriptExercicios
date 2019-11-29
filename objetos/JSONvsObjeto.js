const obj = { a : 1, b: 2, c: 3, soma: () => a + b + c }
// A função soma() não será convertida, pois JSON compratilha apenas dados que podem ser
// interpretados por qualquer linguagem. Funções variam sua forma de declaração e outros aspectos
console.log('Objeto convertido em JSON  ->', JSON.stringify(obj))
console.log('JSON convertido em Objeto  ->', JSON.parse('{"a" : 1,"b" : 2,"c" : 3}'))
console.log()
console.log('JSON Inválido: Atributos sem aspas         ->', '{ a :1, b :2, c :3 }')
console.log('JSON Inválido: Atributos com aspas simples ->', "{'a':1,'b':2,'c':3 }")
console.log()
console.log('Tipos de dados possíveis em JSONs  ->', JSON.parse('{"numerico":3.14, "texto":"Yo!", "booleano": true, "Objeto": {}, "array": []}'))