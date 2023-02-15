// Obter elementos do formulário
const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

// Verificar se os campos de e-mail e senha estão preenchidos
function validateForm() {
  if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
    alert('Por favor, preencha todos os campos.');
    return false;
  }
  return true;
}

// Enviar dados de login para o servidor
function submitForm(event) {
  event.preventDefault();
  if (validateForm()) {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    // Aqui você pode adicionar o código para enviar os dados do formulário para o servidor, fazer a validação, etc.
    // Simulando login bem-sucedido
    if (email === 'kleitond.kd@gmail.com' && password === '123') {
      alert('Login bem-sucedido!');
      // Redirecionar para outra página
      window.location.href = 'dashboard.html';
    } else {
      alert('E-mail ou senha incorretos.');
    }
  }
}

// Adicionar ouvinte de evento ao botão de enviar
const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', submitForm);
