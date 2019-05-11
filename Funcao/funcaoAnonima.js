// função anônima é uma função sem nome que pode ser atribuída a uma variável ou a uma outra função.

const soma = function(x,y){
    return x + y;
}

const imprimirResultado = function (a ,b , operacao = soma){
    console.log(operacao(a,b));
}

imprimirResultado(3, 4); //atribuindo apenas os valores e usando o default do terceiro parâmetro
imprimirResultado(3, 4, soma); //atribuindo a função soma de forma explícita
imprimirResultado(3 ,4 , function(x,y){
    return x - y;
});// atribuindo uma nova função diretamente no parâmetro 3 da função 
imprimirResultado(3, 4, (x, y) => x * y); //atribuindo uma função arrow (que é anônima de default)

const pessoa = {
    falar: function(){ // atribuindo uma função ao atributo do objeto criado
        console.log('Olar!');
    }
}

pessoa.falar();