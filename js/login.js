document.addEventListener('DOMContentLoaded', function () {
    const forgotPasswordBtn = document.getElementById('forgotPassword');
    const loginForm = document.getElementById('loginForm');
    const passwordField = document.getElementById('passwordField');
    const formTitle = document.getElementById('formTitle');
    const loginInput = document.getElementById('login');

    forgotPasswordBtn.addEventListener('click', () => {
        // Скрываем поле ввода пароля и кнопку "Войти"
        passwordField.style.display = 'none';
        loginForm.querySelector('input[type="submit"]').style.display = 'none';

        // Скрываем саму кнопку "Не помню пароль"
        forgotPasswordBtn.style.display = 'none';

        // Скрываем абзац про согласие на обработку данных
        document.querySelector('.privacy-policy').style.display = 'none';

        formTitle.textContent = 'Восстановление пароля';

        // Создаем кнопку "Отправить" и добавляем ее под полем ввода логина
        const submitButton = document.createElement('input');
        submitButton.setAttribute('type', 'submit');
        submitButton.setAttribute('value', 'Отправить');
        submitButton.style.marginTop = '10px'; // Добавляем небольшой вертикальный отступ
        loginForm.appendChild(submitButton);

        // Обработчик для кнопки "Отправить"
        submitButton.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Если логин существует, на вашу почту или телефон будет отправлено сообщение для сброса пароля.');
            loginInput.value = '';
        });
    });
});
