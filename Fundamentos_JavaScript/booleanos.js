// JS só aceita 'verdadeiro' ou 'falso'

let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)// valor positivo negado 2x
console.log(!!-1) //valor negativo negado 2x
console.log(!![])// array

console.log('os falsos...')
console.log(!!0) // valor positivo negado 2x
console.log(!!'') // string vazia negada duas bezes
console.log(!!null) // valor nulo negado 2x
console.log(!!NaN) // Not a Number negado 2x