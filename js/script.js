// Add shadow to header when scrolling
const header = document.getElementById("header");

window.onscroll = function () {
  headerActive();
};

function headerActive() {
  if (document.documentElement.scrollTop > 0) {
    header.classList.add("active");
    activeNavLink();
  } else {
    header.classList.remove("active");
  }
}

// Change active nav-link when scrolling
const sections = document.querySelectorAll("section"),
  homeSection = document.getElementById("home"),
  navLinks = document.querySelectorAll("header .nav-links .nav-link");
function activeNavLink() {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (document.documentElement.scrollTop < 300) {
      current = "home";
    } else if (
      document.documentElement.scrollTop >=
      sectionTop - section.offsetHeight / 2 - 30
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.classList.contains(current)) {
      link.classList.add("active");
    }
  });
}

// Show menu
const openMenu = document.getElementById("menu-btn"),
  closeMenu = document.getElementById("close-btn"),
  navMenu = document.getElementById("nav-menu");

openMenu.addEventListener("click", () => {
  navMenu.classList.add("active");
});

// Hide menu
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("active");
});
