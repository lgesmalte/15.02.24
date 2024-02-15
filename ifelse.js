function verificarLogin() {
    let txtlogin = document.getElementById('txtLogin');
    let txtsenha = document.getElementById('txtsenha');

    let login = "teste";
    login = "teste2"
    let senha = "teste";

    if (txtLogin.value == login && txtsenha.value == senha) {
        console.log("Logado com sucesso!")
    } else {
        console.log("Login ou senha incorretos! Digite e tente novamente.")
    }
}