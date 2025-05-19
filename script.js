// Dark Mode Toggle 
const toggleButton = document.createElement('button');
toggleButton.innerText = 'Dark Mode On/Off';
toggleButton.className = 'toggle-dark-mode';
document.body.appendChild(toggleButton);

// Position the Dark Mode Button Above the Header
toggleButton.style.position = 'fixed';
toggleButton.style.top = '10px';
toggleButton.style.right = '10px';
toggleButton.style.zIndex = '1001'; // Ensures it stays above the nav bar

// Toggle Dark Mode
let darkMode = true;
toggleButton.addEventListener('click', () => {
    darkMode = !darkMode;
    document.body.style.backgroundColor = darkMode ? '#000' : '#f8f9fa';
    document.body.style.color = darkMode ? '#fff' : '#2c3e50';
});

// Section Fade-In Effect
const sections = document.querySelectorAll('section');

const revealSection = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealSection);
revealSection();

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
// JavaScript for Projects Carousel
const track = document.querySelector('.project-track');
const nextButton = document.createElement('button');
const prevButton = document.createElement('button');

nextButton.className = 'carousel-btn next';
prevButton.className = 'carousel-btn prev';
nextButton.innerText = '›';
prevButton.innerText = '‹';

document.querySelector('#projects').appendChild(prevButton);
document.querySelector('#projects').appendChild(nextButton);

let currentIndex = 0;
const totalProjects = document.querySelectorAll('.project-card').length;
const projectsPerView = 3;

nextButton.addEventListener('click', () => {
    if (currentIndex < totalProjects - projectsPerView) {
        currentIndex++;
        updateCarousel();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

function updateCarousel() {
    const offset = currentIndex * (100 / projectsPerView);
    track.style.transform = `translateX(-${offset}%)`;
}