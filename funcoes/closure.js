// Closure: escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis
// externas à função

// Contexto léxico em ação!!

const x = 'Global'

const fora = () => {
    const x = 'Local'
    const dentro = () => x
    return dentro
}

const funcao = fora()
console.log(funcao())