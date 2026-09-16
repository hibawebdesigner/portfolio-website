const fadeElements =
document.querySelectorAll('.fade-up');
const observer = new
IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add('show');
}
});
});
fadeElements.forEach(element=>{
observer.observe(element);
});
const menuToggle = document.querySelector('.menu-toggle');
const nav=document.querySelector('.navbar nav');
menuToggle.addEventListener('click',()=>{
nav.classList.toggle('active');
});
const navLinks = document.querySelectorAll('.navbar nav a');
navLinks.forEach(link=>{
link.addEventListener('click',()=>{
nav.classList.remove('active');
});
});