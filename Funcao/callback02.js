const notas = [7.8, 9.6, 7.9, 5.9, 6.4, 7.2, 5.7]

// sem callback
let notasBaixas = []
for( let i in notas){
	if(notas[i] < 7){
		notasBaixas.push(notas[i])
	}
}

console.log(notasBaixas)

// com callback
const notasBaixas2 = notas.filter(function (nota){
	return nota < 7
})

console.log(notasBaixas2)

// callback usando função arrow
const notasBaixas3 = notas.filter(nota => nota < 7)

console.log(notasBaixas3)