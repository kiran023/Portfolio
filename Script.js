
const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      sidebarClose = document.querySelector(".sidebarClose");

// js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

sidebarClose.addEventListener("click" , () =>{
    nav.classList.remove("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});
function checkScreenSize() {
    const leftSection = document.getElementById("leftSection");
    const rightSection = document.getElementById("rightSection");
    const leftSection2 = document.getElementById("leftSection2");
    const rightSection2 = document.getElementById("rightSection2");
    if (window.innerWidth < 768) {
        leftSection.parentNode.insertBefore(rightSection, leftSection);
        leftSection2.parentNode.insertBefore(rightSection2, leftSection2);
    } else {
        leftSection.parentNode.insertBefore(leftSection, rightSection);
        leftSection2.parentNode.insertBefore(leftSection2, rightSection2);
    }
}


// window.addEventListener("resize", checkScreenSize);
// checkScreenSize();

// scroll for home page
document.getElementById("homePage").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    document.getElementById("navig").scrollIntoView({ behavior: "smooth" });
});

// for about page
document.getElementById("aboutPage").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    document.getElementById("aboutSection").scrollIntoView({ behavior: "smooth" });
});

// for project page
document.getElementById("projectPage").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    document.getElementById("projectSection").scrollIntoView({ behavior: "smooth" });
});

// for contact page
document.getElementById("conbtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
});
