const questionScreen = document.getElementById('questionScreen');
const loveScreen = document.getElementById('loveScreen');
const loveMoreButton = document.getElementById('loveMore');
const loveButton = document.getElementById('love');
const backHomeButton = document.getElementById('backHome');
const toast = document.getElementById('toast');

function showLoveScreen(answer) {
  // Both answers intentionally lead to the same love message.
  questionScreen.hidden = true;
  questionScreen.classList.remove('active');
  loveScreen.hidden = false;
  loveScreen.classList.add('active');
  showToast(answer === 'more' ? 'เย้ รักมากกกเลยย 💖' : 'เย้ รักเหมือนกันนะ 💗');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  makeHearts();
}

function showHomeScreen() {
  loveScreen.hidden = true;
  loveScreen.classList.remove('active');
  questionScreen.hidden = false;
  questionScreen.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 1800);
}

function makeHearts() {
  const symbols = ['💗', '💕', '💖', '♡', '🎀'];
  for (let i = 0; i < 12; i += 1) {
    const heart = document.createElement('span');
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.position = 'fixed';
    heart.style.left = `${Math.random() * 90 + 5}%`;
    heart.style.top = `${Math.random() * 70 + 10}%`;
    heart.style.zIndex = '10';
    heart.style.pointerEvents = 'none';
    heart.style.fontSize = `${18 + Math.random() * 18}px`;
    heart.style.transition = 'transform 1.2s ease, opacity 1.2s ease';
    document.body.appendChild(heart);

    requestAnimationFrame(() => {
      heart.style.transform = `translateY(-${60 + Math.random() * 100}px) rotate(${Math.random() * 50 - 25}deg)`;
      heart.style.opacity = '0';
    });
    window.setTimeout(() => heart.remove(), 1300);
  }
}

loveMoreButton.addEventListener('click', () => showLoveScreen('more'));
loveButton.addEventListener('click', () => showLoveScreen('love'));
backHomeButton.addEventListener('click', showHomeScreen);
