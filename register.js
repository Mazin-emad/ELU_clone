var loginBtn = document.querySelector(".submit-btn"),
  registerBtn = document.querySelector(".register-btn"),
  nameField = document.querySelector("#id-input"),
  confirmPassField = document.querySelector("#confirm-password"),
  passField = document.querySelector("#password"),
  emailField = document.querySelector("#email");

// login button click
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "login.html";
});

// validation ==>
var name = "",
  pass = "",
  email = "",
  conPass = "";

nameField.addEventListener("blur", function (e) {
  name = e.target.value;
  if (!isValid(name)) {
    this.classList.add("error");
  } else {
    this.classList.remove("error");
  }
});

var emailValidation = (s) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!s.match(emailRegex) || !isValid(s)) {
    return false;
  } else {
    return true;
  }
};

emailField.addEventListener("blur", function (e) {
  email = e.target.value;
  if (!emailValidation(email)) {
    this.classList.add("error");
  } else {
    this.classList.remove("error");
  }
});

passField.addEventListener("blur", function (e) {
  pass = e.target.value;
  if (!isValid(pass)) {
    this.classList.add("error");
  } else {
    this.classList.remove("error");
  }
});

confirmPassField.addEventListener("blur", function (e) {
  conPass = e.target.value;
  if (!isValid(conPass) || conPass !== pass) {
    this.classList.add("error");
  } else {
    this.classList.remove("error");
  }
});

var isValid = (s) => {
  if (s.length < 5) {
    return false;
  }
  return true;
};

// register button click
registerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    !isValid(name) ||
    !emailValidation(email) ||
    !isValid(pass) ||
    !isValid(conPass)
  ) {
    return;
  }
  window.location.href = "userLogedIn.html";
});
