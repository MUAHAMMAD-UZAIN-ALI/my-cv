// Typed.js - typing effect
const typed = new Typed("#typed-output", {
    strings: [
        "Web Designer 💻",
        "Digital Marketer 📈",
        "Freelancer 💼",
        "Brand Owner 👑",
        "Perfume Business Owner 💎"
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1000,
    loop: true
});

// ScrollReveal animations
ScrollReveal().reveal('.reveal', {
    delay: 200,
    duration: 1000,
    easing: 'ease-in-out',
    origin: 'bottom',
    distance: '50px',
    reset: true
});

// Scroll to top button
const scrollToTop = document.getElementById("scrollToTop");

window.onscroll = () => {
    if (window.scrollY > 300) {
        scrollToTop.style.display = "block";
    } else {
        scrollToTop.style.display = "none";
    }
};

scrollToTop.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};


