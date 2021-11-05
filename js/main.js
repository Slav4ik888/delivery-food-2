
const btnAuth        = document.querySelector(`.button-auth`);
const btnOut         = document.querySelector(`.button-out`);
const modalAuth      = document.querySelector(`.modal-auth`);
const closeAuth      = document.querySelector(`.close-auth`);
const logInForm      = document.getElementById(`logInForm`);
const inputLogin     = document.getElementById(`login`);
const inputPassword  = document.getElementById(`password`);
const userName       = document.querySelector(`.user-name`);
const errorLogin     = document.querySelector(`.error-login`);
const errorPassword  = document.querySelector(`.error-password`);


const savedUser = localStorage.getItem(`user`) ? JSON.parse(localStorage.getItem(`user`)) : null;


// LISTENERS

btnAuth.addEventListener(`click`, toggleModal);
closeAuth.addEventListener(`click`, toggleModal);
logInForm.addEventListener(`submit`, authSubmit);
btnOut.addEventListener(`click`, logout);

// FUNCTIONS

function toggleModal() {
  modalAuth.classList.toggle(`is-open`);
}

function authSubmit(e) {
  e.preventDefault();
  const user = {
    login: inputLogin.value,
    password: inputPassword.value
  };
  
  const valid = validationForm(user);
  if (!valid) return;

  localStorage.setItem(`user`, JSON.stringify(user));
  login(user);
  toggleModal();
}

function validationForm(user) {
  if (!user.login) {
    errorLogin.textContent = `Поле "Логин" должно быть заполнено`;
  }
  if (!user.password) {
    errorPassword.textContent = `Поле "Пароль" должно быть заполнено`;
  }
  return user.login && user.password
}

function clearError() {
  errorLogin.textContent = ``;
  errorPassword.textContent = ``;
}

function login(user) {
  clearError();
  console.log('user: ', user);
  btnAuth.style.display = `none`;
  btnOut.style.display = `flex`;
  userName.textContent = user.login;
  userName.style.display = `flex`;
}

function logout() {
  btnAuth.style.display = `flex`;
  btnOut.style.display = `none`;
  userName.textContent = ``;
  userName.style.display = `none`;
  localStorage.removeItem(`user`);
}

if (savedUser) {
  login(savedUser);
}


// git add . && git commit -m "1 lesson 2 part" && git push -u origin master