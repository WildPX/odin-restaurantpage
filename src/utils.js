// This function clears the inner HTML of the element with the id "content"
export function clearPage() {
  const content = document.getElementById("content");
  content.innerHTML = "";
}

// Clears buttons from "active" class
export function clearButtons() {
  const buttons = ["nav-home", "nav-menu", "nav-about"];
  buttons.forEach((id) => {
    const button = document.getElementById(id);
    if (button) {
      button.classList.remove("nav-active");
    }
  });
}
