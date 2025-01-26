//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomeDosAmigos = [];
const input = document.querySelector('input');
const lista = document.getElementById('listaAmigos');                   // Captura a lista (<ul>)
const amigoSorteadoElement = document.getElementById('resultado');      // Exibe o amigo sorteado


/* Função para adicionar amigos à lista */
function adicionarAmigo() {
    if (input.value.trim() !== "") {
        const amigo = input.value.trim();

        // Verifica se o amigo já foi adicionado
        if (nomeDosAmigos.includes(amigo)) {
            alert("Este amigo já foi adicionado.");
            return;
        }

        nomeDosAmigos.push(amigo);
        input.value = "";
        atualizarLista();
    } else {
        alert("Por favor, insira um nome!");
    }
}

/* Função para atualizar a lista visível */
function atualizarLista() {
    
    lista.innerHTML = "";                               // Limpa a lista atual no DOM
    amigoSorteadoElement.innerHTML = "";                // Limpa mensagem de nenhum amigo cadastrado

    /* Percorre o array `nomeDosAmigos` com um loop for */
    for (let i = 0; i < nomeDosAmigos.length; i++) {
        const amigo = nomeDosAmigos[i];                 // Acessa o amigo atual do array

        const itemLista = document.createElement('li'); // Cria um novo elemento <li>
        itemLista.textContent = amigo;                  // Define o texto do <li> com o nome do amigo

        lista.appendChild(itemLista);                   // Adiciona o <li> à lista
    }
}


/* Função para sortear um amigo */
function sortearAmigo() {

    if (nomeDosAmigos.length === 0) {
        amigoSorteadoElement.textContent = "Nenhum amigo cadastrado ainda.";
        alert("Por favor, adicione amigos antes de sortear.");
        return;
    }

    lista.innerHTML = "";

    // Sorteia um número aleatório entre 0 e o tamanho do array
    const indexSorteado = Math.floor(Math.random() * nomeDosAmigos.length);

    // Exibe o nome sorteado
    amigoSorteadoElement.textContent = `O amigo sorteado é: ${nomeDosAmigos[indexSorteado]}`;
}