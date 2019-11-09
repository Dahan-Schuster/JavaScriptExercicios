const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

// bind: envia por parâmetro o objeto dono do this no contexto léxico
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() 