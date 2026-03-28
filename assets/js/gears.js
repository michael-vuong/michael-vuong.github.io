const canvas = document.getElementById("gearBackground");
const ctx = canvas.getContext("2d");

// Resize canvas
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Scroll tracking (smooth)
let targetScroll = window.scrollY;
let currentScroll = window.scrollY;

window.addEventListener("scroll", () => {
  targetScroll = window.scrollY;
});

// Gear setup
const gears = [];
const numGears = 12;

for (let i = 0; i < numGears; i++) {
  gears.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: 15 + Math.random() * 30,
    teeth: 7 + Math.floor(Math.random() * 4),
    baseAngle: Math.random() * Math.PI * 2,
    speed: 0.3 + Math.random() * 0.7,
    direction: Math.random() > 0.5 ? 1 : -1
  });
}

// Draw gear (cleaner shape)
function drawGear(gear, angle) {
  const { x, y, radius, teeth } = gear;

  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);

  ctx.beginPath();
  for (let i = 0; i < teeth * 2; i++) {
    const r = i % 2 === 0 ? radius : radius * 0.75;
    const theta = (i * Math.PI) / teeth;
    ctx.lineTo(Math.cos(theta) * r, Math.sin(theta) * r);
  }
  ctx.closePath();

  ctx.strokeStyle = "rgba(0,191,255,0.35)";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.restore();
}

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Smooth scroll interpolation
  currentScroll += (targetScroll - currentScroll) * 0.08;

  gears.forEach((gear) => {
    const angle =
      gear.baseAngle +
      currentScroll * 0.002 * gear.speed * gear.direction;

    drawGear(gear, angle);
  });

  requestAnimationFrame(animate);
}

animate();
