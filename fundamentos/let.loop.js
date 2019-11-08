for (let i = 0; i < 10; i++){
    console.log('i ==', i)
}

// let i não acessível fora do bloco
try {
    console.log('i ==', i) 
} catch (e) {
    console.error('i is not defined')
}
