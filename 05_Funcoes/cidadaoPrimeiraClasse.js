// forma literal
function funcaoHello(name){
    console.log(`Hello ${name}, how you doin?`);
}
const name = 'Tamires';
funcaoHello(name);

// armazenar em uma variável
const funcao = function() { }

// armazenar em um array
const array = [ function(a,b){ return a + b }, funcaoHello, funcao ];

// armazenar em um atributp de objeto
const obj = { }
obj.falar = function () { return 'opa!'; }
console.log(obj.falar());

// passando uma função como parametro
function run(fun) {
    fun();
}
run(function(){ console.log('executando...') });

// uma função pode retornar/conter uma função
function soma(a,b){
    return function(c){
        console.log(a + b + c);
    }
}
soma(2,3)(5);