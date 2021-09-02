const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const link = document.querySelectorAll(".nav-menu li a");
let date = document.querySelector(".date");
let d = new Date();
date.innerText=""+d.getFullYear();
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
link.forEach((e)=>{
    e.onclick = ()=>{
        if( navMenu.classList.contains("active")){
         navMenu.classList.remove("active");
        }
        if(hamburger.classList.contains("active")){
            hamburger.classList.remove("active")
        }
     }
});

