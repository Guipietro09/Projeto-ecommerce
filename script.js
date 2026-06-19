document.addEventListener("DOMContentLoaded", function(){

    const formulario = document.getElementById("formCadastro");

    if(formulario){

        formulario.addEventListener("submit", function(event){

            event.preventDefault();

            let nome = document.getElementById("nome").value;
            let email = document.getElementById("email").value;
            let senha = document.getElementById("senha").value;

            if(nome === "" || email === "" || senha === ""){
                alert("Preencha todos os campos!");
                return;
            }

            document.getElementById("resultado").innerHTML =
            `
            Cadastro realizado com sucesso!<br>
            Bem-vindo(a), <strong>${nome}</strong>.
            `;

            formulario.reset();
        });
    }

});