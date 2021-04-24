function switchTheme() {
  // toggle theme
  const toggleValue =
    localStorage.getItem("theme") === "dark" ? "light" : "dark";
  // update localstorage value;
  localStorage.setItem("theme", toggleValue);
  // set current theme - default to `light` on first load and set `theme` property in localStorage.
  const currentTheme = localStorage.getItem("theme") || "light";
  // update current theme value on `data-theme` attribute
  document.body.dataset.theme = currentTheme;
}

const themeSwitcher = document.querySelector("#theme");
function setTheme() {
  // set current theme - default to `light` on first load and set `theme` property in localStorage.
  const currentTheme = localStorage.getItem("theme") || "light";
  // update current theme value on `data-theme` attribute
  document.body.dataset.theme = currentTheme;
  // update inner text of button dynamically based on current theme
  themeSwitcher.innerText =
    currentTheme === "light" ? "Dark Mode" : "Light Mode";
}
// set theme on inital load
setTheme();
function switchTheme() {
  // toggle theme
  const toggleValue =
    localStorage.getItem("theme") === "dark" ? "light" : "dark";
  // update localstorage value;
  localStorage.setItem("theme", toggleValue);
  // update theme
  setTheme();
}

let editBtn = document.getElementById("#editBtn");

editBtn.addEventListener("click", function (e) {
  e.preventDefault();
});
