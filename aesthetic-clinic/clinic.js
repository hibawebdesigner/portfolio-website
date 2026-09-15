const fadeElements =
document.querySelectorAll(".fade-up");

const observer = new
IntersectionObserver((entries) => {
entries.forEach((entry) => {
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});   
}, {
threshold: 0.2,
});
fadeElements.forEach((element) =>{
observer.observe(element);
});
const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
menuBtn.addEventListener("click",()=>{
nav.classList.toggle("active");
})
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
link.addEventListener("click", () => {
nav.classList.remove("active");
});
});