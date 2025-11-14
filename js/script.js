const botaoAcao = document.getElementById('awakenButton');
const userInput = document.getElementById('druidNameInput');
const divResposta = document.getElementById('forestResponse');

botaoAcao.addEventListener('click', function() {

  let mensagem = `Bem vindo(a) aventureiro(a), ${userInput.value} :)`;

  divResposta.textContent = mensagem;

});