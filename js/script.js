let score = 0;
let totalQuestions = document.querySelectorAll('.quiz-question').length;

function checkAnswer(button) {
    const isCorrect = button.getAttribute('data-correct') === 'true';
    
    if (isCorrect) {
        button.classList.add('correct');
        score++;
    } else {
        button.classList.add('wrong');
    }
    
    // Disable all buttons in the same question
    const buttons = button.parentElement.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);
    
    // Display result if all questions are answered
    if (document.querySelectorAll('button:disabled').length === totalQuestions * 4) {
        document.getElementById('result').innerText = `Você acertou ${score} de ${totalQuestions} perguntas.`;
    }
}


const botao1 = document.getElementById('btn')
const botao2 = document.getElementById('btn2')


botao1.addEventListener('click', function(){
    alert("Login feito com sucesso!")
})


botao2.addEventListener('click', function(){
    alert("Cadastro feito com sucesso!")
})




document.getElementById("Enviar").addEventListener("click", function() {
    alert("Sua solicitação foi recebida");
});