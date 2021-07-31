//  <!-- This is mobile menu to show for the script to use -->

 const btn = document.querySelector(".mobile-menu-button");
 const menu = document.querySelector(".mobile-menu");
 const close = document.querySelector(".close");
 const home = document.querySelector(".topnav");
 btn.addEventListener("click", () => {
   menu.classList.toggle("hidden");
   home.classList.toggle("mt-60");
 });

 close.addEventListener("click", () => {
   menu.classList.toggle("hidden");
   home.classList.toggle("mt-60");
 });