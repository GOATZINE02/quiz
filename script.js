const quizData = [
  {
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: 1
  },
  {
    question: "What year did the Titanic sink?",
    choices: ["1912", "1905", "1898", "1920"],
    answer: 0
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    choices: ["Harper Lee", "F. Scott Fitzgerald", "Mark Twain", "Ernest Hemingway"],
    answer: 0
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    choices: ["Gold", "Oxygen", "Silver", "Iron"],
    answer: 1
  }
];
let currentQuestionIndex = 0;
let userAnswers = Array(quizData.length).fill(null);

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getOM-elementit
const questionNumberEl = document.getElementById('question-number');
const questionTextEl = document.getElementById('question-text');
const choicesLiElementById('next-btn');
const quizContentEl = document.getElementById('quiz-content');
const resultEl = document.getElementById('result');
const scoreTextEl = document.getElementById('score-text');
const progressBarEl = document.getElementById('progress-bar');
function renderQuestion() {
  const { question, choices } = quizData[currentQuestionIndex];

  questionNumberEl.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
  questionTextEl.textContent = question;
  choicesListEl.innerHTML = '';

    choices.forEach((choice, i) => {
    const li = document.createElement('li');
    li.className = 'choice-item';

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'choice';
    input.id = `choice-${i}`;
    input.value = i;
    input.checked = userAnswers[currentQuestionIndex] === i;

    input.addEventListener('change', () => {
      userAnswers[currentQuestionIndex] = i;
      updateNextBtnState();
    });

    const label = document.createElement('label');
    label.htmlFor = input.id;
    label.className = 'choice-label';
    label.textContent = choice;

    li.appendChild(input);
    li.appendChild(label);
    choicesListEl.appendChild(li);
  });  

  updateNavButtons();
  updateNextBtnState();
  renderProgressBar();
}

function updateNavButtons() {
  prevBtn.disabled = currentQuestionIndex === 0;

  if (currentQuestionIndex === quizData.length - 1) {
    nextBtn.textContent = 'Submit';
    nextBtn.setAttribute('aria-label', 'Submit quiz');
  } else {
    nextBtn.textContent = 'Next';
    nextBtn.setAttribute('aria-label', 'Next Question');
  }
}

function updateNextBtnState() {
  nextBtn.disabled = userAnswers[currentQuestionIndex] === null;
}

function calculateScore() {
  return quizData.reduce((score, q, i) => score + (userAnswers[i] === q.answer ? 1 : 0), 0);
}

function showResult() {
  const score = calculateScore();
  quizContentEl.style.display = 'none';
  resultEl.style.display = 'block';
  scoreTextEl.textContent = `${score} / ${quizData.length}`;
  prevBtn.style.display = 'none';
  nextBtn.textContent = 'Restart';
  nextBtn.disabled = false;
  nextBtn.setAttribute('aria-label', 'Restart quiz');
}

function restartQuiz() {
  userAnswers.fill(null);
  currentQuestionIndex = 0;
  resultEl.style.display = 'none';
  quizContentEl.style.display = 'block';
  prevBtn.style.display = 'inline-block';
  renderQuestion();
}

prevBtn.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
});

nextBtn.addEventListener('click', () => {
  if (nextBtn.textContent === 'Restart') {
    restartQuiz();
  } else if (nextBtn.textContent === 'Submit') {
    showResult();
  } else {
    currentQuestionIndex++;
    renderQuestion();
  }
});
