
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
        window.location.href = 'adminPage.html';
    } else if (isUserAuthenticated) {
        window.location.href = 'main.html';
        setTimeout(() => alert(`Вы успешно вошли как пользователь ${email}`), 1000);
    } else {
        alert('Incorrect email or password. Please try again.');
    }
});

document.getElementById('adminRegisterForm').addEventListener('submit', function(event){
    event.preventDefault();

    const registerEmail = document.getElementById('registerEmailInput').value;
    const registerPassword = document.getElementById('registerPasswordInput').value;
    const confirmPassword = document.getElementById('confirmPasswordInput').value;

    // Валидация пароля
    if (!validatePassword(registerPassword)) {
        alert('Password must contain at least one digit, one special character and be at least 8 characters long.');
        return;
    }

    // Проверка на совпадение паролей
    if (registerPassword !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Проверка, существует ли уже пользователь с таким email
    const isUserExist = users.some(user => user.email === registerEmail);

    if (isUserExist) {
        alert('A user with this email already exists.');
        return;
    }

    // Добавление нового пользователя
    users.push({
        email: registerEmail,
        password: registerPassword
    });

    // Сохранение пользователей в localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Сброс формы
    document.getElementById('adminRegisterForm').reset();

    alert('Registration successful!');
});

// Функция для валидации пароля
function validatePassword(password) {
    // Регулярное выражение для проверки пароля
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
}

