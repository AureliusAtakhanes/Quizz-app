const quiz = [
  {
    question: "Сколько областей в Кыргызстане?",
    answer1: "7",
    answer2: "6",
    answer3: "8",
    answer4: "5",
    correct: 1,
  },
  {
    question: "С какими странами соседуствует Кыргызстан?",
    answer1: "Казахстан, Узбекистан, Таджикистан, Китай",
    answer2: "Казахстан, Таджикистан, Китай, Туркменистан, Узбекистан",
    answer3: "Китай, Казахстан, Таджикистан, Узбекистан, Афганистан",
    answer4: "Узбекистан, Таджикистан, Китай, Казахстан, Россия",
    correct: 1,
  },
  {
    question: "В каком году Кыргызстан обрел независимость?",
    answer1: "1992",
    answer2: "1991",
    answer3: "1990",
    answer4: "1994",
    correct: 2,
  },
  {
    question: 'Столица Кыргызстана',
    answer1: "Баткен",
    answer2: "Ош",
    answer3: "Бишкек",
    answer4: "Алмата",
    correct: 3,
  },
];

const container = document.querySelector(".container");

let i = 0;
let correct = 0;
renderQuestion(i);

function renderQuestion(i) {
  container.innerHTML = `
  <b class="question">${quiz[i].question}</b>
  <ul class="answers-list">
  <li class="answers-item">
  <input type="radio" name="answer" value="1" id="answer1" checked>
  <label for="answer1">${quiz[i].answer1}</label>
  </li>
  <li class="answers-item">
  <input type="radio" name="answer" value="2" id="answer2">
  <label for="answer2">${quiz[i].answer2}</label>
  </li>
  <li class="answers-item">
  <input type="radio" name="answer" value="3" id="answer3">
  <label for="answer3">${quiz[i].answer3}</label>
  </li>
  <li class="answers-item">
  <input type="radio" name="answer" value="4" id="answer4">
  <label for="answer4">${quiz[i].answer4}</label>
  </li>
  </ul>
  <button class="btn">Готово</button>
  `;

  const btn = document.querySelector(".btn");

  btn.addEventListener("click", () => {
    checkAnswer();
    changeQuestion();
  });
}

function checkAnswer() {
  const input = document.querySelector("input:checked");
  if (input.value == quiz[i].correct) correct += 1;
}

function changeQuestion() {
  i++;

  if (i === quiz.length) {
    showResult();
    return;
  }

  renderQuestion(i);
}

function showResult() {
  container.innerHTML = `
    <b class="title">Вопросы закончились :(</b>
    <p>Ваш результат таков: ${correct} правильных ответа из ${quiz.length}</p>
    <button class="btn" onclick="location.reload()">Попробовать снова</button>
  `;
}
