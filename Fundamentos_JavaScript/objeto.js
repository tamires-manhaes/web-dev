// um objeto é uma coleção de pares chave/valor , identificador do atributo e seu valor

const prod1 = {}; // forma literal de criar um objeto vazio
prod1.nome = 'Celular Redmi 5A'; // declarando atributos de forma dinamicamente
prod1.preco = 1200.89; // criando atributo dinamicamente

console.log(prod1); // mostrando atributos chave/valor do objeto
console.log(prod1.preco); // mostrando apenas o valor do atributo preço 

//criando objeto e já declarando atributos e atribuindo valores aos atributos
const prod2 = {
    nome: 'Camisa da mulher maravilha',
    preco: 39.90,
    loja: 'c&a'
}

console.log(prod2);
