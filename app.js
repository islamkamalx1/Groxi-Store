const login = document.querySelector("#login");
const loginContainer = document.querySelector(".login-form-container");
const closeLogin = document.querySelector("#close-btn-login");
const toggleMenu = document.querySelector(".toggle-menu");
const headerIcons = document.querySelector(".header__icons");

login.addEventListener("click", () => {
  loginContainer.classList.toggle("active");
});

closeLogin.addEventListener("click", () => {
  loginContainer.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (e.target === loginContainer) {
    loginContainer.classList.toggle("active");
  }
});

toggleMenu.addEventListener("click", () => {
  headerIcons.classList.toggle("active");
});
