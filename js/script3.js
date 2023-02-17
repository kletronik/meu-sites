// Código JavaScript para validar o formulário de registro de conta

const form = document.querySelector('form');
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Verificar se o nome foi preenchido
  if (nome.value === '') {
    alert('Por favor, informe o seu nome.');
    nome.focus();
    return false;
  }
  
  // Verificar se o e-mail foi preenchido e se é válido
  if (email.value === '') {
    alert('Por favor, informe o seu e-mail.');
    email.focus();
    return false;
  } else if (!isValidEmail(email.value)) {
    alert('Por favor, informe um e-mail válido.');
    email.focus();
    return false;
  }
  
  // Verificar se a senha foi preenchida
  if (senha.value === '') {
    alert('Por favor, informe a sua senha.');
    senha.focus();
    return false;
  }
  
  // Se todas as informações estiverem corretas,
    // Enviar o formulário para o servidor (neste exemplo, apenas um alert é exibido)
    alert('Formulário enviado com sucesso!');
    form.reset();
  });
  
  // Função para verificar se um e-mail é válido
  function isValidEmail(email) {
    // Expressão regular para validar um e-mail
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
