// Starfield animation setup
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
let stars = [];

function initStars() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  stars = [];
  for(let i=0; i<100; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.5 + 0.2,
    });
  }
}
function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#0ff';
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
    ctx.fill();
    star.x -= star.speed;
    if(star.x < 0) star.x = canvas.width;
  });
  requestAnimationFrame(drawStars);
}

window.addEventListener('resize', initStars);
initStars();
drawStars();

// Typing effect for tagline
const tagline = document.querySelector('.tagline');
const text = "🚀 Ambitious CSE Student | Coding the Future | On a mission to master and join legends like Musk, Huang, and Hawking 🔥";
let index = 0;

function typeWriter() {
  if(index < text.length) {
    tagline.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}
tagline.textContent = '';  // clear tagline first
typeWriter();
