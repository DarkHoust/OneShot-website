
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

    // Проверка на совпадение паролей
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
