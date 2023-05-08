const login = document.querySelector("#login");
const loginContainer = document.querySelector(".login-form-container");
const closeLogin = document.querySelector("#close-btn-login");
const toggleMenu = document.querySelector(".toggle-menu");
const headerIcons = document.querySelector(".header__icons");
const bestSellerBoxes = document.querySelectorAll(".best-seller__box");
const filterList = document.querySelectorAll(".filter-list li");
const list = document.querySelectorAll(".list");
const list1 = document.querySelector(".list-1");
const list2 = document.querySelector(".list-2");
const container = document.querySelector(".products div");
const checkBoxes = document.querySelectorAll(".checkbox");
const checkIcons = document.querySelectorAll(".checkbox i");

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

list.forEach((li) => {
  li.addEventListener("click", ActiveHandler);
});

function ActiveHandler() {
  list.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

if (list1) {
  list1.addEventListener("click", () => {
    container.classList.remove("rowProducts");
    container.classList.add("content");
  });
}

if (list2) {
  list2.addEventListener("click", () => {
    container.classList.remove("content");
    container.classList.add("rowProducts");
  });
}

checkBoxes.forEach((checkBox) => {
  checkBox.addEventListener("click", () => {
    checkBox.classList.toggle("view");
    checkIcons.forEach((icon) => {
      icon.classList.toggle("view-icon");
    });
  });
});
