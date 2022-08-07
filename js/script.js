const header = document.getElementById("header");

window.onscroll = function () {
  headerActive();
};

function headerActive() {
  if (document.documentElement.scrollTop > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}
