document.addEventListener('DOMContentLoaded', () => {
    const soundButton = document.getElementById('soundButton');
    soundButton.addEventListener('click', () => {
        const audio = new Audio('images/sound-effect.mp3'); // Update the path as needed
        audio.play();
    });
});
