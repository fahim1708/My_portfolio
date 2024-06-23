const questions = [
    {
        question: "What is the capital of Missouri?",
        answers: ["A) Kansas City", "B) Jefferson City", "C) St. Louis"],
        correct: "B"
    },
    {
        question: "How many ounces in a pound?",
        answers: ["A) 10", "B) 12", "C) 16"],
        correct: "C"
    },
    {
        question: "Who was the first person to set foot on the moon?",
        answers: ["A) Buzz Aldrin", "B) Yuri Gagarin", "C) Neil Armstrong"],
        correct: "C"
    },
    {
        question: "Who holds the Major League Baseball record for most home runs in a season?",
        answers: ["A) Barry Bonds", "B) Mark McGwire", "C) Sammy Sosa"],
        correct: "A"
    },
    {
        question: "In what year was University of Liverpool founded?",
        answers: ["A) 1250", "B) 1881", "C) 1904"],
        correct: "B"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["A) Earth", "B) Mars", "C) Jupiter"],
        correct: "B"
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: ["A) Atlantic Ocean", "B) Indian Ocean", "C) Pacific Ocean"],
        correct: "C"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: ["A) William Shakespeare", "B) Charles Dickens", "C) Jane Austen"],
        correct: "A"
    },
    {
        question: "What is the smallest prime number?",
        answers: ["A) 1", "B) 2", "C) 3"],
        correct: "B"
    },
    {
        question: "What is the chemical symbol for water?",
        answers: ["A) O2", "B) H2O", "C) CO2"],
        correct: "B"
    }
];

function startQuiz() {
    const numQuestions = parseInt(document.getElementById('numQuestions').value);
    if (isNaN(numQuestions) || numQuestions < 1 || numQuestions > questions.length) {
        alert(`Please enter a number between 1 and ${questions.length}`);
        return;
    }

    const selectedQuestions = [];
    while (selectedQuestions.length < numQuestions) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        if (!selectedQuestions.includes(questions[randomIndex])) {
            selectedQuestions.push(questions[randomIndex]);
        }
    }

    const quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = '';

    selectedQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <p>Question ${index + 1}: ${q.question}</p>
            ${q.answers.map((answer, i) => `
                <label>
                    <input type="radio" name="question${index}" value="${answer[0]}" required> ${answer}
                </label>
            `).join('')}
        `;
        quizContainer.appendChild(questionDiv);
    });

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit Quiz';
    submitButton.onclick = () => submitQuiz(selectedQuestions);
    quizContainer.appendChild(submitButton);
}

function submitQuiz(selectedQuestions) {
    let correctAnswers = 0;
    const quizContainer = document.getElementById('quizContainer');
    const resultDiv = document.createElement('div');
    resultDiv.classList.add('result');

    selectedQuestions.forEach((q, index) => {
        const userAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        const userAnswerText = userAnswer ? userAnswer.value : "No answer";
        const correctAnswerText = q.answers.find(answer => answer[0] === q.correct);

        const resultText = document.createElement('p');
        if (userAnswer && userAnswer.value === q.correct) {
            correctAnswers++;
            resultText.innerHTML = `Question ${index + 1}: ${q.question}<br>You guessed ${userAnswerText}<br>CORRECT`;
        } else {
            resultText.innerHTML = `Question ${index + 1}: ${q.question}<br>You guessed ${userAnswerText}<br>INCORRECT: the correct answer is ${correctAnswerText}`;
        }
        resultDiv.appendChild(resultText);
    });

    const totalQuestions = selectedQuestions.length;
    const scorePercentage = ((correctAnswers / totalQuestions) * 100).toFixed(2);
    const scoreText = document.createElement('p');
    scoreText.innerHTML = `You answered ${correctAnswers} out of ${totalQuestions} questions correctly (${scorePercentage}%).`;

    resultDiv.appendChild(scoreText);
    quizContainer.innerHTML = '';
    quizContainer.appendChild(resultDiv);
}
