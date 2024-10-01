const form = document.getElementById("signup-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  console.log("work?")

  validateField(firstName, "First Name cannot be empty");
  validateField(lastName, "Last Name cannot be empty");
  validateEmail(email, "Looks like this is not an email");
  validateField(password, "Password cannot be empty");
});

function validateField(input, errorMessage) {
  const errorText = input.nextElementSibling;

  if (input.value.trim() === "") {
    input.classList.add("error");
    errorText.textContent = errorMessage;
    errorText.style.display = "block";
    console.log("please work");
  } else {
    input.classList.remove("error");
    errorText.style.display = "none";
  }
}

function validateEmail(input, errorMessage) {
  const errorText = input.nextElementSibling;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(input.value.trim())) {
    input.classList.add("error");
    errorText.textContent = errorMessage;
    errorText.style.display = "block";
  } else {
    input.classList.remove("error");
    errorText.style.display = "none";
  }
}
