let isMenuOpen = false;

let toggleNav = function () {
  let sidebar = document.querySelector(".nav-sidebar");
  let sidebarUl = document.querySelector(".nav-sidebar ul");
  let sidebarLinks = document.querySelectorAll(".nav-sidebar a");

  if (isMenuOpen) {
    sidebarUl.style.visibility = "hidden";
    sidebar.style.width = "75px";

    let arrayLength = sidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      sidebarLinks[i].style.opacity = "0";
    }

    isMenuOpen = false;
  } else {
    sidebarUl.style.visibility = "visible";
    sidebar.style.width = "175px";

    let arrayLength = sidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      sidebarLinks[i].style.opacity = "1";
    }

    isMenuOpen = true;
  }
};

//create color hover links

let createMenuItem = function (buttonId, hoverColor) {
  const button = document.getElementById(buttonId);

  button.addEventListener("mouseover", function handleMouseOver() {
    button.style.color = hoverColor;
  });

  button.addEventListener("mouseout", function handleMouseOut() {
    button.style.color = "white";
  });
};

createMenuItem("green", "rgb(63, 238, 9)");
createMenuItem("red", "red");
createMenuItem("yellow", "rgb(159, 113, 8)");
createMenuItem("blue", "rgb(94, 164, 244)");

//background color change

let changeColor = function (color) {
  document.body.style.backgroundColor = color;
  toggleNav();
};
