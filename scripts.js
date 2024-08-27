document.addEventListener('DOMContentLoaded', () => {
    const glitchEffect = () => {
        const glitchElements = document.querySelectorAll('.glitch');
        glitchElements.forEach(element => {
            element.classList.add('glitch-active');
            setTimeout(() => {
                element.classList.remove('glitch-active');
            }, 500);
        });
    };

    // Set an interval to trigger the glitch effect randomly on elements
    setInterval(glitchEffect, 1000);
});