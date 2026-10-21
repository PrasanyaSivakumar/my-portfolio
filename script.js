
const themeBtn = document.getElementById("themeBtn");
const topBtn = document.getElementById("topBtn");
const year = document.getElementById("year");

// Display the current year
year.textContent = new Date().getFullYear();

// Switch between light and dark themes
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "🌙";
    } else {
        themeBtn.textContent = "☀️";
    }
});

// Show the back-to-top button while scrolling
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

// Go back to the top of the page
topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
