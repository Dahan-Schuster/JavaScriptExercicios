const [a] = [10]
console.log(a)

// Apenas os índices 0, 2, 4 e 5 do array
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

// Segundo elemento do segundo array
const [, [, nota]] = [[1, 2, 3], ['a','b','c']]
console.log(nota)