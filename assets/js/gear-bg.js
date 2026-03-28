// assets/js/gear-bg.js
(function(){
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReduced) return;
if (window.innerWidth < 900) return;

const svgGs = Array.from(document.querySelectorAll('#gear-bg .gear g'));
if (!svgGs.length) return;

const baseSpeed = 1;
const maxSpeed = 6;
const decay = 0.94;
const angles = svgGs.map(()=> Math.random()*360);
const speeds = svgGs.map(()=> baseSpeed);

let lastTime = performance.now();
let centers = [];

function updateCenters(){
centers = svgGs.map(g=>{
const svg = g.ownerSVGElement;
const rect = svg.getBoundingClientRect();
return { x: rect.left + rect.width/2, y: rect.top + rect.height/2 };
});
}
updateCenters();
window.addEventListener('resize', updateCenters);

window.addEventListener('mousemove', (e)=>{
centers.forEach((c, i)=>{
const dx = e.clientX - c.x;
const dy = e.clientY - c.y;
const dist = Math.sqrt(dxdx + dydy);
const radius = Math.max(120, Math.min(window.innerWidth * 0.2, 220));
const influence = Math.max(0, 1 - dist / radius);
speeds[i] = baseSpeed + (maxSpeed - baseSpeed) * influence;
});
}, { passive: true });

function animate(now){
const dt = (now - lastTime) / 1000; lastTime = now;
svgGs.forEach((g, i)=>{
speeds[i] = speeds[i] * decay + baseSpeed * (1 - decay);
angles[i] += 60 * speeds[i] * dt; // 60deg/sec base
const svg = g.ownerSVGElement;
svg.style.transform = rotate(${angles[i]}deg);
});
requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
})();
