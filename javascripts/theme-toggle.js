const root = document.documentElement;
const toggleSwitch = document.getElementById("themeSwitch");

function setInitialTheme() {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = savedTheme === "dark" || (!savedTheme && prefersDark);

  root.classList.toggle("dark-theme", isDark);
  toggleSwitch.checked = isDark;
  const slider = document.querySelector(".slider");
  const imageSrc = isDark ? "./assets/moon.png" : "./assets/sun.png";
  slider.style.setProperty("--icon-url", `url(${imageSrc})`);
}


function toggleTheme() {
  const isDark = toggleSwitch.checked;
  root.classList.toggle("dark-theme", isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");

  const imageSrc = isDark ? "./assets/moon.png" : "./assets/sun.png";

  const slider = document.querySelector(".slider");
  slider.style.setProperty("--icon-url", `url(${imageSrc})`);
}

toggleSwitch.addEventListener("change", toggleTheme);
setInitialTheme();
