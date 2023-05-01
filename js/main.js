// js/main.js


const menuButton = document.getElementById("hamburger-menu");
const closeButton = document.getElementById("hamburger-menu-close");
const slide = document.getElementById("nav-section");
const bodyElement = document.body;
const mainSection = document.querySelector('main');
const heroImage = document.querySelector('.hero-image-wrapper img')


//checks the viewport width and removes the hamburger menu on larger screens.
//at the same time changes the hero image for the appropriate viewport
function checkViewportSize() {
  if (window.matchMedia("(min-width: 1000px)").matches) {

     heroImage.src = "images/image-hero-desktop.png";
    if (closeButton) {
      closeButton.remove();
    }
  } else {
    // If viewport is less than 1000px, maintain the hamburger-menu-close element
    closeButton.style.display = 'block';
    heroImage.src = "images/image-hero-mobile.png";
  }
}

window.addEventListener("DOMContentLoaded", checkViewportSize);
window.addEventListener("resize", checkViewportSize);


//Handles the navigation menu toggling on mobile devices.
const toggleMobileNavMenu = () => {
 
  if (slide.classList.contains("nav-wrapper-mobile__open")){
    bodyElement.style.backgroundColor = "";
    slide.classList.remove("nav-wrapper-mobile__open");
  }else{
    slide.classList.add("nav-wrapper-mobile__open")
    bodyElement.style.background = "hsla(var(--clr-medium-gray),.7)";
}
};

menuButton.onclick = toggleMobileNavMenu;
closeButton.onclick = toggleMobileNavMenu;

// Adds the functionality of  exiting the mobile navigation menu by clicking outside it 
mobileMenuExiter = () => {
  if (window.matchMedia("(max-width: 800px)").matches){
    if (slide.classList.contains("nav-wrapper-mobile__open")){
      bodyElement.style.backgroundColor = "";
      slide.classList.remove("nav-wrapper-mobile__open");
    }
  }
}

mainSection.onclick = mobileMenuExiter;



  






 
