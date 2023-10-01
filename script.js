//Hamburger

var hamburger = document.getElementsByClassName("hamburger-container")[0];

function toggleMenu(x) {
  x.classList.toggle("change");
  var x = document.getElementById("myMenu");
  if (x.className === "menu-container") {
    x.className = "responsive";
  }
  else {
    x.className = "menu-container";}
}



function loadingScreen() {
      document.getElementById('loadbar').style.width = '2096px';
    }