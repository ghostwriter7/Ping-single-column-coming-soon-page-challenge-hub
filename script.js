const form = document.getElementById("form");
const email = document.getElementById("email");
const overlay = document.querySelector(".overlay");
const closeButton = document.getElementById("close");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkEmail();
});

function checkEmail() {
  const emailValue = email.value.trim();
  if (emailValue === "example@email.com") return;
  if (emailValue === "") {
    setErrorFor(email);
  } else if (!isEmail(emailValue)) {
    setErrorFor(email);
  } else {
    setSuccessFor(email);
  }
}

function setErrorFor(input) {
  email.value = "example@email.com";
  const formControl = input.closest(".form-controls");
  formControl.className = "form-controls error";
  overlay.classList.remove("active");
}

function setSuccessFor(input) {
  const formControl = input.closest(".form-controls");
  formControl.className = "form-controls success";
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

closeButton.addEventListener("click", () => {
  overlay.classList.remove("active");
  document.body.style.overflow = "visible";
});
