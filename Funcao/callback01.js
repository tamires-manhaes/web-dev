// função callback é uma função que é chamada a partir de um evento acontecido. 

const comidas = ["Coxinha", "Pizza", "Oreo", "Café"]

function imprimir(nome, indice){
	console.log(`${indice + 1}. ${nome}`)
}

comidas.forEach(imprimir);
comidas.forEach(comida => console.log(comida));