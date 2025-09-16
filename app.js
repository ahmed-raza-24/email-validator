let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function (dets) {
  dets.preventDefault();
  console.log("Form submitted"); // yeh console me dikhega

  console.log("Email entered:", email.value);
  console.log("Password entered:", password.value);

  document.querySelector("#emailError").textContent = "";
  document.querySelector("#passwordError").textContent = "";

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  let emailans = emailRegex.test(email.value);
  let passwordans = passwordRegex.test(password.value);

  let inValid = true;

  if (!emailans) {
    document.querySelector("#emailError").textContent = "Email is correct";
    document.querySelector("#emailError").style.display = "initial";
    inValid = false;
  }

  if (!passwordans) {
    document.querySelector("#passwordError").textContent = "password is correct";
    document.querySelector("#passwordError").style.display = "initial";
    inValid = false;
  }

  if (inValid) {
    document.querySelector("#resultMessage").taxtContent = "everything is corect"
  }
});
