const inputUserName = document.getElementById('name');
const nameRegex = /^([А-ЯЄЇІ]{1}[а-яєїі]{1,23}|[A-Z]{1}[a-z]{1,23})$/;
const errInputName = document.getElementById('error-name');
let userName;

inputUserName.addEventListener('input', function (event) {
    nameRegex.test(event.target.value) ?
        (userName = event.target.value,
            errInputName.innerText = "") :
        (errInputName.innerText = "Введіть правильно ім'я. Приклад: Eugene або Євген",
            userName = '');
});

const inputUserMessage = document.getElementById('message');
const messageRegex = /[^]{5,}/;
const errInputMessage = document.getElementById('error-message');
let userMessage;

inputUserMessage.addEventListener('input', function (event) {
    messageRegex.test(event.target.value) ?
        (userMessage = event.target.value,
            errInputMessage.innerText = "") :
        (errInputMessage.innerText = "Введіть текст не меньше 5 символів",
            userMessage = '');
});

const inputUserPhone = document.getElementById('phone');
const phoneRegex = /^((\+?3)?8)?0\d{9}$/;
const errInputPhone = document.getElementById('error-phone');
let userPhone;

inputUserPhone.addEventListener('input', function (event) {
    phoneRegex.test(event.target.value) ?
        (userPhone = event.target.value,
            errInputPhone.innerText = "") :
        (errInputPhone.innerText = "Введіть правильний формат номера телефона. Приклад: +380675676767",
            userPhone = '');
});

const inputUserEmail = document.getElementById('email');
const emailRegex = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
const errInputEmail = document.getElementById('error-email');
let userEmail;

inputUserEmail.addEventListener('input', function (event) {
    emailRegex.test(event.target.value) ?
        (userEmail = event.target.value,
            errInputEmail.innerText = "") :
        (errInputEmail.innerText = "Введіть правильни формат email адреси. Приклад: eygene@gmail.com",
            userEmail = '');
});

const messageForm = document.getElementById('message-form');

messageForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (userName && userMessage && userPhone && userEmail) {
        const userForm = {
            name: userName,
            message: userMessage,
            phone: userPhone,
            email: userEmail
        };
        console.log(userForm);
        messageForm.reset();
    }
});