const iconEye = document.querySelectorAll('.form__input-icon');
const inputPassword = document.querySelector('.form__input--password');
let type = 'password';

const inputTypeToggle = function () {
  iconEye.forEach(el => el.classList.toggle('hidden'));

  type === 'password' ? (type = 'text') : (type = 'password');

  inputPassword.type = type;
  inputPassword.focus();
};

iconEye.forEach(icon => icon.addEventListener('click', inputTypeToggle));
