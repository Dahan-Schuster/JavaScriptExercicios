// Cadeia de protótipos (prototype chain)
Object.attr0 = 'Z' // Não fazer isso sem muito cuidado! Afeta TODOS os objetos da aplicação
const avo = { __proto__: Object, attr1: 'A' } // Protótipo de Avo: Object
const pai = { __proto__: avo, attr2: 'B' } // Protótipo de Pai: Avo
const filho = { __proto__: pai, attr2: 'yo', attr3: 'C' } // Protótipo de Filho: Pai

// Attr1: avo, Attr2: filho (shadowing), Attr3: filho, Attr0: Object
console.log('Cadeia de protótipos:', filho.attr1, filho.attr2, filho.attr3, filho.attr0)

console.log()

// Protótipo de Carro
const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta) {
        this.velAtual += delta
        this.velAtual = this.velAtual > this.velMax ? this.velMax : this.velAtual
    },
    status() { return `${this.velAtual}Km/h de ${this.velMax}Km/h` }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

// A função status sobrepõe (sombreia) a mesma função do protótipo
const volvo = {
    modelo: 'V40',
    status() { return `${this.modelo}: ${super.status()}` }
}

// Estabelece uma relação de protótipo entre dois objetos
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

// As propriedades exibidas pelo toString são apenas as encontradas
// no próprio objeto, ou seja, volvo não mostrará velMax e ambos não
// mostrarão a função acelerar
console.log('Ferrari com atributos locais:', ferrari)
console.log('Volvo com atributos locais:', volvo)

// Volvo sombreia a função status do protótipo
volvo.acelerar(100)
console.log('Status do Volvo:', volvo.status())

// Ferrari chama a função status do protótipo
ferrari.acelerar(400)
console.log('Status da Ferrari:',ferrari.status())