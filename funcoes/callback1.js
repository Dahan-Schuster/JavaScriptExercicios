const vegetais = ['Batata', 'Beterraba', 'Xuxu']

function imprimir(nome, indice) {
    console.log(`${indice + 1}, ${nome}`)
}

vegetais.forEach(imprimir)

vegetais.forEach(vegetal => console.log(vegetal))