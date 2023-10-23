//Timer functionality
function timer() {
    var currentTime = new Date();
    const targetTime = new Date('2023-12-25T23:59:59');
    var remainingTime = targetTime - currentTime;

    if (remainingTime <= 0) {
        if (sessionStorage.getItem('alerted') != 'false'){
            alert("Game Update has been released!");
            sessionStorage.setItem('alerted', 'false');
        }
        
        document.getElementById('countdown').innerHTML = 'Update is released. Check the new version of the Game!'
    }
    else{
        var second = Math.floor((remainingTime / 1000) % 60);
        var minute = Math.floor((remainingTime / 1000 / 60) % 60);
        var hour = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
        var day =  Math.floor(remainingTime / (1000 * 60 * 60 * 24));

        document.getElementById('countdown').innerHTML = day + " days " + hour + " hours " + minute + " minutes " + second + " seconds left until the update!";
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

