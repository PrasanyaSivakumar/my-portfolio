const themeBtn = document.getElementById("themeBtn");
const topBtn = document.getElementById("topBtn");
document.getElementById("year").textContent = new Date().getFullYear();

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

window.addEventListener("scroll", function () {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
