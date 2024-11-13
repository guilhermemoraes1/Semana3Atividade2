// cria um array com outros 3 arrays dentro
const letras = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
];
   
// usa o flat pra deixar todos os elementos dentro de um mesmo array
let resultado = letras.flat().reduce((objeto, numero) => {
    // usa o reduce pra contar o número de elementos repetido
    if (objeto[numero]) {
        // se o objeto já foi iterado antes adiciona mais 1 no valor da chave
        objeto[numero] += 1;
        
    } else {
        // se o objeto ainda não foi iterado adicionar o valor 1 na chave atual
        objeto[numero] = 1;
    }

    // retorna objeto atualizado
    return objeto;
}, {}); // inicializa o acumulador com um objeto vazio
