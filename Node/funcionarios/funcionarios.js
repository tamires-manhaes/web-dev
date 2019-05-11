const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') //faz requisições pra obter informações remotas. (servidor remoto)

const chineses = f => f.pais === 'China' //encontrando pessoas chinesas
const mulheres = f => f.genero === 'F' // encontrando mulheres
const menorSalario = (func, funcAtual) => { // função que calcula menor salário
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)
 
    //ache mulher chinesa com menor salário:
    const func = funcionarios
    .filter(chineses) // filtrando todos chineses
    .filter(mulheres) // filtrando todas mulheres
    .reduce(menorSalario) // reduzindo a pessoa com menor salário

    console.log(func)
})