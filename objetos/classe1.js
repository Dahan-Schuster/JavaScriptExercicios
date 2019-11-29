// Em JavaScript, objetos são funções
// Então, quando uma nova classe é criada,
// o JS converte a mesma em uma função construtora

// O exemplo abaixo teria o mesmo resultado se fosse feito
// utilizando um dos métodos listados no arquivo criandoObjetos.js

// Porém, de fato, haverão situações em que o uso de Classes serão necessárias
// O React é um exemplo.

class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFincanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(lancamento => this.lancamentos.push(lancamento))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(lancamento => {
            valorConsolidado += lancamento.valor
        })

        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Energia', -200)

const contas = new CicloFincanceiro(11, 2019)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())