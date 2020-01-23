// Por padrão, o node não permite passar parâmetros entre módulos
// Mas é possível exportar uma função que recebe parâmetros
// Assim, quando quiser receber dados vindos de outro módulo,
// basta exportar uma função que recebe tais dados via parâmetro
// e invocar a função no módulo que contém as informações desejadas


module.exports = function (...nomes) { // preciso de alguns nomes... vou exportar uma função
    return nomes.map(nome => `Bom dia, ${nome}!`) // eba! tenho meus nomes, agora posso continuar
}

// Vá para o arquivo passandoParametrosClinte.js