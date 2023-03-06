const aumentarFonte = document.getElementById("aumentarFonte");
const diminuirFonte = document.getElementById("diminuirFonte");
const mudarCor = document.getElementById("mudarCor");
const poema = document.querySelector(".poema");

aumentarFonte.addEventListener("click", function() {
  let tamanhoAtual = window.getComputedStyle(poema).getPropertyValue("font-size");
  let novoTamanho = parseInt(tamanhoAtual) + 2 + "px";
  poema.style.fontSize = novoTamanho;
});

diminuirFonte.addEventListener("click", function() {
  let tamanhoAtual = window.getComputedStyle(poema).getPropertyValue("font-size");
  let novoTamanho = parseInt(tamanhoAtual) - 2 + "px";
  poema.style.fontSize = novoTamanho;
});

mudarCor.addEventListener("click", function() {
  let corAtual = window.getComputedStyle(poema).getPropertyValue("color");
  let novaCor = corAtual === "rgb(51, 51, 51)" ? "rgb(255, 0, 0)" : "rgb(51, 51, 51)";
  poema.style.color = novaCor;
});
