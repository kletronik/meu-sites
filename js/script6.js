// Lógica da página de carregamento
const loader = document.querySelector(".loader");

// Mostra a página de carregamento quando o botão é clicado
document.getElementById("Button").addEventListener("click", function() {
  loader.style.display = "block";
  setTimeout(function() {
    window.location.href = "poema.html"; // redireciona para outra página após 2 segundos
  }, 1000000);
});
