
function displayUsers() {
    const usersList = document.getElementById('usersList');
    usersList.innerHTML = '';
    const users = JSON.parse(localStorage.getItem('users')) || [];

    users.forEach(user => {
        const userElement = document.createElement('li');
        userElement.className = 'list-group-item';
        userElement.textContent = `Email: ${user.email}, Password: ${user.password}`;
        usersList.appendChild(userElement);
    });
}


window.onload = displayUsers;
