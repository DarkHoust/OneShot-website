//Redirecting...
const logoImage = document.getElementById('lamp-logo');
const breakSounds = [
    document.getElementById('breakSound1'),
    document.getElementById('breakSound2'),
    document.getElementById('breakSound3'),
];
let clickCount = 0;

logoImage.addEventListener('click', () => {
    clickCount++;

    const soundToPlay = breakSounds[0];
    soundToPlay.play();

    if (clickCount >= 5) {
        window.location.href = "jpage.html";
    }
});