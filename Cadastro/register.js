/* $(document).ready(function() {
  $(".btn").click(function(e) {
    e.preventDefault();

    // Obtenha os valores dos campos do formulário
    var usuario = $("#usuario").val();
    var email = $("#email").val();
    var senha = $("#senha").val();
    var senhaC = $("#senhaC").val();

    // Verifique se o email já foi cadastrado
    var usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];
    var usuarioExistente = usuariosCadastrados.find(function(u) { return u.email === email; });

    if (usuarioExistente) {
      // Exiba uma mensagem de alerta se o email já foi cadastrado
      alert("O email já foi cadastrado. Tente novamente com outro email.");
    } else {
      // Armazene os dados no LocalStorage
      var usuarioNovo = { usuario: usuario, email: email, senha: senha };
      usuariosCadastrados.push(usuarioNovo);
      localStorage.setItem("usuarios", JSON.stringify(usuariosCadastrados));

      // Redirecione para a página de dashboard
      window.location.href = "dashboard.html";
    }
  });
});
 */