
const selecionar = seletor => document.querySelectorAll(seletor).forEach(e => e.classList.add('destaque'))
const desselecionar = seletor => document.querySelectorAll(seletor).forEach(e => e.classList.remove('destaque'))
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms)) 