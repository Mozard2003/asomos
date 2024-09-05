let theme = localStorage.getItem('theme'); 
const darkModeToggle = document.querySelector('#themeChanger');

const DarkMode = () => {
  // 1. Add the class to the html
  document.querySelector("html").classList.add('dark-theme');
  document.querySelector("html").classList.remove('light-theme');
  // 2. Update darkMode in localStorage
  localStorage.setItem('theme', 'dark-theme');
}

const LightMode = () => {
  if (darkModeToggle) darkModeToggle?.toggleAttribute("checked")
  document.querySelector("html").classList.remove('dark-theme');
  document.querySelector("html").classList.add('light-theme');
  localStorage.setItem('theme', 'light-theme');
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (theme === 'dark-theme') {
  DarkMode();
} 
if (theme === "light-theme") {
  LightMode()
}

if (darkModeToggle) darkModeToggle.addEventListener('click', () => {
  const hasTransition = document.querySelector("html").classList.contains("theme-transition")
  if (!hasTransition) document.querySelector("html").classList.add("theme-transition")
  theme = localStorage.getItem('theme'); 
  
  if (theme !== 'light-theme') {
    LightMode(); 
  } 
  else {  
    DarkMode();
  }
});


// import command from "./files/command.json";
function URLdelay(URL){
  setTimeout( function() { window.location = URL }, 3_000 );
}

function load(elementIdArr) {
  elementIdArr.forEach(v => {
    document.getElementById(v).classList.add("load")
    document.getElementById(v).removeAttribute("onclick")
  })
}

function addTextTo(elementId, str){
  document.getElementById(elementId).innerHTML = str
  document.getElementById(elementId).classList.add("bottom-hint")
}

if (document.querySelector(".botName")) document.querySelectorAll(".botName").forEach(v => v.innerHTML = "Asomos")
if (document.querySelector(".devName")) document.querySelectorAll(".botName").forEach(v => v.innerHTML = "Mozard")
if (document.querySelector(".acName")) document.querySelectorAll(".botName").forEach(v => v.innerHTML = "AC0xRPFS001")

