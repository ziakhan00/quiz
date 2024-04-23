const quizForm = document.getElementById('quizForm');
const questionsDiv = document.getElementById('questions');
const resultDiv = document.getElementById('result');

const questions = {
    math: [
        {
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            answer: "4"
        },
        {
            question: "What is 3 x 5?",
            options: ["10", "12", "15", "20"],
            answer: "15"
        },
        {
            question: "What is 5 - 3?",
            options: ["1", "2", "3", "4"],
            answer: "2"
        }
    ],
    science: [
        {
            question: "What is the chemical symbol for water?",
            options: ["H2O", "CO2", "O2", "H2SO4"],
            answer: "H2O"
        },
        {
            question: "What is the Earth's largest continent?",
            options: ["North America", "Europe", "Asia", "Africa"],
            answer: "Asia"
        },
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Rome", "Paris",],
            answer: "Paris"
        },
    ]
};

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const topic = document.getElementById('topic').value;
    const selectedQuestions = questions[topic];
    let score = 0;

    questionsDiv.innerHTML = ''; // Clear previous questions

    selectedQuestions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `
            <h3>Question ${index + 1}</h3>
            <p>${q.question}</p>
            <select id="question${index}">
                ${q.options.map(option => `<option value="${option}">${option}</option>`).join('')}
            </select>
        `;
        questionsDiv.appendChild(questionElement);
    });

    const answers = Array.from(selectedQuestions.keys()).map((qIndex) => {
        const selectedOption = document.getElementById(`question${qIndex}`).value;
        if (selectedOption === selectedQuestions[qIndex].answer) {
            score++;
        }
        return selectedOption;
    });

    const percentageScore = ((score / selectedQuestions.length) * 100).toFixed(2);
    resultDiv.innerHTML = `<p>Dear ${name}, Your Score: ${score}/${selectedQuestions.length} (${percentageScore}%)</p>`;
});
