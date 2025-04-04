const hamburger=document.querySelector(".hamburger");
const navMenu=document.querySelector(".nav-menu");
const body=document.body
const navButton = document.querySelector(".loginbut")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navButton.classList.toggle("active")
navMenu.classList.toggle("active")
})
       
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", (e) =>{
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))
body.addEventListener("click", (e) =>{
    body.classList.remove("active")
})

//animation starts here 
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active-dot");
  }
  slides[slideIndex-1].classList.add("active");
  dots[slideIndex-1].classList.add("active-dot");
  setTimeout(showSlides, 5000); // Change text every 8 seconds
}

let slideIndex = 0;
showSlides();

document.addEventListener('DOMContentLoaded', (event) => {
 showSlides();
  // const dots = document.getElementsByClassName("dot");
  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function() {
      slideIndex = i;
     showSlides();
   });
 }
});
