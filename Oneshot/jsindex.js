function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({username, password});
    localStorage.setItem('users', JSON.stringify(users));

    // Очистить поля ввода
    document.getElementById('registerUsername').value = '';
    document.getElementById('registerPassword').value = '';

    alert('User registered successfully!');
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        // Очистить поля ввода
        document.getElementById('loginUsername').value = '';
        document.getElementById('loginPassword').value = '';

        alert('Login successful!');
        document.getElementById('adminPanel').style.display = 'block';
        loadUsers();
    } else {
        alert('Invalid credentials!');
    }
}
