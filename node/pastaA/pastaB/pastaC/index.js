// Aqui a gente pode fazer vários requires (importações)
// e acoplá-los em um único objeto
// Assim, seria necessário importar apenas o pastaC/index e
// teríamos todos os objetos que queremos importar

const lodash = require('lodash')
const express = require('express')

module.exports = {
    hehe: 'hehe, sou o index ^^',
    lodash,
    express
}