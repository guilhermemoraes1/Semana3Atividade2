// cria um array de objetos com as chaves "nome" e "notas"
const estudantes = [
    { nome: 'Alice', notas: [100, 60, 92] },
    { nome: 'João', notas: [75, 30, 85] },
    { nome: 'Charles', notas: [90, 95, 85] },
    { nome: 'Paulo', notas: [100, 100, 100] },
];
   
// itera cada objeto da lista usando map
const estudantesMedias = estudantes.map((estudante) => {
    // acessa as notas do objeto atual e com o reduce soma todas as notas dentro do array do estudante atual
    const total = estudante.notas.reduce((soma, nota) => soma + nota);
    // usa a desestruturação pra criar uma variável com o valor da chave nome
    let {nome} = estudante;
    // retorna um novo objeto que possui o valor da chave nome
    // e uma nova chave "media" que recebe o total das notas dividido pela quantidade de notas
    return { nome, media: total / estudante.notas.length };
});

// usa filter pra filtrar os estudantes que tiveram uma média maior que 90
const melhoresMedias = estudantesMedias.filter(
    (student) => student.media > 90,
);
