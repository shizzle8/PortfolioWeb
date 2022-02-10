
// This script is just to create dynamic button scrolling for the nav buttons

var mybutton = document.getElementById("skills");
var mybutton = document.getElementById("top");
var mybutton = document.getElementById("project");

const yOffset = -1;

function topFunction() {
  window.scrollTo(0, 0)
}

function skillFunction() {
  document.getElementById("skillScroll").scrollIntoView();
}

function projectFunction() {
  document.getElementById("projectScroll").scrollIntoView();
}

function vinylFunction() {
  document.getElementById("vinylScroll").scrollIntoView();
}
function eegFunction() {
  document.getElementById("eegScroll").scrollIntoView();
}

function renewableFunction() {
  document.getElementById("renewableScroll").scrollIntoView();
}