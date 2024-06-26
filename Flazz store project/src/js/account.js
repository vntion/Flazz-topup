const account = {
  email: 'user@gmail.com',
  password: 'user1234',
  isLogin: false,
};

const addAccount = function () {
  if (sessionStorage.getItem('akun') !== null) return;

  sessionStorage.setItem('akun', JSON.stringify(account));
};

window.addEventListener('load', addAccount);

///////////////////////////

const getAcc = JSON.parse(sessionStorage.getItem('akun'));

if (getAcc.isLogin) {
  document.querySelector('.login-button').classList.add('hidden');
  document.querySelector('.profile').classList.remove('hidden');
}
