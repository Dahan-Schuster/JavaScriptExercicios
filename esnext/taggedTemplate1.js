// Outros usos do recurso de template srting ( `1 + 1 = ${1 + 1}` )
// A funcionalidade Tagged Template permite-nos processas uma
// template string dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log('Um uso comum de template string:', `${aluno} está ${situacao}.` )
console.log('Usando o tagged template:', tag `${aluno} está ${situacao}.` )

// Tá, mas pra que po*** vou usar isso?
// Veja o próximo exemplo de taggedTemplate ^^ 