// Variable & elements
var footer = document.getElementById("footer"),
  button = document.getElementById("my-btn"),
  loginBtn = document.querySelector(".submit-btn"),
  registerBtn = document.querySelector(".register-btn"),
  nameField = document.querySelector("#id-input"),
  passField = document.querySelector("#pass-input"),
  guestBtn = document.querySelector(".guest-btn");

var displayElement = (el) => {
  el.style.display = "none";
};

var hideElement = (el) => {
  el.style.display = "block";
};

if (window.innerWidth > 670) {
  displayElement(footer);
}

// window resize event
window.addEventListener("resize", () => {
  if (window.innerWidth > 670) {
    displayElement(footer);
  } else {
    hideElement(footer);
  }
});

// button click event
button.addEventListener("click", () => {
  if (footer.style.display == "none") {
    hideElement(footer);
  } else if (footer.style.display == "block") {
    displayElement(footer);
  }
});

// document click event
document.addEventListener("click", (e) => {
  const TARGET = e.target;
  if (
    TARGET !== button &&
    !footer.contains(e.target) &&
    window.innerWidth > 670
  ) {
    displayElement(footer);
  }
});

// register button click
registerBtn.addEventListener("click", () => {
  window.location.href = "register.html";
});

// register button click
guestBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

// validation ==>
var name = "";
var pass = "";

nameField.addEventListener("blur", function (e) {
  name = e.target.value;
  if (!isValid(name)) {
    this.classList.add("error");
  } else {
    this.classList.remove("error");
  }
});

passField.addEventListener("blur", function (e) {
  pass = e.target.value;
  if (!isValid(pass)) {
    this.classList.add("error");
  }
});

var isValid = (s) => {
  if (s.length < 5) {
    return false;
  }
  return true;
};

// login button click
loginBtn.addEventListener("click", (e) => {
  if (!name || !pass || !isValid(name) || !isValid(pass)) {
    return;
  }
  e.preventDefault();
  window.location.href = "userLogedIn.html";
});
