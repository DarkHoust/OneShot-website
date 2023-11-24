
function displayUsers() {
    const usersListElement = document.getElementById('usersList');
    usersListElement.innerHTML = ''; // Очистка списка перед добавлением обновленных данных

    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.forEach((user, index) => {
        const userItem = document.createElement('li');
        userItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        userItem.textContent = user.email;


        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('btn-group');


        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteBtn.onclick = function() { deleteUser(index); };
        buttonsContainer.appendChild(deleteBtn);


        const changeBtn = document.createElement('button');
        changeBtn.textContent = 'Change';
        changeBtn.classList.add('btn', 'btn-primary', 'btn-sm');
        changeBtn.onclick = function() { changeUserPassword(index); };
        buttonsContainer.appendChild(changeBtn);


        userItem.appendChild(buttonsContainer);


        usersListElement.appendChild(userItem);
    });
}


function deleteUser(index) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
    displayUsers();
}


function changeUserPassword(index) {

    console.log('Changing password for user at index:', index);

    const newPassword = prompt('Enter new password:');
    if (newPassword) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users[index].password = newPassword;
        localStorage.setItem('users', JSON.stringify(users));
        displayUsers();
    }
}


document.addEventListener('DOMContentLoaded', displayUsers);



document.getElementById('logoutButton').addEventListener('click', function() {
    // Очищаем информацию о пользователе
    localStorage.removeItem('userStatus');
    localStorage.removeItem('userName');

    // Перенаправляем на главную страницу
    window.location.href = 'admin.html';
});


