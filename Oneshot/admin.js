document.addEventListener('DOMContentLoaded', function() {
    loadUsers();
});

function loadUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; // Clear the list

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
    users.splice(index, 1); // Remove the user
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
