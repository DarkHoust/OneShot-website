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


function loadUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';

    const users = JSON.parse(localStorage.getItem('users')) || [];

    users.forEach((user, index) => {
        const tr = document.createElement('tr');
        const tdUsername = document.createElement('td');
        const tdActions = document.createElement('td');
        const btnDelete = document.createElement('button');
        const btnChangePassword = document.createElement('button');

        tdUsername.textContent = user.username;

        btnDelete.textContent = 'Delete';
        btnDelete.className = 'btn btn-danger';
        btnDelete.onclick = function() {
            deleteUser(index);
        };

        btnChangePassword.textContent = 'Change Password';
        btnChangePassword.className = 'btn btn-warning';
        btnChangePassword.onclick = function() {
            changePassword(index);
        };

        tdActions.appendChild(btnDelete);
        tdActions.appendChild(btnChangePassword);
        tr.appendChild(tdUsername);
        tr.appendChild(tdActions);
        userList.appendChild(tr);
    });
}

function deleteUser(index) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
    loadUsers();
}

function changePassword(index) {
    const newPassword = prompt('Enter new password:');
    if (newPassword) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users[index].password = newPassword;
        localStorage.setItem('users', JSON.stringify(users));
        alert('Password changed successfully!');
    }
}
