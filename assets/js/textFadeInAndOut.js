document.addEventListener('DOMContentLoaded', function() {
    const texts = document.querySelectorAll('.fading-text');
    let currentIndex = 0;

    function fadeOut(element) {
        element.classList.remove('show');
    }

    function fadeIn(element) {
        element.classList.add('show');
    }

    function showNextText() {
        fadeOut(texts[currentIndex]);

        currentIndex = (currentIndex + 1) % texts.length;

        fadeIn(texts[currentIndex]);

        setTimeout(showNextText, 3000); // Change text every 3 seconds
    }

    fadeIn(texts[currentIndex]); // Initially show the first text
    setTimeout(showNextText, 3000); // Start the loop after 3 seconds
});
