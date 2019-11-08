{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}
teste()
try {
    console.log(local)
} catch (e) {
    console.error('local is not defined')
}

var numero = 1 
{
    var numero = 2
    console.log('Número dentro:', numero)
}

console.log('Número fora:', numero)