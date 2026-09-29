const submitButton = document.getElementById('submit');
const buttonNoise = document.getElementById('button-noise');
const log = document.getElementById('log');
// const logNoise = document.getElementById('log-noise');
const userInput = document.getElementById('answer');
const nextButton = document.getElementById('next');
const nextNoise = document.getElementById('next-noise');
const prevButton = document.getElementById('prev');
const prevNoise = document.getElementById('prev-noise');
const titleNoise = document.getElementById('title-noise');
const questionImg = document.querySelector('.question');

const answers = [
  'すたーと',
  'ならずもの',
  'せいぎ'
];

let isAnswered = [
  0,
  0,
  0
]

const questionMax = 3;

let clickCount = 0;
let questionNumber = 1;

let isButtonNoiseDisabled = 0;

let answered1 = 0;

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  // if (!buttonNoise || buttonNoise.style.display === 'none') {
  //   return;
  // }

  if (!isButtonNoiseDisabled) {
    clickCount++;
    // console.log(`クリック回数: ${clickCount}`);

    if (clickCount === 5) {
      buttonNoise.style.display = 'none';

      log.innerHTML = log.innerHTML + '「送信」ボタンを解禁しました！「すたーと」と送信しよう。<br>';

      isButtonNoiseDisabled = 1;
    }
  } else {
    let answer = userInput.value;
    let trueAnswer = answers[questionNumber - 1];

    if (answer === trueAnswer) {
      if (questionNumber === 1 && !isAnswered[0]) {
        isAnswered[0] = 1;

        nextNoise.style.display = 'none';

        log.innerHTML = log.innerHTML + '「次」ボタンを解禁しました！<br>';
      }

      if (questionNumber === 2 && !isAnswered[1]) {
        isAnswered[1] = 1;

        titleNoise.style.display = 'none';

        log.innerHTML = log.innerHTML + 'タイトルを解禁しました！<br>';
      }

      if (questionNumber === 3 && !isAnswered[2]) {
        isAnswered[2] = 1;
        log.innerHTML = log.innerHTML + 'ログを解禁しました！<br>';
        let logNoise = document.getElementById('log-noise');
        logNoise.style.display = 'none';

        
      }
    }
  }
});

nextButton.addEventListener('click', () => {
  if (isAnswered[questionNumber - 1] && questionNumber < questionMax) {
    questionNumber++;

    questionImg.src = `images/q${questionNumber}.gif`;
  }
})

prevButton.addEventListener('click', () => {
  if (questionNumber > 0 && prevNoise.style.display === 'none') {
    questionNumber--;

    questionImg.src = `images/q${questionNumber}.gif`;
  }
})