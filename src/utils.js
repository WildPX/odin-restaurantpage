// This function clears the inner HTML of the element with the id "content"
export const clearPage = () => {
  const content = document.getElementById("content");
  content.innerHTML = "";
};

// Clears buttons from "active" class
export const clearButtons = () => {
  const btns = [];
  btns.push(document.getElementById("nav-home"));
  btns.push(document.getElementById("nav-menu"));
  btns.push(document.getElementById("nav-about"));

  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
};
