const hamburgerMenu = document.getElementById("hamburger-menu")
const navbar = document.querySelector(".navbar")

hamburgerMenu.addEventListener("click", function(){
    hamburgerMenu.classList.toggle("open")
    navbar.classList.toggle("open")
    document.body.style.overflow =  (hamburgerMenu.classList.contains("open"))? "hidden" : "scroll"
})