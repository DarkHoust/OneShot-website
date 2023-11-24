
const storedUsers = localStorage.getItem('users');
const users = storedUsers ? JSON.parse(storedUsers) : [
    { email: 'user1@mail.ru', password: 'userpass' },
    { email: 'user2@mail.ru', password: 'userpass' }
];

document.getElementById('adminLoginForm').addEventListener('submit', function(event){
    event.preventDefault();


    const admins = [
        { email: 'admin1@mail.ru', password: 'adminpass' },
        { email: 'admin2@mail.ru', password: 'adminpass' }
    ];

    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;


    const isAdminAuthenticated = admins.some(admin => admin.email === email && admin.password === password);

    const isUserAuthenticated = users.some(user => user.email === email && user.password === password);

    if (isAdminAuthenticated) {
        localStorage.setItem('userStatus', 'admin');
        localStorage.setItem('userName', 'Admin');
        window.location.href = 'main.html';
    } else if (isUserAuthenticated) {
        localStorage.setItem('userStatus', 'user');
        localStorage.setItem('userName', email);
        window.location.href = 'main.html';
    } else {
        alert('Incorrect email or password. Please try again.');
    }
});

document.getElementById('adminRegisterForm').addEventListener('submit', function(event){
    event.preventDefault();

    const registerEmail = document.getElementById('registerEmailInput').value;
    const registerPassword = document.getElementById('registerPasswordInput').value;
    const confirmPassword = document.getElementById('confirmPasswordInput').value;

    if (!validatePassword(registerPassword)) {
        alert('Password must contain at least one digit, one special character !@#$%^&* and be at least 8 characters long.');
        return;
    }


    if (registerPassword !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    const isUserExist = users.some(user => user.email === registerEmail);

    if (isUserExist) {
        alert('A user with this email already exists.');
        return;
    }


    users.push({
        email: registerEmail,
        password: registerPassword
    });


    localStorage.setItem('users', JSON.stringify(users));


    document.getElementById('adminRegisterForm').reset();

    alert('Registration successful!');
});


function validatePassword(password) {

    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
}

document.getElementById('toggleToRegister').addEventListener('click', function(event) {
    event.preventDefault();
    var registrationForm = document.getElementById('registrationForm');


    if (registrationForm.style.display === 'none') {
        registrationForm.style.display = 'block';
        registrationForm.style.opacity = 0;
        let opacity = 0;


        const fadeIn = setInterval(function () {
            if (opacity < 1) {
                opacity += 0.1;
                registrationForm.style.opacity = opacity;
            } else {
                clearInterval(fadeIn);
            }
        }, 50);
    } else {

        registrationForm.style.display = 'none';
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
        userIcon.src = '../Image/admin.png';
        accountButton.onclick = () => window.location.href = 'adminPage.html';
    } else if (userStatus === 'user') {
        userNameDisplay.textContent = userName;
        userIcon.src = '../Image/user.png';
        accountButton.onclick = () => window.location.href = 'userPage.html';
    } else {
        accountButton.onclick = () => window.location.href = 'admin.html';
    }
});







