// Seleciona o formulário de envio
const form = document.querySelector('form');

// Adiciona um ouvinte de eventos para o envio do formulário
form.addEventListener('submit', (event) => {
  event.preventDefault(); // previne o envio padrão do formulário

  // Seleciona os campos do formulário
  const title = form.querySelector('#title').value;
  const author = form.querySelector('#author').value;
  const category = form.querySelector('#category').value;
  const poem = form.querySelector('#poem').value;

  // Cria um objeto com os valores dos campos
  const poemData = {
    title,
    author,
    category,
    poem
  };

  // Envia os dados do poema para a página de destino usando fetch
  fetch('pagina-de-destino.php', {
    method: 'POST',
    body: JSON.stringify(poemData)
  })
  .then(response => {
    if (response.ok) {
      // Se a resposta for bem-sucedida, redireciona o usuário para a página de poemas
      window.location.href = 'poema1.html';
    } else {
      // Se a resposta não for bem-sucedida, exibe uma mensagem de erro
      alert('Ocorreu um erro ao enviar o poema. Tente novamente mais tarde.');
    }
  });
});
