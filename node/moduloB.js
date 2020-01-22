// Outra forma de exportar dados no node
// O objeto a seguir será importado no arquivo moduloCliente.js
module.exports = {
    mensagem: 'Hello, World!',
    falarMensagem() {
        return this.mensagem
    }
}