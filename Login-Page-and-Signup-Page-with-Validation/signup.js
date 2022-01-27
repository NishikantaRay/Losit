let form = document.querySelector(".form");
let allInputs = document.querySelectorAll(".form input");
form.addEventListener("submit", function doForm(e) {
  let user = [];
  let email;
  let password;
  let data = localStorage.getItem("user");
  let userData = JSON.parse(data);
  let duplicate = false;
  allInputs.forEach((element) => {
    if (element.type == "email") {
      email = element.value;
    }
    if (element.type == "password") {
      password = element.value;
    }
  });
  if (userData) {
    userData.forEach((element) => {
      if (element.email == email) {
        duplicate = true;
      }
    });
  }
  if (duplicate) {
    e.preventDefault();
    alert("Email Id Is Already Exist");
  }
  if (email && password && !userData) {
    user.push({ email, password });
    localStorage.setItem("user", JSON.stringify(user));
  } else if (email && password && userData && !duplicate) {
    console.log("Work");
    user.push({ email, password });
    combinedUser = userData.concat(user);
    console.log(combinedUser);
    localStorage.setItem("user", JSON.stringify(combinedUser));
  }
});
