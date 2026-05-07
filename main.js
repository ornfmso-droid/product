const generateBtn = document.getElementById('generate-btn');
const numbersContainer = document.getElementById('numbers-container');

generateBtn.addEventListener('click', () => {
  numbersContainer.innerHTML = '';
  const lottoNumbers = new Set();

  while (lottoNumbers.size < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    lottoNumbers.add(randomNumber);
  }

  const sortedNumbers = Array.from(lottoNumbers).sort((a, b) => a - b);

  sortedNumbers.forEach(number => {
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
  });
});
