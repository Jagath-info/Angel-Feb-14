// 1. Floating Hearts Background
const heartsContainer = document.getElementById('hearts-container');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // 2-5s

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

// 2. Typewriter Effect for Love Letter
const text = "To my dearest love,\n\nEvery day with you is a beautiful adventure. \nYou are the reason I smile, \nthe reason I dream, \nand the reason I breathe. \n\nI promise to love you today, \ntomorrow, and forever. \n\nHappy Valentine's Day! ❤️";
const typingElement = document.getElementById('typewriter-text');
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index) === '\n' ? '<br>' : text.charAt(index);
        index++;
        setTimeout(typeWriter, 50); // Adjust speed here
    }
}

// Trigger typewriter when section is in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.id === 'message') {
                if (index === 0) typeWriter(); // Only start if not started
            } else {
                entry.target.classList.add('visible');
            }
        }
    });
}, { threshold: 0.3 });

// Observe sections for fade-in animations
document.querySelectorAll('.gallery-item, .flip-card').forEach(el => observer.observe(el));
observer.observe(document.getElementById('message'));

// 3. Countdown Timer
const valentineDate = new Date("February 14, 2026 00:00:00").getTime();
// If needed for demo purposes, you can set a future date relative to now:
// const valentineDate = new Date().getTime() + (5 * 24 * 60 * 60 * 1000); 

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = valentineDate - now;

    if (distance < 0) {
        document.getElementById("timer").innerHTML = "<div><span>❤️</span>Happiest Valentine's!</div>";
        clearInterval(countdown);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

}, 1000);

// 4. Surprise Modal
const modal = document.getElementById("surprise-modal");
const btn = document.getElementById("surprise-btn");
const closeBtn = document.getElementsByClassName("close-btn")[0];

btn.onclick = function () {
    modal.style.display = "flex";
    createConfetti();
}

closeBtn.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// 5. Music Control
const musicBtn = document.getElementById('music-btn');
const audio = document.getElementById('bg-music');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        musicBtn.innerHTML = '<i class="fas fa-music"></i> Play Music';
    } else {
        audio.play().catch(e => console.log("Audio play failed pending interaction"));
        musicBtn.innerHTML = '<i class="fas fa-pause"></i> Pause Music';
    }
    isPlaying = !isPlaying;
});

// 6. Falling Petals for Final Section
const petalsContainer = document.getElementById('petals-container');

function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = Math.random() * 100 + '%';
    petal.style.animationDuration = Math.random() * 5 + 5 + 's';
    petal.style.width = Math.random() * 10 + 10 + 'px';
    petal.style.height = Math.random() * 10 + 10 + 'px';
    petal.style.opacity = Math.random() * 0.5 + 0.3;

    // Vary colors slightly
    const colors = ['#ff4d6d', '#ffb7b2', '#ff8fa3', '#c9184a'];
    petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    petalsContainer.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 10000);
}

// Create petals only when scrolled to bottom area to save performance
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.body.offsetHeight;

    if (scrollPosition > documentHeight - 800) {
        if (Math.random() > 0.8) createPetal(); // Adjust density
    }
});

// Confetti Effect for Surprise
function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = '50%';
        confetti.style.top = '50%';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.borderRadius = '50%';
        confetti.style.zIndex = '2001';

        // Random direction
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 300 + 100;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;

        confetti.animate([
            { transform: 'translate(0, 0)', opacity: 1 },
            { transform: `translate(${tx}px, ${ty}px)`, opacity: 0 }
        ], {
            duration: 1000,
            easing: 'cubic-bezier(0, .9, .57, 1)',
        });

        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 1000);
    }
}
