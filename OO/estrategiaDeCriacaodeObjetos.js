//  Usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desc){
	this.nome = nome
	this.getPrecoComDesconto = () => {
		return preco * ( 1 - desc)
	}
}

const p1 = new Produto('smartphone', 560.54, 0.15)
const p2 = new Produto('notebook', 4822.55, 0.15)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas){
	return {
		nome,
		salarioBase,
		faltas,
	}
}
