/* scripts.js */
const themeToggle = document.getElementById('theme-toggle');
const menuLinks = document.querySelectorAll('.menu-bar a');

// Theme toggle functionality
function switchTheme() {
    document.body.classList.toggle('light-theme');
    if (document.body.classList.contains('light-theme')) {
        themeToggle.checked = true;
    } else {
        themeToggle.checked = false;
    }
}

themeToggle.addEventListener('change', switchTheme);

menuLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Progressive Content Reveal
const revealElements = document.querySelectorAll('.reveal');

function handleScroll() {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = window.innerHeight - 150;

        if (elementTop < elementVisible) {
            element.classList.add('revealed');
        } else {
            element.classList.remove('revealed');
        }
    });
}

// Initial scroll event to check content visibility
window.addEventListener('scroll', handleScroll);

// Call once to reveal content on page load if already in view
handleScroll();

// Function to update the progress bar
function updateProgressBar() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / docHeight) * 100;
    
    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = `${progress}%`;
}

// Add event listener for scrolling
window.addEventListener('scroll', updateProgressBar);

// Initialize the progress bar on page load
document.addEventListener('DOMContentLoaded', updateProgressBar);