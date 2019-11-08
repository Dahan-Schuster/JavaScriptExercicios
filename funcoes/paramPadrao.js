// estratégia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}


console.log('01)',
    soma3(),
    soma3(2),
    soma3(2, 3),
    soma3(1, 2, 3),
    soma1(0, 0, 0) // bug
)

// outras 3 estratégias para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // mais segura para números
    return a + b + c
}

console.log('02)',
    soma2(),
    soma2(2),
    soma2(2, 3),
    soma2(1, 2, 3),
    soma2(0, 0, 0)
)

// valor padrao (ES2015)
function soma3(a = 1, b = 1, c = 1) {
   return a + b + c
}

console.log('03)',
    soma3(),
    soma3(2),
    soma3(2, 3),
    soma3(1, 2, 3),
    soma3(0, 0, 0)
)
