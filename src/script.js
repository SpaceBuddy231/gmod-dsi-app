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

ButtonTypes = [
  "scprp",
  "sandbox",
  "ttt",
  "darkrp",
  "swrp",
  "server-rack",
  "server-rack",
  "server-rack",
  "server-rack",
];

function generateRadialMenuItems() {
  const menuItemsContainer = document.querySelector(".radial-menu-items");
  menuItemsContainer.innerHTML = "";
  const numItems = 9;
  for (let i = 0; i < numItems; i++) {
    const menuItem = document.createElement("div");
    menuItem.className =
      "radial-menu-item absolute hidden bg-[#4283BF] h-28 w-28 rounded-[80%] outline-1 outline-[#212121] animate__animated animate__fadeIn";
    menuItem.style.pointerEvents = "auto";
    menuItem.id = `${i}`;
    const button = document.createElement("button");
    button.className =
      "radial-button p-2 flex items-center justify-center w-full h-full";
    button.id = `${i}`;
    button.addEventListener("click", function (event) {
      console.log(`Button ${button.id} clicked!`);
      ShowServerCreationSys(button.id);
      event.stopPropagation();
    });
    const img = document.createElement("img");
    let src;
    console.log("Image source:", src);
    src = "assets/" + ButtonTypes[i];
    img.src = src + ".png";
    img.className = "max-h-[90%] max-w-[90%] m-auto rounded-[80%]";
    button.appendChild(img);
    menuItem.appendChild(button);
    menuItemsContainer.appendChild(menuItem);
  }
}

function ShowServerCreationSys(type) {
  const actions = {
    0: () => {
      location.href = "scprp.html";
    },
    1: () => {
      location.href = "sandbox.html";
    },
    2: () => {
      location.href = "ttt.html";
    },
    3: () => {
      location.href = "darkrp.html";
    },
    4: () => {
      location.href = "swrp.html";
    },
    5: () => {},
    6: () => {},
    7: () => {},
    8: () => {},
  };
  const action = actions[type];
  if (action) {
    action();
  } else {
    console.error("Invalid type:", type);
  }
  console.log("Action executed for type:", type);
}
