const open = document.getElementById("open");
const popup_container = document.getElementById("popup_container");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  popup_container.classList.add("show");
});

close.addEventListener("click", () => {
  popup_container.classList.remove("show");
});

/* toggle for currency*/

var btn = document.getElementById("btn");

function leftClick() {
  btn.style.left = "0";
}

function rightClick() {
  btn.style.left = "110px";
}
