// Array é uma estrutura inidirecional. Ele é heterogêneo, onde consegue-se agrupar multíplos valores de forma  indexada e linear.

const valores = [7.7, 9.2, 19.97, 6.3]; //declaração de array
console.log(valores[0], valores[3]); // mostrando os valores na posição 0 e 3
console.log(valores[4]); //mostrando valor da posição 4

valores[4] = 10; //declarando o valor 10 na posição 4
console.log(valores); //mostrando valores do array
console.log(valores.length); //mostrando tamanho do array


valores.push({id: 3}, false, null, 'teste'); // adicionando valores ao array existente
console.log(valores); // mostrando valores atualizados do array

console.log(valores.pop()); // tirando o último valor do array

console.log(typeof valores) //mostrando o tipo do array