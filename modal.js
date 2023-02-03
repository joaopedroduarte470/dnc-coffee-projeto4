// O modal
var modal = document.getElementById("myModal");

// Botao Modal
var btn = document.getElementById("botao");

// <span> fecha o modal
var span = document.getElementsByClassName("close")[0];

// Ao clicar abrir o modal 
botao.onclick = function() {
  modal.style.display = "block";
}

// O que faz ao clicar no X
span.onclick = function() {
  modal.style.display = "none";
}

// Quando se clicar em qualquer parte fora do modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
