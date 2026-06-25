// Confetti Antigravity
function triggerConfetti() {
  const colors = ['#ff69b4', '#ffb6c1', '#ff1493', '#ffc0cb', '#e02b7e'];
  for (let i = 0; i < 160; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-10px';
    confetti.style.width = Math.random() * 9 + 7 + 'px';
    confetti.style.height = confetti.style.width;
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.borderRadius = '50%';
    confetti.style.zIndex = '9999';
    confetti.style.opacity = Math.random() * 0.85 + 0.6;
    document.body.appendChild(confetti);
    
    const duration = Math.random() * 3.2 + 2.8;
    confetti.animate([
      { transform: `translateY(0) rotate(0deg)`, opacity: 1 },
      { transform: `translateY(${window.innerHeight + 120}px) translateX(${Math.random() * 280 - 140}px) rotate(${Math.random() * 900 - 400}deg)`, opacity: 0 }
    ], { duration: duration * 1000, easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)' });
    
    setTimeout(() => confetti.remove(), duration * 1100);
  }
}

// Initial hearts on load Gemini
document.addEventListener('DOMContentLoaded', () => {
  console.log('%cHappy 25th Monthsary 💕', 'color: #e02b7e; font-family: Dancing Script; font-size: 18px;');
});