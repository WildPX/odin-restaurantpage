// This function clears the inner HTML of the element with the id "content"
export function clearPage() {
  const content = document.getElementById("content");
  content.innerHTML = "";
}

// Clears buttons from "active" class
export function clearButtons() {
  const btns = [];
  btns.push(document.getElementById("nav-home"));
  btns.push(document.getElementById("nav-menu"));
  btns.push(document.getElementById("nav-about"));

  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
}
