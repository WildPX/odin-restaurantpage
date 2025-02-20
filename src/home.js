import { clearButtons } from "./utils";

export function loadHome() {
  // Reset content
  const content = document.getElementById("content");
  content.innerHTML = "";

  // Main container
  const homeSection = document.createElement("section");
  homeSection.classList.add("home-page");

  // Title
  const titleDiv = document.createElement("div");
  titleDiv.classList.add("title");
  const title = document.createElement("h1");
  title.textContent = "Sleeping Giant Inn";
  titleDiv.appendChild(title);

  // Descriptions container
  const descriptionsContainer = document.createElement("div");
  descriptionsContainer.classList.add("descriptions-container");
  // | Orgnar Recommends
  const orgnarDiv = document.createElement("div");
  orgnarDiv.classList.add("standard-container");
  const orgnarTitle = document.createElement("h2");
  orgnarTitle.textContent = "Orgnar Recommends!";
  const orgnarQuote = document.createElement("blockquote");
  orgnarQuote.textContent = `If you're looking for a warm meal and a stiff drink, you've come 
  to the right place. Our venison stew will keep you going through 
  the coldest Skyrim nights, and a mug of Honningbrew Mead is sure 
  to lift your spirits. Just don't ask too many questions about the 
  inn's history—you might not like the answers.`;

  orgnarDiv.appendChild(orgnarTitle);
  orgnarDiv.appendChild(orgnarQuote);

  // | Hours
  const hoursDiv = document.createElement("div");
  hoursDiv.classList.add("standard-container");
  const hoursTitle = document.createElement("h2");
  hoursTitle.textContent = "Hours";
  const hoursText = document.createElement("p");
  hoursText.textContent = "Open everyday 24/7";

  hoursDiv.appendChild(hoursTitle);
  hoursDiv.appendChild(hoursText);

  // | Location
  const locationDiv = document.createElement("div");
  locationDiv.classList.add("standard-container");
  const locationTitle = document.createElement("h2");
  locationTitle.textContent = "Location";
  const locationText = document.createElement("p");
  locationText.textContent = "Riverwood, Whiterun Hold";

  locationDiv.appendChild(locationTitle);
  locationDiv.appendChild(locationText);

  // Form structure

  descriptionsContainer.appendChild(orgnarDiv);
  descriptionsContainer.appendChild(hoursDiv);
  descriptionsContainer.appendChild(locationDiv);

  homeSection.appendChild(titleDiv);
  homeSection.appendChild(descriptionsContainer);

  content.appendChild(homeSection);

  // Set active button
  clearButtons();
  const navHome = document.getElementById("nav-home");
  navHome.classList.add("nav-active");
}
