// map(): Itera por um array aplicando uma transformação em cada elemento, retornando um outro array com o mesmo tamanho

const nums = [1, 2, 3, 4, 5]
const numsX2 = nums.map(num => num * 2)
console.log(nums, numsX2)

// map sucessivo

const soma10 = e => e + 10
const triplo = e => e * 3
const $ = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

let res = nums.map(soma10).map(triplo).map($)
console.log(nums, res)