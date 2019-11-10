// IIFE -> Immediately Invoked Function Expression
// Função auto-invocada

// Com arrow function
(() => {
    console.log('Será invocado assim que for declarada')
})()

// Com função comum
(function() {
    console.log('Foge do escopo global')
})()