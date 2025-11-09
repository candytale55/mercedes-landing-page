console.log("Frontend template ready!");

// Mobile Menu Toggle Functionality
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const menuClose = document.querySelector(".menu-close");
  const mainNavList = document.querySelector(".main-nav-list");

  // Open menu when burger button is clicked
  burgerMenu.addEventListener("click", function (e) {
    e.preventDefault();
    mainNavList.style.display = "grid";
  });

  // Close menu when exit button is clicked
  menuClose.addEventListener("click", function (e) {
    e.preventDefault();
    mainNavList.style.display = "";
  });
});
