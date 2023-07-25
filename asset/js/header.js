function closeAllSubmenus() {
  const submenus = document.querySelectorAll(".submenu");
  submenus.forEach((submenu) => {
    submenu.style.display = "none";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll("li");

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      const submenu = item.querySelector(".submenu");
      if (submenu.style.display !== "block") {
        closeAllSubmenus();
        submenu.style.display = "block";
      } else {
        submenu.style.display = "none";
      }
    });
  });
});
