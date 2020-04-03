const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

// filtro para encontrar apenas chineses
const chineses = f => f.pais === 'China';
// filtro para encontrar apenas mulheres 
const mulheres = f => f.genero === 'F';
// filtro para buscar o menor salário
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual;
}

axios.get(url).then(response => {
    const funcionarios = response.data
    
    // mulher chinesa com menor salário
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
});