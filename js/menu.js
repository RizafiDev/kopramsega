const menuClick = () => {
  const navMenu = document.getElementById("nav-menu");
  const menuLogo = document.getElementById("menu");

  menuLogo.addEventListener("click", () => {
    navMenu.classList.toggle("expand");
  });

  console.log("clicked");
};

document.addEventListener("DOMContentLoaded", menuClick);
