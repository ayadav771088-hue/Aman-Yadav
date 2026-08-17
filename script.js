document.addEventListener("DOMContentLoaded", () => {
  const words = ["Aman Yadav ", "A Tech Enthusist", "A Problem Solver", "An Engineer"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingElement = document.querySelector(".typing-text");

  function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 2000; // Pura likhne ke baad 2 second rukega
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 400; // Agla word shuru karne se pehle chhota pause
    }

    setTimeout(typeEffect, typeSpeed);
  }

  typeEffect();
});
