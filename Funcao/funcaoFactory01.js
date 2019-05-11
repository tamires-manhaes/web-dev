// função factory é uma função que retorna um objeto
//tem o objetivo de fabricar uma instância de um objeto

//factory simples
function criarPessoa(){
	return{
		nome: 'Tamires',
		sobrenome: 'Manhães'
	}
}

console.log(criarPessoa())
console.log('\n')

function criarProduto(nome, preco){
	return {
		nome,
		preco,
		desconto: 0.1
	}
}

console.log(criarProduto('Notebook', 1230.43))
console.log(criarProduto('iPad', 4325.67))