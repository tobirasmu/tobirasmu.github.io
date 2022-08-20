const hamburgerl = document.querySelector("div.hamburgerl");
const hamburgerr = document.querySelector("div.hamburgerr");
const TMR = document.querySelector(".TM_right-menu");
const TML = document.querySelector(".TM_left-menu");

hamburgerr.addEventListener("click", () => {
  hamburgerr.classList.toggle("active")
  TMR.classList.toggle("active")

  hamburgerl.classList.remove("active")
  TML.classList.remove("active")
});

hamburgerl.addEventListener("click", () => {
  hamburgerl.classList.toggle("active")
  TML.classList.toggle("active")

  hamburgerr.classList.remove("active")
  TMR.classList.remove("active")
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburgerr.classList.remove("active")
  TMR.classList.remove("active")

  hamburgerl.classList.remove("active")
  TML.classList.remove("active")
}));
