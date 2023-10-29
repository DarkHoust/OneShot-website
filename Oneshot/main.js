//Timer functionality
function timer() {
    var currentTime = new Date();
    const targetTime = new Date();
    var remainingTime = targetTime - currentTime;
    
    if (remainingTime <= 0) {
        if (sessionStorage.getItem('alerted') != 'false'){
            alert("Game Update has been released!");
            sessionStorage.setItem('alerted', 'false');
        }
        document.getElementById('countdown').innerHTML = 'Update is released. Check the new version of the Game!'
        
    } else{
        var second = Math.floor((remainingTime / 1000) % 60);
        var minute = Math.floor((remainingTime / 1000 / 60) % 60);
        var hour = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);

        document.getElementById('countdown').innerHTML = hour + " hours " + minute + " minutes " + second + " seconds left until the update!";
    }
}

//Launching a timer function every 1000ms
setInterval(timer, 1000);

//Carousel functionality
var slides = document.querySelectorAll('.carousel-items');
var currentSlideIndex = 0;

function showSlide(index) {
    slides.forEach(item => {
        item.style.display = 'none';
    });

    slides[index].style.display = 'block'
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex)
}

function previousSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex)
}

showSlide(currentSlideIndex);

document.getElementById('prevBtn').addEventListener('click', previousSlide);
document.getElementById('nextBtn').addEventListener('click', nextSlide);



const btnToTop = document.querySelector(".btn-to-top");

// Функция, которая будет прокручивать страницу вверх
function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
    });
}

// Клик по кнопке "Наверх"
// btnToTop.addEventListener('click', scrollToTop);



setInterval(nextSlide, 5000);

//Redirect...
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