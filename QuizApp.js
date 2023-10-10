const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "Berlin", correct: false },
      { text: "London", correct: false },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "What is the capital of Britain?",
    answers: [
      { text: "Paris", correct: false },
      { text: "Berlin", correct: false },
      { text: "London", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "What is the Full Form of HTML?",
    answers: [
      { text: "Hypertext Markup ", correct: false },
      { text: "Hypertext Language", correct: false },
      { text: "Hyper Markup Language", correct: false },
      { text: "Hypertext Markup Language", correct: true },
    ],
  },
  {
    question: "What is the Full Form of CSS?",
    answers: [
      { text: "Cascading Style  ", correct: false },
      { text: "Cascading Style Sheets", correct: true },
      { text: "Cascading Sheets", correct: false },
      { text: "Style Sheets", correct: false },
    ],
  },
  // Add more questions here...
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("prev-button").classList.add("hide");
  document.getElementById("next-button").classList.remove("hide");
  document.getElementById("submit-button").classList.add("hide");
  document.getElementById("restart-button").classList.add("hide");
  showQuestion(currentQuestionIndex);
}

function showQuestion(index) {
  const question = questions[index];
  document.getElementById("Questions").innerHTML = question.question;
  document.getElementById("AnswerOptions").innerHTML = "";

  question.answers.forEach((answer, answerIndex) => {
    // below code  from LineNo.61 to 65 by using button elements
    // const button = document.createElement("button");
    // button.innerText = answer.text;
    // button.classList.add("btn");
    // button.addEventListener("click", () => selectAnswer(answer));
    // document.getElementById("AnswerOptions").appendChild(button);
    // or
    // below code from lineno:67 to 87 by using radiobutton
    const radioContainer = document.createElement("label");
    radioContainer.classList.add("radio-label");

    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.name = "answer";
    radioInput.id = `answer-${answerIndex}`;
    radioInput.classList.add("radio-input");
    radioInput.value = answerIndex;
    radioInput.addEventListener("change", () => selectAnswer(answer));

    const radioLabel = document.createElement("div");

    radioContainer.appendChild(radioInput);
    radioContainer.appendChild(radioLabel);

    const answerText = document.createElement("span");
    answerText.innerText = answer.text;
    radioContainer.appendChild(answerText);

    document.getElementById("AnswerOptions").appendChild(radioContainer);
  });

  // Show or hide previous and next buttons based on the current question
  if (index === 0) {
    document.getElementById("prev-button").classList.add("hide");
  } else {
    document.getElementById("prev-button").classList.remove("hide");
  }

  if (index === questions.length - 1) {
    document.getElementById("next-button").classList.add("hide");
    document.getElementById("submit-button").classList.remove("hide");
  } else {
    document.getElementById("next-button").classList.remove("hide");
    document.getElementById("submit-button").classList.add("hide");
  }
}

function selectAnswer(answer) {
  if (answer.correct) {
    score++; // Increment the score
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion(currentQuestionIndex);
  }
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
  }
}

function showResults() {
  // Display the user's score and a completion message
  document.getElementById(
    "Questions"
  ).innerText = `Quiz Completed! Your Score: ${score}/${questions.length}`;
  document.getElementById("AnswerOptions").innerHTML = "";

  // Show the "Restart Quiz" button
  const restartButton = document.getElementById("restart-button");
  restartButton.classList.remove("hide");
}

function restartQuiz() {
  // Reset variables
  currentQuestionIndex = 0;
  score = 0;

  // Hide the "Restart Quiz" button
  document.getElementById("restart-button").classList.add("hide");

  // Start the quiz again
  startQuiz();
}

// Initialize the quiz
startQuiz();
