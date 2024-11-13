// Construa uma string que representa uma estrutura em HTML que seja capaz de listar de forma ordenada os itens = ["Guarabira", "Belém", "Sapé"]

const itens = ["Guarabira", "Belém", "Sapé"];

function criarElemenentoLi() {
    return document.createElement('li');
}

const ul = document.getElementById("elemntoUl");

itens.map( elemento => {
    let li = ul.appendChild(criarElemenentoLi());
    li.innerHTML = `${elemento}`;
});
