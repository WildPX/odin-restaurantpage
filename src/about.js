const { clearButtons } = require("./utils");

export function loadAbout() {
  // Reset content
  const content = document.getElementById("content");
  content.innerHTML = "";

  // Create section element
  const section = document.createElement("section");
  section.classList.add("about-page");

  // Create title div
  const titleDiv = document.createElement("div");
  titleDiv.classList.add("title");

  const titleH1 = document.createElement("h1");
  titleH1.textContent = "About";

  titleDiv.appendChild(titleH1);

  // Create standard container div
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("standard-container");

  const headingH2 = document.createElement("h2");
  headingH2.textContent = "About Us";

  const paragraph1 = document.createElement("p");
  paragraph1.innerHTML = `
    Nestled in the quiet village of Riverwood, the 
    <strong>Sleeping Giant Inn</strong> 
    has long been a place of rest and refuge for weary travelers,
    merchants, and adventurers alike. Whether you're passing through on 
    your way to Whiterun or seeking shelter from the dangers of the 
    wild, our humble inn offers warm beds, hearty meals, and a mug of 
    <b>Honningbrew Mead</b> to lift your spirits.
  `;

  const paragraph2 = document.createElement("p");
  paragraph2.innerHTML = `
    Run by the ever-reliable <strong>Orgnar</strong>, our establishment
    may seem like an ordinary village inn, but locals will tell you that
    it holds more secrets than meets the eye. Some say the shadows
    whisper at night, and the locked doors in the back lead to more than
    just storage. But here at the Sleeping Giant, we mind our 
    business—after all, every traveler has a story, and some are best 
    left untold.
  `;

  const paragraph3 = document.createElement("p");
  paragraph3.innerHTML = `
    So sit by the fire, enjoy a warm venison stew, and rest your weary
    feet. Just <b>don't ask too many questions…</b> you might not like
    the answers.
  `;

  // Append everything to the container div
  containerDiv.appendChild(headingH2);
  containerDiv.appendChild(paragraph1);
  containerDiv.appendChild(paragraph2);
  containerDiv.appendChild(paragraph3);

  // Append title and container to the section
  section.appendChild(titleDiv);
  section.appendChild(containerDiv);

  // Append the section to the body (or another container)
  content.appendChild(section);

  // Handle buttons
  clearButtons();
  const navAbout = document.getElementById("nav-about");
  navAbout.classList.add("nav-active");
}
