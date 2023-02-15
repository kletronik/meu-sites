const form = document.querySelector('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (username.value === 'a' && password.value === '123') {
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid username or password!');
  }
});
