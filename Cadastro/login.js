/* $(document).ready(function() {
  $(".btn").click(function(e) {
    e.preventDefault();

    // Obtenha o email e a senha informados pelo usuário
    var email = $("input[type='email']").val();
    var senha = $("input[type='password']").val();

    // Obtenha os dados armazenados no LocalStorage
    var usuarios = JSON.parse(localStorage.getItem("usuarios"));

    // Verifique se o usuário existe e a senha está correta
    var usuarioEncontrado = false;
    for (var i = 0; i < usuarios.length; i++) {
      if (usuarios[i].email == email && usuarios[i].senha == senha) {
        usuarioEncontrado = true;
        break;
      }
    }

    // Exiba uma mensagem de sucesso ou erro com base no resultado da validação
    if (usuarioEncontrado) {
      alert("Login realizado com sucesso!");
      // Redirecione para a página "dashboard.html"
      window.location.href = "dashboard.html";
    } else {
      alert("Email ou senha incorretos. Tente novamente.");
    }
  });
});
 */