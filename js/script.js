const menu = document.querySelector(".menu");
const navBar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  navBar.classList.toggle("show");
  window.addEventListener("scroll", () => {
    navBar.classList.remove("show", window.scrollY > 100);
    menu.classList.remove("active");
  });
});
// loading page
const loader = document.querySelector(".loader-page");
window.addEventListener("load", () => {
  loader.classList.add("hidden");
  window.addEventListener("transitionend", () => {
    document.body.removeChild("loader-page");
  });
});
// fixed nav bar
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("stiky", window.scrollY > 100);
});
