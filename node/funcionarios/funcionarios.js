
/**
 * DESAFIO: Dado o JSON de funcionários, exibir na tela
 * a mulher chinesa com o menor salário
*/


// URL que retorna um arquivo JSON gigante contendo
// várias informações de funcionários fictícios
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios') // cliente HTTP baseado em Promises

// (function(){}).then() -> Conceito de promises em JavaScript
// Haverá exercícios falando sobre este conceito no futuro
// Por enquanto um resumo: uma função assíncrona faz alguma coisa
// e PROMETE (new Promise()) retornar algo quando acabar, 
// e ENTÃO (then()) podemos fazer algo com o retorno 
axios.get(url).then(response => {
    const funcionarios = response.data // o JSON retornado pela URL
    // console.log(funcionarios) // para conferir, descomente
    console.log(resolverDesafio(funcionarios))
})

const resolverDesafio = funcionarios => {
    const mulheres = funcionarios.filter(f => f.genero == 'F')
    const chinesas = mulheres.filter(m => m.pais == 'China')
    return aDeMenorSalario = chinesas.reduce((p, c) => p.salario > c.salario ? c : p, chinesas[0])
}