const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-bar");

hamburger.addEventListener ("click", () =>{
    navMenu.classList.toggle("show")
});
function togglesection(id) {
  document.querySelectorAll(".page-section").forEach(section => {
    section.classList.remove("active")
  })
    const selected = document.getElementById(id)
    if (selected) {
    selected.classList.add("active");  
    }
    navMenu.classList.remove("show")
}

document.querySelectorAll(".nav-bar a").forEach (link => {
link.addEventListener("click" , (e) => {
  e.preventDefault();
  const id = link.getAttribute("href").substring(1)
  togglesection(id)
})
})