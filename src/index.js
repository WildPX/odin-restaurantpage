import "./styles.css";
import { loadHome } from "./home";

function addNavEventListeners() {
  document.getElementById("nav-home").addEventListener("click", loadHome);
  document.getElementById("nav-menu").addEventListener("click", loadMenu);
  document.getElementById("nav-about").addEventListener("click", loadAbout);
}

document.addEventListener("DOMContentLoaded", () => {
  loadHome();
  addNavEventListeners();
});
