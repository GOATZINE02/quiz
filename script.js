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
