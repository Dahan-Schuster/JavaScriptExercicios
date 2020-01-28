const tela = document.querySelector('[flappy]')

function criarCano() {
    const cano = document.createElement('div')
    cano.classList.add('cano')
    return cano
}

function criarParDeCanos() {
    const canoCima = criarCano()
    const canoBaixo = criarCano()

    return { canoCima, canoBaixo }
}

function criarEspacoParaCanos() {
    const espaco = document.createElement('div')
    espaco.classList.add('canos')
    espaco.style.left = `${tela.clientWidth}px`

    return espaco
}

function adicionarCanosNaTela() {
    const canos = document.querySelectorAll('.canos')

    if (canos.length < 4) {
        const espacoCanos = criarEspacoParaCanos()
        const { canoCima, canoBaixo } = criarParDeCanos()

        espacoCanos.appendChild(canoCima)
        espacoCanos.appendChild(canoBaixo)
        tela.appendChild(espacoCanos)
    }
}

function moverCanos() {
    const canos = document.querySelectorAll('.canos')
    canos.forEach(parDeCanos => {
        let posicaoAutal = Number.parseInt(parDeCanos.style.left)
        let novaPosicao = posicaoAutal - 1

        if (novaPosicao <= -100) {
            parDeCanos.remove()
            adicionarCanosNaTela()
        } else {
            parDeCanos.style.left = `${novaPosicao}px`
        }

    })
}

function motorMoverECriarCanos() {
    adicionarCanosNaTela()
    setInterval(moverCanos, 1)
    setInterval(adicionarCanosNaTela, 3000)
}

function play() {
    motorMoverECriarCanos()
}

play()