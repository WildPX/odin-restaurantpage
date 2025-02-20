import { clearButtons } from "./utils";

import applePieImg from "./assets/Apple_Pie.png";
import honningbrewMeadImg from "./assets/Honningbrew_mead.png";
import goatCheeseImg from "./assets/Sliced_goat_cheese.png";
import salmonSteakImg from "./assets/Salmon_steak.png";
import sweetRollImg from "./assets/SweetRoll.png";
import spicedWineImg from "./assets/Spiced_wine.png";

const menuItems = [
  {
    name: "Apple Pie",
    price: 5,
    description:
      "A warm, flaky-crusted delight filled with tender, spiced apples, slow-baked to perfection. Served fresh from the oven with a hint of cinnamon and a golden, buttery crust, our Apple Pie is the perfect way to end a hearty meal at the Sleeping Giant Inn. Enjoy it on its own or with a mug of Honningbrew Mead for the ultimate comfort.",
    image: applePieImg, // ✅ Correctly importing the image
  },
  {
    name: "Honningbrew Mead",
    price: 15,
    description:
      "A legendary Nord mead, Honningbrew Mead is renowned for its smooth, rich honey flavor with just the right amount of warmth to chase away the chill of Skyrim’s cold nights. Brewed to perfection with the finest honey from the plains of Whiterun, this golden drink is a favorite among travelers, adventurers, and locals alike. Best enjoyed by the fire at the Sleeping Giant Inn with a hearty meal—or a good tale to share.",
    image: honningbrewMeadImg, // ✅ Imported image
  },
  {
    name: "Sliced Goat Cheese",
    price: 8,
    description:
      "Rich and creamy, our Sliced Goat Cheese is crafted from the freshest milk of Skyrim’s mountain goats. A perfect balance of tangy and smooth, it’s served in thick, hearty slices—ideal for pairing with crusty bread, a side of smoked meats, or a mug of Honningbrew Mead. Whether you’re resting after a long journey or plotting your next adventure, this simple yet satisfying dish is a staple at the Sleeping Giant Inn.",
    image: goatCheeseImg,
  },
  {
    name: "Salmon Steak",
    price: 12,
    description:
      "Freshly caught from Skyrim’s icy rivers, our Salmon Steak is expertly seasoned and pan-seared to perfection, offering a crispy golden crust with tender, flaky meat inside. Served hot with a side of roasted leeks and a wedge of lemon, this hearty meal provides the strength and warmth needed for any adventurer braving the wilds. Best enjoyed with a tankard of Honningbrew Mead by the fire at the Sleeping Giant Inn.",
    image: salmonSteakImg,
  },
  {
    name: "Sweet Roll",
    price: 7,
    description:
      "A true Skyrim classic, the Sweet Roll is a soft, buttery pastry topped with a rich, sugary glaze that melts in your mouth. Baked to a perfect golden brown, this treat is beloved by Nords and travelers alike. Whether enjoyed as a morning indulgence or a well-earned dessert after a long journey, it’s best paired with a warm cup of Nord tea or a mug of Honningbrew Mead. Just be sure to keep an eye on it—Sweet Rolls have a habit of mysteriously disappearing...",
    image: sweetRollImg,
  },
  {
    name: "Spiced Wine",
    price: 10,
    description:
      "A warm and fragrant delight, Spiced Wine is a favorite among travelers looking to shake off the chill of Skyrim’s frostbitten nights. Made from the finest Tamrielic grapes and infused with cinnamon, cloves, and a hint of juniper, this rich and aromatic drink is served warm to soothe the soul. Whether you're unwinding by the fire at the Sleeping Giant Inn or sharing stories with fellow adventurers, a cup of Spiced Wine is always a fine choice.",
    image: spicedWineImg,
  },
];

export function loadMenu() {
  // Reset content
  const content = document.getElementById("content");
  content.innerHTML = "";

  // Create menu section
  const menuSection = document.createElement("section");
  menuSection.classList.add("menu-page");

  // Title
  const titleDiv = document.createElement("div");
  titleDiv.classList.add("title");

  const titleH1 = document.createElement("h1");
  titleH1.textContent = "Menu";

  titleDiv.appendChild(titleH1);
  menuSection.appendChild(titleDiv);

  // Cards container
  const cardsContainer = document.createElement("div");
  cardsContainer.classList.add("cards-container");

  // Loop through menu items and create cards
  menuItems.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const itemName = document.createElement("h3");
    itemName.textContent = item.name;

    const itemPrice = document.createElement("span");
    itemPrice.textContent = `🪙${item.price}`;

    const itemDescription = document.createElement("p");
    itemDescription.textContent = item.description;

    const itemImage = document.createElement("img");
    itemImage.src = item.image;
    itemImage.alt = item.name;
    itemImage.width = 128;
    itemImage.height = 128;

    // Append elements to the card
    card.appendChild(itemName);
    card.appendChild(itemPrice);
    card.appendChild(itemDescription);
    card.appendChild(itemImage);

    // Append card to container
    cardsContainer.appendChild(card);
  });

  // Append container to section
  menuSection.appendChild(cardsContainer);

  // Append menu section to #content
  content.appendChild(menuSection);

  // Set active button
  clearButtons();
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.add("nav-active");
}
