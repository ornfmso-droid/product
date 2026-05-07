const generateBtn = document.getElementById('generate-btn');
const numbersContainer = document.getElementById('numbers-container');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Theme Logic
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  body.classList.add('dark');
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const theme = body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});

// Lotto Generation Logic
generateBtn.addEventListener('click', () => {
  numbersContainer.innerHTML = '';
  const lottoNumbers = new Set();

  while (lottoNumbers.size < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    lottoNumbers.add(randomNumber);
  }

  const sortedNumbers = Array.from(lottoNumbers).sort((a, b) => a - b);

  sortedNumbers.forEach((number, index) => {
    setTimeout(() => {
      const circle = document.createElement('div');
      circle.classList.add('number');
      circle.textContent = number;

      if (number >= 1 && number <= 10) {
        circle.style.backgroundColor = '#fbc400';
      } else if (number >= 11 && number <= 20) {
        circle.style.backgroundColor = '#69c8f2';
      } else if (number >= 21 && number <= 30) {
        circle.style.backgroundColor = '#ff7272';
      } else if (number >= 31 && number <= 40) {
        circle.style.backgroundColor = '#aaa';
      } else {
        circle.style.backgroundColor = '#b0d840';
      }

      numbersContainer.appendChild(circle);
    }, index * 100);
  });
});
