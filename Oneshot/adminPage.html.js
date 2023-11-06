// Функция для отображения пользователей и кнопок управления
function displayUsers() {
    const usersListElement = document.getElementById('usersList');
    usersListElement.innerHTML = '';

    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.forEach((user, index) => {
        // Создаем элемент списка для пользователя
        const userItem = document.createElement('li');
        userItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        userItem.textContent = user.email;

        // Создаем кнопку Delete
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteBtn.onclick = function() { deleteUser(index); };
        userItem.appendChild(deleteBtn);

        // Создаем кнопку Change
        const changeBtn = document.createElement('button');
        changeBtn.textContent = 'Change';
        changeBtn.classList.add('btn', 'btn-primary', 'btn-sm', 'mx-2');
        changeBtn.onclick = function() { showChangePasswordForm(user.email, index); };
        userItem.appendChild(changeBtn);

        // Добавляем элемент списка на страницу
        usersListElement.appendChild(userItem);
    });
}


// Функция для удаления пользователя
function deleteUser(index) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
    displayUsers();
}

// Функция для отображения формы изменения пароля
function showChangePasswordForm(email, index) {
    // Показываем форму и заполняем информацию о пользователе
    document.getElementById('passwordChangeCard').style.display = 'block';
    document.getElementById('userEmail').textContent = `Change password for ${email}`;
    document.getElementById('userIndex').value = index;
}

// Обработка формы изменения пароля
document.getElementById('passwordChangeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    const index = document.getElementById('userIndex').value;
    const newPassword = document.getElementById('newPasswordInput').value;
    changeUserPassword(index, newPassword);
});

// Функция изменения пароля пользователя
function changeUserPassword(index, newPassword) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    // Здесь должна быть проверка на безопасность пароля, но для примера пропускаем
    users[index].password = newPassword; // Изменяем пароль
    localStorage.setItem('users', JSON.stringify(users)); // Обновляем localStorage
    displayUsers(); // Обновляем список пользователей
    alert('Password changed successfully.'); // Уведомляем об успешном изменении
    document.getElementById('passwordChangeCard').style.display = 'none'; // Скрываем форму
}

// При загрузке страницы отображаем пользователей
document.addEventListener('DOMContentLoaded', displayUsers);
