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

document.addEventListener('DOMContentLoaded', function() {
    const userStatus = localStorage.getItem('userStatus');
    const userName = localStorage.getItem('userName');
    const accountButton = document.getElementById('accountButton');
    const userNameDisplay = document.getElementById('userName');
    const userIcon = document.getElementById('userIcon');

    if (userStatus === 'admin') {
        userNameDisplay.textContent = 'Admin';
        userIcon.src = '../Image/admin.png'; // Указать путь к иконке админа
        accountButton.onclick = () => window.location.href = 'adminPage.html';
    } else if (userStatus === 'user') {
        userNameDisplay.textContent = userName;
        userIcon.src = '../Image/user.png'; // Указать путь к иконке пользователя
        accountButton.onclick = () => window.location.href = 'userPage.html';
    } else {
        accountButton.onclick = () => window.location.href = 'admin.html';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const userIcon = document.getElementById('userIcon'); // Убедитесь, что ID вашей иконки пользователя верный
    const userNameDisplay = document.getElementById('userName'); // Убедитесь, что ID элемента для имени пользователя верный


    function updateUserInterface() {
        const userStatus = localStorage.getItem('userStatus');
        const userName = localStorage.getItem('userName');

        if (userStatus === 'admin') {

            userNameDisplay.textContent = 'Admin';
            userIcon.src = '../Image/admin.png';
            userIcon.onclick = () => window.location.href = 'adminPage.html';
        } else if (userStatus === 'user') {

            userNameDisplay.textContent = userName;
            userIcon.src = '../Image/user.png';
            userIcon.onclick = () => window.location.href = 'userPage.html';
        } else {

            userNameDisplay.textContent = '';
            userIcon.src = '../Image/userIcon.png';
            userIcon.onclick = () => window.location.href = 'admin.html';
        }
    }


    updateUserInterface();
});






