function  tratarErroELancar(error) {
    //throw true
    //throw 10
    //throw new Error('...')
    throw {
        nome: error.name,
        msg: error.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(error) {
        tratarErroELancar(error)
    } finally {
        console.log('fim')
    }
}
const obj1 = {name : 'Dahan'}
imprimirNomeGritado(obj1)
const obj2 = {nome : 'Dahan'}
imprimirNomeGritado(obj2)