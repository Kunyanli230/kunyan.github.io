// Theme toggle logic
document.addEventListener("DOMContentLoaded", function () {
  const theme = localStorage.getItem("theme");

  if (!theme || theme === "light") {
    setTheme("light");
  } else {
    setTheme(theme);
  }
});

function setTheme(theme) {
  const html = document.querySelector("html");
  localStorage.setItem("theme", theme);

  if (theme === "light") {
    html.classList.remove("dark");
    document.querySelector(".theme-icon.light").style.display = "none";
    document.querySelector(".theme-icon.dark").style.display = "block";
  } else {
    html.classList.add("dark");
    document.querySelector(".theme-icon.dark").style.display = "none";
    document.querySelector(".theme-icon.light").style.display = "block";
  }
}

function toggleTheme() {
  const theme = localStorage.getItem("theme");
  setTheme(theme === "light" ? "dark" : "light");
}
