const valor = 'Global'

// No momento em que é criada, a função
// guarda seu contexto. 
// Neste momento, valor == 'Global'
const f1 = () => console.log(valor)

const exec = () => {
    // mesmo uma constante local seja declarada
    // com a mesma assinatura ('valor'), a função
    // f1() usará a constante global que já estava
    // declarada quando esta foi criada
    const valor = 'local'
    f1()
} 

exec() // 'Global'