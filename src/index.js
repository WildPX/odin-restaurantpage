import "./styles.css";
import { loadHome } from "./home";
import { loadAbout } from "./about";
import { loadMenu } from "./menu";

function addNavEventListeners() {
  document.getElementById("nav-home").addEventListener("click", loadHome);
  document.getElementById("nav-menu").addEventListener("click", loadMenu);
  document.getElementById("nav-about").addEventListener("click", loadAbout);
}

document.addEventListener("DOMContentLoaded", () => {
  loadHome();
  addNavEventListeners();
});
