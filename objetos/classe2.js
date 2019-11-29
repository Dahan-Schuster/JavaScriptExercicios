// Herança de Classes de JavaScript
// No fundo, o funcionamento é idêntido ao de prototypes
// A diferença está apenas na sintaxe

// O exemplo a seguir é uma forma diferente de fazer o que
// foi feito no arquivo heranca2.js usando o atributo __proto__

class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }

    falarSobrenome() { console.log(this.sobrenome) }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
    
    falarProfissao() { console.log(this.profissao) }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho()
filho.falarSobrenome()
filho.falarProfissao()