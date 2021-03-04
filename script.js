const form = document.querySelector(".form"),
  username = document.querySelector(".username"),
  email = document.querySelector(".email"),
  password = document.querySelector(".password"),
  password2 = document.querySelector(".password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
});

function checkInput() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Имя пользователя не указано");
  } else {
    setSuccessFor(username);
  }
  if (emailValue === "") {
    setErrorFor(email, "Почта не указана");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Почта указана не верно");
  } else {
    setSuccessFor(email);
  }
  if (passwordValue === "") {
    setErrorFor(password, "Пароль не указан");
  } else {
    setSuccessFor(password);
  }
  if (passwordValue === "") {
    setErrorFor(password2, "Пароль не указан");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Пароли не совпадают");
  } else {
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
}
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
