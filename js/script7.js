// Seleciona os elementos da página
const btnAumentarFonte = document.getElementById('aumentarFonte');
const btnDiminuirFonte = document.getElementById('diminuirFonte');
const poema = document.querySelector('.poema');

// Define as funções que serão chamadas pelos botões
function aumentarFonte() {
  const fontSizeAtual = window.getComputedStyle(poema).getPropertyValue('font-size');
  const novaFontSize = parseInt(fontSizeAtual) + 2;
  poema.style.fontSize = `${novaFontSize}px`;
}

function diminuirFonte() {
  const fontSizeAtual = window.getComputedStyle(poema).getPropertyValue('font-size');
  const novaFontSize = parseInt(fontSizeAtual) - 2;
  poema.style.fontSize = `${novaFontSize}px`;
}

function mudarCor() {
  const corAtual = window.getComputedStyle(poema).getPropertyValue('color');
}

// Adiciona os listeners aos botões
btnAumentarFonte.addEventListener('click', aumentarFonte);
btnDiminuirFonte.addEventListener('click', diminuirFonte);

