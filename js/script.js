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
