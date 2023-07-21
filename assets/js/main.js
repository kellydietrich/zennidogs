// NAVBAR ANIMATION START 
const navbar = document.getElementById("main-navbar")

window.addEventListener('scroll', function () {
if (window.pageYOffset > 0) {
  navbar.classList.add("navbar-after-scroll")
} else {
  navbar.classList.remove("navbar-after-scroll")
}
})
// NAVBAR ANIMATION END

// BACK TO TOP BUTTON START
// Grab Back to Top button from html
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the Back to Top button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// BACK TO TOP BUTTON END
