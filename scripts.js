document.addEventListener('DOMContentLoaded', () => {
    const glitchEffect = () => {
        const heroText = document.querySelector('#hero h1');
        heroText.classList.add('glitch');
        setTimeout(() => {
            heroText.classList.remove('glitch');
        }, 300);
    };

    setInterval(glitchEffect, 1000);
});