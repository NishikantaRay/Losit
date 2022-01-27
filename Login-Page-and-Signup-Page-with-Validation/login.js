let form = document.querySelector(".form");
let allInputs = document.querySelectorAll(".form input");
form.addEventListener("submit", function doForm(e) {
  let email;
  let password;
  let data = localStorage.getItem("user");
  let userData = JSON.parse(data);
  let checkUser;
  allInputs.forEach((element) => {
    if (element.type == "email") {
      email = element.value;
    }
    if (element.type == "password") {
      password = element.value;
    }
  });
  userData.forEach((element) => {
    if (element.email == email && element.password == password) {
      checkUser = true;
    }
  });
  if (checkUser) {
    return;
  } else {
    e.preventDefault();
    alert("Email and Password Doesn't Match");
  }
});
