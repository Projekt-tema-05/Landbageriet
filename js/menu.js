const burger = document.querySelector(".burger");
const menuWrapper = document.querySelector(".menu_wrapper");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menuWrapper.classList.toggle("active");
});
