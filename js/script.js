
var listaEmailsAutorizados = ['cliente1@gmail.com', 'cliente2@gmail.com', 'cliente3@gmail.com'];

function verificarEmail() {
  var email = document.getElementById('email').value;

  if (listaEmailsAutorizados.includes(email)) {
    // Se o email estiver na lista, redirecionar para a página de compra
    window.location.href = 'PagCompra.html';
    return false; // Impede o envio do formulário
  } else {
    // Se o email não estiver na lista, exibir mensagem de erro
    alert('E-mail não autorizado. Tente novamente.');
    return false; // Impede o envio do formulário
  }
}