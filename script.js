const search = document.querySelector(".search");

const btn = document.querySelector(".btn");
const butn = document.getElementById("btnsearch");

const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
