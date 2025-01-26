<h1 align="center"> Sorteador de Amigos</h1>

Este repositório contém um código JavaScript que implementa um sistema para gerenciar uma lista de amigos e realizar um sorteio aleatório entre eles. Ele permite adicionar amigos a uma lista, exibir a lista de amigos cadastrados e sortear um nome aleatoriamente.

# :hammer:Funcionalidades

- Adicionar amigos:

  Permite inserir nomes únicos de amigos em uma lista.

  Valida entradas para evitar duplicatas ou nomes vazios.

  Exibir a lista de amigos cadastrados:

  Atualiza e exibe dinamicamente os nomes adicionados em um elemento "ul" no DOM.
  
- Sortear um amigo:

  Realiza um sorteio aleatório entre os nomes cadastrados.

  Exibe o resultado do sorteio em um elemento dedicado no DOM.

  Valida se existem amigos cadastrados antes de realizar o sorteio.

- Mensagens de feedback:

  Exibe mensagens de alerta caso o usuário tente:

  Adicionar um nome duplicado.

  Sortear sem amigos cadastrados.

  Inserir um nome vazio.


# :bulb:Tecnologias Utilizadas

HTML: Estrutura da interface.

CSS: (Opcional) Estilização visual dos elementos.

JavaScript: Lógica do sistema, manipulação do DOM e interatividade.

# :wrench:Como Usar

Clonar o repositório:

git clone https://github.com/seu-usuario/nome-do-repositorio.git

Abrir o arquivo HTML em um navegador:

Use um navegador moderno que suporte ES6+.

Interagir com o sistema:

Insira o nome de um amigo no campo de entrada e clique no botão para adicioná-lo à lista.

Clique no botão de sortear para selecionar aleatoriamente um nome da lista.

# :rocket:Melhorias Futuras

Adicionar botão para limpar a lista.

Estilização adicional: Melhorar a experiência do usuário com feedback visual.

Impedir sorteios repetidos consecutivamente.

Salvar a lista em armazenamento local (localStorage) para persistência.