let dobro = function(a){
    return 2 * a;
}

dobro = (a) => { //redução de sintaxe
    return 2 * a;
}

dobro = a => 2 * a; //retorno anômino
console.log(dobro(Math.PI));

let ola = function (){
    return 'Olá!';
}

ola = () => 'Olá!'
console.log(ola()); 

/*function Pessoa(){
    this.idade = 0;

    setInterval(() =>{
        this.idade++
        console.log(this.idade)
    }, 5) 
}

new Pessoa;
*/ 

let comparaComThis = function(param){
    console.log(this == param);
}

comparaComThis(global);

