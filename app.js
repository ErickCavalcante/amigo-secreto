//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let ListaDeAmigos = []; //array para armazenar os amigos.
let titulo = document.querySelector('h1');
//função para adicionar amigos
function adicionarAmigo() {
    let amigo = document.getElementById("amigo").value;
    if (amigo) {
        ListaDeAmigos.push(amigo);
        listarAmigos();
        document.getElementById("amigo").value = "";
    }
}


//função para listar os amigos
function listarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    ListaDeAmigos.forEach((nome) => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}


//função para sortear amigos 
function sortearAmigo() {
    if (ListaDeAmigos.length > 1) {
        let sorteado = ListaDeAmigos[Math.floor(Math.random() * ListaDeAmigos.length)];
       // document.getElementById("resultado").innerText = `Amigo sorteado: ${sorteado}`;
        titulo.innerHTML = `Amigo sorteado: ${sorteado}`;
    } else {
        if( amigo.value == "" ){
            alert("Nome não informado"); //verifica se o campo está em branco
        } else {    
            alert("Adicione pelo menos dois amigos antes de sortear!");//se 
        }
    }
}        


