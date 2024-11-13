// cria uma variável que recebe o input do usuário no browser
const tamanho = prompt('Digite o tamanho da lista de números');

// cria um array do tamanho baseado com o usuário e preenche com valores null
const lista = new Array(tamanho).fill(null);

// o map itera os elementos de lista e retorna um array com cada índice da lista original somado mais um
// o reduce soma todos esses números de map e retorna um array com um elemento, sendo ele a soma total
// porém o valor de inicialização foi omitido, por isso o acumulador começa como o primeiro elemento do array
// e o valor desse algoritmo não é atribuido a nenhuma variável
lista
.map(function (item, index) {
return index + 1;
})
.reduce(function (acumulador, item) {
return acumulador * item;
});

// esse código executa o mesmo passos que o código acima, porém é reduzido sintaxicamente
// cria um array em que o tamanho é escolhido pelo input do usuário
// preenche esse array com valores null
// itera todos os elementos desse array e retorna os indices somado mais um
// e soma todos os numeros desse array, mas esse valor não é atribuido a nenhuma variável
new Array(tamanho)
.fill(null)
.map((item, index) => index + 1)
.reduce((acumulador, item) => acumulador + item);
