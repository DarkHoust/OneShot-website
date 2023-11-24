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
    const userIcon = document.getElementById('userIcon');
    const userStatus = localStorage.getItem('userStatus');
    const userName = localStorage.getItem('userName');

    function updateUserInterface() {
        if (userStatus === 'admin') {

            userIcon.src = '../Image/admin.png';
            userIcon.alt = 'Admin';
            userIcon.onclick = function() { window.location.href = 'adminPage.html'; };
        } else if (userStatus === 'user') {

            userIcon.src = '../Image/user.png';
            userIcon.alt = userName;
            userIcon.onclick = function() { window.location.href = 'userPage.html'; };
        } else {

            userIcon.src = '../Image/userIcon.png';
            userIcon.alt = 'User Icon';
            userIcon.onclick = function() { window.location.href = 'login.html'; };
        }
    }


    updateUserInterface();
});
