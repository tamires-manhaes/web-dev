Number.prototype.entre = function (inicio, fim){
	return this >= inicio && this <= fim;
}

const imprimirResultado = function (nota){
	if(nota.entre(9, 10)){
		console.log('Quadro de Honra');
	} else if(nota.entre(7, 8.99)){
		console.log('Aprovado');
	} else if(nota.entre(4, 6.99)){
		console.log('Recuperação');
	} else if(nota.entre(0, 3.99)){
		console.log('Reprovado')
	} else {
		console.log('Nota inválida!');
	}
}

imprimirResultado(10);
imprimirResultado(5.9);
imprimirResultado(3.2);
imprimirResultado(4.7);
imprimirResultado(7.45);