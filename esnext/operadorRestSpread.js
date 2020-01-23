// O operador ... (rest) é usado para agrupar uma
// série de parâmetros de uma função em um array. Algo assim:
const total = (...numeros) => { 
    let total = 0
    numeros.forEach(n => {total += n})
    return total 
}
console.log('Total:', total(1, 2, 3, 4, 5))

// Mas ele também pode ser usado para separar coisas!
// O que diferencia estes dois usos é o escopo
// Quando usado em objetos, o rest se torna spread, vejamos:

// primeiro criamos um objeto
const funcionario = { nome: 'Ana', salario: 18000 }

// aqui, os atributos de Ana serão espalhados em sua clone
// adicionalmente, podemos incluir novos atributos
const clone = { ativo: true, ...funcionario }

// Bora verificar?
console.log(funcionario, clone)

// Outro uso do rest em sua forma spread é com arrays...
const grupoA = [2, 3, 4]
const grupoB = [1, ...grupoA, 5]
console.log(grupoA, grupoB)

// Ou seja, o rest é usado para pegar valores separados e agrupá-los em um array
// Já o spread é usado para separar um conjunto de valores (array ou objeto) em variáveis distintas
