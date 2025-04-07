let score = 0;
const button = document.getElementById('clickBtn');
const scoreDisplay = document.getElementById('score');

button.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = score;
});
