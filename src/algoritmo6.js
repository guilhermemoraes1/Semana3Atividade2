const itens = ["Guarabira", "Belém", "Sapé"];

function criarElemenentoLi() {
    return document.createElement('li');
}

const ul = document.getElementById("authors");

itens.map( elemento => {
    let li = ul.appendChild(criarElemenentoLi());
    li.innerHTML = `${elemento}`;
    console.log(li);
});
