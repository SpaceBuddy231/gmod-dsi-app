function positionRadialItems(menuItems, show) {
  const radius = 245;
  const totalItems = menuItems.length;

  menuItems.forEach((item, index) => {
    const angle = (index / totalItems) * 2 * Math.PI;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    if (show) {
      item.style.transform = `translate(${x}px, ${y}px)`;
    } else {
      item.style.transform = "translate(0, 0)";
    }
  });
}

function menutoggle(event) {
  console.log("Button clicked!", event.target);
  event.stopPropagation();

  const menuItems = document.querySelectorAll(".radial-menu-item");
  console.log("Menu items found:", menuItems.length);

  const isHidden = menuItems[0].classList.contains("hidden");
  const itemsContainer = document.querySelector(".radial-menu-items-container");

  menuItems.forEach((item, index) => {
    if (isHidden) {
      item.classList.remove("hidden");
      console.log(`Menu item ${index + 1} shown`);
    } else {
      item.classList.add("hidden");
      console.log(`Menu item ${index + 1} hidden`);
    }
  });

  if (isHidden) {
    itemsContainer.style.pointerEvents = "auto";
  } else {
    itemsContainer.style.pointerEvents = "none";
  }

  positionRadialItems(menuItems, isHidden);
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded");

  // Generate menu items dynamically
  generateRadialMenuItems();

  const toggleButton = document.querySelector(".radial-menu-toggle");
  const centerElement = document.querySelector(".radial-menu-center");
  const buttonImage = toggleButton.querySelector("img");

  console.log("Toggle button found:", toggleButton !== null);

  if (toggleButton) {
    toggleButton.addEventListener("click", function (event) {
      console.log("Button clicked via addEventListener");
      menutoggle(event);
    });

    buttonImage.addEventListener("click", function (event) {
      console.log("Button image clicked");
      menutoggle(event);
    });

    centerElement.addEventListener("click", function (event) {
      console.log("Center element clicked");
      menutoggle(event);
    });

    console.log(
      "Event handlers added to toggle button, image, and center element"
    );
  } else {
    console.error("Toggle button not found");
  }
});

// Function to generate menu items dynamically
function generateRadialMenuItems() {
  const menuItemsContainer = document.querySelector(".radial-menu-items");
  // Clear any existing items
  menuItemsContainer.innerHTML = "";

  // Number of menu items to generate
  const numItems = 9;

  for (let i = 0; i < numItems; i++) {
    const menuItem = document.createElement("div");
    menuItem.className =
      "radial-menu-item absolute hidden bg-[#4283BF] h-28 w-28 rounded-[80%] outline-1 outline-[#212121] animate__animated animate__fadeIn";
    menuItem.style.pointerEvents = "auto";

    const button = document.createElement("button");
    button.className = "radial-button p-2";

    const img = document.createElement("img");
    img.src = "assets/scprp.png";

    button.appendChild(img);
    menuItem.appendChild(button);
    menuItemsContainer.appendChild(menuItem);
  }
}
