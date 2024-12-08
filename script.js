document.addEventListener('DOMContentLoaded', () => {
    console.log('script.js carregado');

    function loadCharacters2() {
        fetch('http://localhost:3000/api/usuario')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error('Erro:', error));
    }

    // Função para exibir a lista de pessoas
    function loadCharacters() {
        fetch('http://localhost:3000/api/usuario')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const list = document.getElementById('character-list');
            list.innerHTML = '';
            data.forEach(person => {
                list.innerHTML += `
                <div>
                    <p>Nome: ${person.nome}</p>
                    <p>Email: ${person.email}</p>
                    <p>Senha: ${person.senha}</p>
                </div>`;
            });
        })
        .catch(error => console.error('Erro:', error));
    }

    // Adicionar nova pessoa
    document.getElementById('character-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        fetch('http://localhost:3000/api/usuario', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, email, senha })
        })
        .then(() => {
            loadCharacters();
            document.getElementById('character-list');
            alert('Usuário adicionado com sucesso!');
        })
        .catch(error => console.error('Erro:', error));
    });

    loadCharacters();
});

async function verificarValores(valor1, valor2) {
    try {
      // Enviar uma requisição GET para a API
      const response = await fetch('http://localhost:3000/api/usuario');
  
      // Verificar se a resposta foi bem-sucedida
      if (!response.ok) {
        console.error('Erro ao acessar a API');
        return false;
      }
  
      // Obter os dados da resposta em formato JSON
      const dados = await response.json();
  
      // Verificar se os valores existem nos dados retornados
      const existeValor1 = dados.some(usuario => usuario.email === valor1); // Substitua 'campo' pelo nome real do campo que está buscando
      const existeValor2 = dados.some(usuario => usuario.senha === valor2); // O mesmo para o campo do valor2
  
      // Retornar true se ambos os valores existirem, caso contrário, retornar false
      return existeValor1 && existeValor2;
  
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      return false;
    }
}

// Função para verificar se os valores existem e redirecionar
async function verificarEAtualizar(event) {
    // Previne o envio do formulário
    event.preventDefault();

    const email = document.getElementById('login-email').value; // Obtém o valor do e-mail
    const senha = document.getElementById('login-senha').value; // Obtém o valor da senha

    // Chama a função de verificação passando os valores de email e senha
    const resultado = await verificarValores(email, senha);

    // Se a verificação for bem-sucedida, redireciona para a página "index.html"
    if (resultado) {
        // Redireciona para o index.html após 2 segundos para dar tempo de processar
        setTimeout(() => {
            window.location.href = 'index2.html';  // Redireciona para o index.html
        }, 2000); // Delay de 2 segundos (pode ser ajustado ou removido)
    } else {
        // Se não for bem-sucedido, apenas loga uma mensagem no console
        console.log('Um ou ambos os valores não foram encontrados.');
    }
}
// Adiciona um ouvinte de evento para o botão de login
document.getElementById('verificarValores').addEventListener('click', verificarEAtualizar);




function deleteCharacter(id) {
    if (confirm('Você tem certeza que deseja deletar este usuário?')) {
        fetch(`http://localhost:3000/api/usuario/${id}`, { method: 'DELETE' })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao deletar o usuário');
            }
            loadCharacters();
        })
        .catch(error => console.error('Erro:', error));
    }
}

function editCharacter(id, nome, email, senha) {
    const nomeNovo = prompt('Novo nome:', nome);
    const emailNovo = prompt('Novo email:', email);
    const senhaNova = prompt('Nova senha:', senha);

    // Validação simples para garantir que os campos não estejam vazios
    if (!nomeNovo || !emailNovo || !senhaNova) {
        alert('Todos os campos devem ser preenchidos!');
        return;
    }

    fetch(`http://localhost:3000/api/usuario/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome: nomeNovo, email: emailNovo, senha: senhaNova })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao editar o usuário');
        }
        loadCharacters();
    })
    .catch(error => console.error('Erro:', error));
}

