// O objeto 'global' do node equivale ao 'window' do navegador
// Tudo criado dentro dele estará disponível em todos os módulos

// console.log(global) // para conferir, descomente

global.saudacao = () => 'Estou em todos os lugares, hehe'

global.projeto = {
    versao: '1.0.0',
    nome: 'Meu Projeto',
    etc: 'Escrever Tanto Cansa'
}

// Esses atributos serão criados assim que este módulo for aberto em algum momento da execução
// Vá para o arquivo globalTeste.js