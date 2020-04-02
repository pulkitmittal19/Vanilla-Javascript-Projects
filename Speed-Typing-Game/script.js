const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

// List of Sentences for game
const words = [
  'Whatever you are, be a good one',
  'He hatched from a tiny egg',
  'Fidgets spinners are so popular',
  'Try and fail, but never fail to try',
  'Do one thing every day that scares you',
  'Believe you can do it',
  'Let your memory be your travel bag',
  'Take a journey into yourself',
  'We climbed to the top of the mountain',
  'I have three things to do today',
  'Caught between a rock and a hard place',
  'Just staying one day ahead of yesterday',
  'The squeaky wheel gets the grease',
  'The stronger the breeze the stronger the trees',
  'Always deliver more than expected',
  'Nothing will work unless you do',
  'Every moment is a fresh beginning',
  'Aspire to inspire before we expire',
  'Strive for greatness',
  'Happiness depends upon ourselves',
  'Turn your wounds into wisdom',
  'It hurt because it mattered',
  'When words fail, music speaks'
];

// Init word
let randomWord;

// Init score
let score = 0;

// Init time
let time = 18;

// Set difficulty to value in ls or medium
let difficulty =
  localStorage.getItem('difficulty') !== null
    ? localStorage.getItem('difficulty')
    : 'medium';

// Set difficulty select value
difficultySelect.value =
  localStorage.getItem('difficulty') !== null
    ? localStorage.getItem('difficulty')
    : 'medium';

// Focus on text on start
text.focus();

// Start counting down
function timerun(){
  return setInterval(updateTime, 1000);
   
}


// Generate random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

// Update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

// Update time
function updateTime() {
  time--;
  timeEl.innerHTML = time + 's';

  if (time === 0) {
    clearInterval(timerun);
    // end game
    gameOver();
  }
}

// Game over, show end screen
function gameOver() {
  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
  `;

  endgameEl.style.display = 'flex';
}

addWordToDOM();

// Event listeners

// Typing
text.addEventListener('input', e => {
  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();
    

    // Clear
    e.target.value = '';

    if (difficulty === 'hard') {
      time += 7;
    } else if (difficulty === 'medium') {
      time += 8;
    } else if (difficulty === 'none') {
      alert("Please select the Difficulty Mode above");
    }
    else {
      time += 10;
    }

    updateTime();
    
    
  }
});

// Settings btn click
settingsBtn.addEventListener('click', () => settings.classList.toggle('hide'));

// Settings select
settingsForm.addEventListener('change', e => {
  difficulty = e.target.value;
  localStorage.setItem('difficulty', difficulty);
});
