const btn_quiz = document.getElementById("btn_quiz_padilha");
const btn_fechar = document.getElementById("btn_fechar_quiz_padilha");
const quiz_modal = document.querySelector(".quiz_modal_padilha");

btn_quiz.addEventListener("click", abrirQuiz);
btn_fechar.addEventListener("click", fecharQuiz);

function abrirQuiz() {
    const campo_nome = document.getElementById("campo_nome");
    const nome_visitante = campo_nome.value.trim();

    if (nome_visitante.length < 3) {
        alert("Por favor, digite um nome válido com pelo menos 3 caracteres!");
        campo_nome.focus();
        return;
    }

    quiz_modal.style.display = "block";
}

function fecharQuiz() {
    quiz_modal.style.display = "none";
}
