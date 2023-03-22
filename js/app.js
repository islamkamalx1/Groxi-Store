const login = document.querySelector("#login");
const loginContainer = document.querySelector(".login-form-container");
const closeLogin = document.querySelector("#close-btn-login");
const toggleMenu = document.querySelector(".toggle-menu");
const headerIcons = document.querySelector(".header__icons");
const bestSellerBoxes = document.querySelectorAll(".best-seller__box");
const filterList = document.querySelectorAll(".filter-list li");

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

filterList.forEach((li) => {
  li.addEventListener("click", toggleActive);
  li.addEventListener("click", showBoxes);
});

function toggleActive(e) {
  filterList.forEach((li) => {
    li.classList.remove("active");
    e.target.classList.add("active");
  });
}

function showBoxes() {
  bestSellerBoxes.forEach((box) => {
    box.style.display = "none";
  });

  document.querySelectorAll(`.${this.dataset.prod}`).forEach((el) => {
    el.style.display = "flex";
  });
}
