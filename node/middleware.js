// Aplica o padrão de projeto Chain Of Responsability (ou Middleware)

// Neste padrão, os passos que constituem um processo são desacoplados
// e se desconhecem. Para passar de um passo A para um passo B, uma função
// (que pode ser chamada de next()) é enviada como parâmetro. Assim, os passos
// precisam apenas chamar a função next(), o que permite que diferentes processos
// reutilizem os mesmos passos, basta enviar como parâmetro a próxima função a ser chamada

// É muito comum passar entre os passos um objeto de contexto, que pode ser
// uma request ou outro objeto que está sendo manipulado durante o processo

const passo1 = (contexto, next) => {
    contexto.valor1 = 'passo1'
    next()
} 

const passo2 = (contexto, next) => {
    contexto.valor2 = 'passo2'
    next()
}

const passo3 = contexto => contexto.valor3 = 'passo3'

const processo = (contexto, ...passos) => {
    const executarPasso = indice => {
        passos && indice < passos.length &&
            passos[indice](contexto, () => executarPasso(indice+1))
    }

    executarPasso(0)
} 

contexto = {}
processo(contexto, passo1, passo2, passo3)
console.log(contexto)

processo(contexto, passo2, passo1, passo3)
console.log(contexto)