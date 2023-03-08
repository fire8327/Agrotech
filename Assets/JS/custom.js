/* navigation /
/jshint esnext: true */
const toggler = document.getElementById("toggler");
const mNav = document.getElementById("mobilenav");
const close = document.getElementById("togglerexpanded");
const menu = document.getElementById("menu");
const menu2 = document.getElementById("menu2");
const overlay = document.getElementById("overlay");
const body = document.getElementsByTagName("body")[0];

toggler.addEventListener("click", () => {
  mNav.classList.toggle("translate-x-full");
  overlay.classList.toggle("hidden");
  body.classList.toggle("overflow-hidden");
  menu.classList.toggle("hidden");
  menu2.classList.toggle("hidden");
});

close.addEventListener("click", () => {
  mNav.classList.toggle("translate-x-full");
  overlay.classList.toggle("hidden");
  body.classList.toggle("overflow-hidden"); 
  menu.classList.toggle("hidden");
  menu2.classList.toggle("hidden");
});


