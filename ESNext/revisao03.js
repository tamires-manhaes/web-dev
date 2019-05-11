// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na NOtação Literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola(){
        return 'olá, tenho sono'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal{}
class Cachorro extends Animal {
    falar(){
        return 'sou lindo'
    }
}

console.log(new Cachorro().falar())