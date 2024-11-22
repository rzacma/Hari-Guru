const canvas = 
document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiParticles = [];

class confetti {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 5;
        this.color = color;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 3 + 1;
canvas.width;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.y > canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
        }
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillstyle = this.color;
        ctx.fill();
    }

}
function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const x = Math.random() *
        canvas.width;
        const y = Math.random() *
        canvas.height;
        const color = 'hsl(${Math.random() * 360}, 100%, 50%)';
        confettiParticles.push(new confetti(x, y, color));
    }
}
function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiParticles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animateConfetti);
}

createConfetti();
animateConfetti();
