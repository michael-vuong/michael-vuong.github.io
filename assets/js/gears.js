const canvas = document.getElementById("gearBackground");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create gears
const gears = [];
const numGears = 12;

for (let i = 0; i < numGears; i++) {
  gears.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: 15 + Math.random() * 35,
    teeth: 6 + Math.floor(Math.random() * 5),
    angle: Math.random() * Math.PI * 2,
    speed: 0.001 + Math.random() * 0.003
  });
}

let mouseX = canvas.width / 2;
window.addEventListener("mousemove", (e) => { mouseX = e.clientX; });

function drawGear(gear) {
  const { x, y, radius, teeth, angle } = gear;
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);

  ctx.beginPath();
  for (let i = 0; i < teeth; i++) {
    const theta = (i * 2 * Math.PI) / teeth;
    ctx.lineTo(Math.cos(theta) * radius, Math.sin(theta) * radius);
  }
  ctx.closePath();
  ctx.strokeStyle = "rgba(0,191,255,0.5)";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.restore();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  gears.forEach((gear) => {
    const direction = mouseX > canvas.width / 2 ? 1 : -1;
    gear.angle += gear.speed * direction;
    drawGear(gear);
  });

  requestAnimationFrame(animate);
}

animate();

// Resize canvas on window change
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
