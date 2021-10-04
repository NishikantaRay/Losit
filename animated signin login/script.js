const sign_in_btn = document.querySelector("#sign-in-btn"),
      sign_up_btn = document.querySelector("#sign-up-btn"),
      container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
})

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
})