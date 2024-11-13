// cria um array de objetos com as chaves "nome", "salario" e "departamento"
const funcionarios = [
    { nome: 'João', salario: 30000, departamento: 'TI' },
    { nome: 'Janete', salario: 70000, departamento: 'RH' },
    { nome: 'Sofia', salario: 100000, departamento: 'RH' },
];

// usa o reduce pra separar cada funcionário no seu próprio departamento
const funcionariosPorDepartamento = funcionarios.reduce(
(acumulador, funcionario) => {
    // acessa o departamento do funcionario atual
    const departamento = funcionario.departamento;

    // o codigo dentro do if só executa se não existir a chave desse departamento 
    if (!acumulador[departamento]) {
        // cria uma array vazia pra essa chave
        acumulador[departamento] = [];
        
    }

    // adiciona na chave do departamento o funcionario atual
    acumulador[departamento].push(funcionario);

    // retorna o acumulador
    return acumulador;
},
{}, // começa o inicializador com um objeto vazio
);

// usa o Object.keys pra pegar retorna um array com as chaves do objeto funcionariosPorDepartamento
const mediasSalarioPorDepartamento = Object.keys(
funcionariosPorDepartamento,
)
.map((departamento) => { // itera os elementos de Object.keys
const total = funcionariosPorDepartamento[departamento].reduce(
    (acumulador, funcionario) => acumulador + funcionario.salario, // reduce soma cada salario do funcionario de cada departamento
    0,
);
    // retorna um objeto com a chave departamento e a media que é o valor somado de todos os salarios do departamento atual
    // dividido pela quantidade de funcionarios do departamento atual
    return {
        departamento: departamento,
        media: total / funcionariosPorDepartamento[departamento].length,
    };
});

// usa o filter pra iterar cada objeto do array
const maioresPagamentos = mediasSalarioPorDepartamento.filter(
    // retorna apenas os objetos que o media de salario do departamento seja maior que 65000
    (departamento) => departamento.media > 65000,
);
