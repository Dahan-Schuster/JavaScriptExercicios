// Uma promise (promessa) é utilizada em funções assíncronas
// Funciona como uma callback, mas nesse caso pode ser
// resolved (atentida) ou rejected (rejeitada)

// Um exemplo simples...
function falarDepoisDe(segundos, querQueDerErro) {
    return new Promise((resolve, reject) => {
        // para simular uma operação que demora um tempinho, vamos usar o setTimeout
        console.log(`Espere por minha resposta daqui a ${segundos} segundos...`)
        setTimeout(() => {
            if (querQueDerErro) reject('Você quem pediu ¯\\_(ツ)_/¯')
            else resolve('O then() é um middleware,')
        }, segundos * 1000) // setTimeout recebe o tempo em ms, então vamos converter os segundos...
    })
}

falarDepoisDe(3, false)
    .then(frase => frase.concat(' ou seja...'))
    .then(outraFrase => outraFrase.concat(' Podemos encadear as'))
    .then(maisFrase => maisFrase.concat(' chamadas, retorando sempre'))
    .then(penultima => penultima.concat(' o objeto de contexto que, nesse caso,'))
    .then(ultima => ultima.concat(' é a nossa frase.'))
    .then(resultado => console.log(resultado))
    .catch(motivo => console.log(motivo))