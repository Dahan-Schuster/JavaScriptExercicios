function area(larg, alt) {
    const area = larg * alt

    if (area > 20)
        console.log(`Valor muito alto: ${area}`)
    else
        return area
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 2, 2, 2, 2))
console.log(area(20, 2))
