// js/main.js

function toggleMobileNavMenu(){
    const slide = document.getElementById("mobile-menu-wrapper");
  
    if (slide.classList.contains("mobile-menu-items-wrapper__open")){
      slide.classList.remove("mobile-menu-items-wrapper__open");
      
    }else{
      slide.classList.add("mobile-menu-items-wrapper__open");
    }
  };



// const addMargin = () => {
//   menuItemWrapper.style.height = '60vh';

//   if(menuItemWrapper.style.height === '25vh'){
//       menuItemWrapper.style.height = '60vh';
//   } else {
//       menuItemWrapper}
//   };

// dropMenus.forEach(dropMenu => {
// dropMenu.addEventListener('click', addMargin)
// });

document.readyState(function(){
  const dropdownMenu = document.querySelector('.dropdown__menu');
  const menuItemWrapper = document.querySelector('.menu-item-wrapper');
  
  dropdownMenu.addEventListener('mouseenter', function() {
    menuItemWrapper.style.marginBottom = '25rem';
  });
  
  dropdownMenu.addEventListener('mouseleave', function() {
    menuItemWrapper.style.marginBottom = '0';
  });
  
})


 
