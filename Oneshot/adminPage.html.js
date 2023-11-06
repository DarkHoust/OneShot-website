// Функция для отображения пользователей и кнопок удаления и изменения
function displayUsers() {
    const usersListElement = document.getElementById('usersList');
    usersListElement.innerHTML = ''; // Очистка списка перед добавлением обновленных данных

    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.forEach((user, index) => {
        const userItem = document.createElement('li');
        userItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        userItem.textContent = user.email;

        // Контейнер для кнопок
        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('btn-group');

        // Кнопка Delete
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteBtn.onclick = function() { deleteUser(index); };
        buttonsContainer.appendChild(deleteBtn);

        // Кнопка Change
        const changeBtn = document.createElement('button');
        changeBtn.textContent = 'Change';
        changeBtn.classList.add('btn', 'btn-primary', 'btn-sm');
        changeBtn.onclick = function() { changeUserPassword(index); };
        buttonsContainer.appendChild(changeBtn);

        // Добавляем контейнер с кнопками к элементу списка
        userItem.appendChild(buttonsContainer);

        // Добавляем элемент списка на страницу
        usersListElement.appendChild(userItem);
    });
}

// Функция для удаления пользователя
function deleteUser(index) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.splice(index, 1); // Удаление пользователя из массива
    localStorage.setItem('users', JSON.stringify(users)); // Обновление localStorage
    displayUsers(); // Обновление отображаемого списка
}

// Функция для изменения пароля пользователя
function changeUserPassword(index) {
    // Здесь вы можете добавить логику для изменения пароля пользователя
    // Например, показать модальное окно, чтобы администратор мог ввести новый пароль
    console.log('Changing password for user at index:', index);
    // Допустим, мы просто запрашиваем новый пароль через prompt
    const newPassword = prompt('Enter new password:');
    if (newPassword) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users[index].password = newPassword; // Предполагаемая структура объекта пользователя с полем password
        localStorage.setItem('users', JSON.stringify(users)); // Обновление localStorage с новым паролем
        displayUsers(); // Обновление отображаемого списка
    }
}

// При загрузке страницы отображаем пользователей
document.addEventListener('DOMContentLoaded', displayUsers);
