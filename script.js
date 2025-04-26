let tamanhoFonte = 16;
let modoEscuro = false;

function aumentarFonte() {
  tamanhoFonte += 2;
  document.documentElement.style.setProperty('--font-size', tamanhoFonte + 'px');
}

function diminuirFonte() {
  if (tamanhoFonte > 10) {
    tamanhoFonte -= 2;
    document.documentElement.style.setProperty('--font-size', tamanhoFonte + 'px');
  }
}

function alternarModo() {
  modoEscuro = !modoEscuro;
  if (modoEscuro) {
    document.documentElement.style.setProperty('--bg-color', '#121212');
    document.documentElement.style.setProperty('--text-color', '#ffffff');
  } else {
    document.documentElement.style.setProperty('--bg-color', '#ffffff');
    document.documentElement.style.setProperty('--text-color', '#000000');
  }
}
