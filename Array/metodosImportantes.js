const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // removeu último elemento do Array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona novo elemento na última posição do Array
console.log(pilotos)

pilotos.shift() // remove primeiro elemento do Array
console.log(pilotos)

pilotos.unshift() // adiciona um elemento na primeira posição do Array
console.log(pilotos)

// splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0 , 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3,1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice // gera novo Array
console.log(algunsPilotos1)