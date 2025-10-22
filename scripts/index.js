document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.querySelector('.btn-success');
  const overlay = document.getElementById('hack-overlay');
  const canvas = document.getElementById('hack-canvas');
  const bands = document.getElementById('glitch-bands');
  const ctx = canvas.getContext('2d');

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()[]{}<>?/|\\';
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  const fontSize = Math.max(12, Math.floor(width / 120));
  const columns = Math.floor(width / fontSize);
  const drops = new Array(columns).fill(1);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  function drawRain() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = '#00FF5A';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
      const text = chars.charAt(Math.floor(Math.random() * chars.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  function startRain(durationMs) {
    // Immediately show full overlay
    overlay.classList.add('active');
    overlay.style.background = 'rgba(0,0,0,1)'; // full opacity
    bands.classList.add('active');
    canvas.style.opacity = '1';

    let startTime = null;

    function loop(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      drawRain();

      if (elapsed < durationMs) {
        requestAnimationFrame(loop);
      } else {
        endEffect();
      }
    }

    requestAnimationFrame(loop);
  }

  function endEffect() {
    // Fade out bands & canvas quickly
    bands.classList.add('fadeout');
    canvas.style.transition = 'opacity 0.2s ease';
    canvas.style.opacity = '0';

    // Final flash (full overlay remains visible)
    overlay.classList.add('final-flash');

    // Redirect immediately after flash
    setTimeout(() => {
      window.location.replace('html/home.html'); // use replace to avoid flicker
    }, 180); // matches finalFlash duration
  }

  if (startBtn) {
    startBtn.addEventListener('click', (e) => {
      e.preventDefault();
      for (let i = 0; i < drops.length; i++) drops[i] = Math.floor(Math.random() * height / fontSize);
      startRain(1200); // matrix effect duration
    });
  }
});
