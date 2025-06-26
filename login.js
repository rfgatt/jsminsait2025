
document.getElementById("formLogin").addEventListener("submit", function(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (!usuario) {
        alert("Campo Usuário é obrigatório");
        return;
    }

    if (!senha) {
        alert("Campo Senha é obrigatório");
        return;
    }

    if (usuario === "minsait" && senha === "2025") {
        alert("Login realizado com sucesso!");
        window.location.href = "index.html";  // Redirecionamento incluído
    } else {
        alert("Usuário ou senha inválidos.");
    }
});
