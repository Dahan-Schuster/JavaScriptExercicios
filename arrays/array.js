console.log('Tipo da função Array:', typeof Array)
console.log('Tipo de um array:', typeof new Array)
console.log('Tipo de um array literal:', typeof [])
console.log()
console.log('Criando arrays...')
let aprovados = new Array('Bia', 'Carlos', 'Ana') // Criando array com a função Array
aprovados = ['Bia', 'Carlos', 'Ana'] // Criando array usando a notação Literal
console.log('Array:', aprovados)
console.log()
console.log('Acessando valores do array...')
console.log('Array no index 0:', aprovados[0])
console.log('Array no index 1:', aprovados[1])
console.log('Array no index 2:', aprovados[2])
console.log('Array no index 3:', aprovados[3])
console.log()
console.log('Adicionando novos elementos...')
aprovados[3] = 'Paulo' // Adicionando um novo elemento de forma literal
aprovados.push('Íris') // Adicionando um novo elemento atráves da função push()
console.log('Array atualizado:', aprovados)
console.log('Tamanho do array atualizado:', aprovados.length)
console.log()
console.log('Adicionando elementos em índices inesperados...')
aprovados[99] = 'Rafael'
aprovados[-99] = 'Lúcio'
console.log('Array com espaços vazios:', aprovados)
console.log('Tamanho do array com espaços vazios:', aprovados.length)
console.log()
console.log('Executando funções no array...')
aprovados.sort()
console.log('Array ordenado:', aprovados)
delete aprovados[1]
console.log('Array sem o valor do índice 1:', aprovados)
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1)
console.log("Array ['Bia', 'Carlos', 'Ana'] sem o elemento de índice 1:", aprovados)
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'João', 'Zezé', 'José')
console.log("Array ['Bia', 'Carlos', 'Ana'] com dois elementos a mais a partir do índice 1:", aprovados)