const words = [
    "Social Intelligence.",
    "Interactive Narratives.",
    "Game Dynamics.",
    "Player Behavior."
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typewriter");

function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    // Adjust typing speed based on action
    let typeSpeed = isDeleting ? 50 : 100;

    // Pause at the end of a word
    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000; 
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

// Start the typing effect when the page loads
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 1000);
});