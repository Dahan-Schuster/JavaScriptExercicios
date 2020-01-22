
/**
 * DESAFIO: Dado o JSON de funcionários, exibir na tela
 * a mulher chinesa com o menor salário
*/


// URL que retorna um arquivo JSON gigante contendo
// várias informações de funcionários fictícios
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios') // cliente HTTP baseado em Promises

const mulheres = funcionario => funcionario.genero == 'F'
const chinesas = mulher => mulher.pais == 'China'
const aDeMenorSalario = (anterior, atual) => anterior.salario > atual.salario ? atual : anterior

// (function(){}).then() -> Conceito de promises em JavaScript
// Haverá exercícios falando sobre este conceito no futuro
// Por enquanto um resumo: uma função assíncrona faz alguma coisa
// e PROMETE (new Promise()) retornar algo quando acabar, 
// e ENTÃO (then()) podemos fazer algo com o retorno 
axios.get(url).then(response => console.log(resolverDesafio(response.data)))

const resolverDesafio =
    funcionarios => funcionarios
        .filter(mulheres)
        .filter(chinesas)
        .reduce(aDeMenorSalario)
