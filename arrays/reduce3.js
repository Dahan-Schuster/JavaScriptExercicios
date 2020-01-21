// Minha implementação do array.reduce
Array.prototype.reduce2 = function(callBack, valorInicial = 0) {
    // inicia o resultado com o valorInicial, que é == 0 caso não seja especificado
    let resultado = valorInicial; 
    // a cada iteração, atribui o retorno do callback ao resultado 
    for (let i = 0; i < this.length; i++) {
        resultado = callBack(resultado, this[i], i, this)
    }
    return resultado;
}

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

const resultadoReducePadrao = alunos.map(a => a.nota).reduce((acumulador, atual) => acumulador + atual, 15)
const resultadoMeuReduce = alunos.map(a => a.nota).reduce2((acumulador, atual) => acumulador + atual, 15)

console.log('Resultado esperado:', resultadoReducePadrao)
console.log('Resultado alcançado:', resultadoMeuReduce)