const d = new Date();
const dateString = d.toUTCString();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const month = months[d.getUTCMonth() ];
const day = days[d.getDay()]
const both = month + ", " + day
document.getElementById("kk").innerHTML = both;

const btnparentdiv = document.querySelector(".btndiv")
const btn = document.createElement("button")
btn.innerHTML="Customize"

const iframe = document.createElement("iframe")
iframe.src = "edittingPage.html";
iframe.style.width = "100%"
iframe.style.height = "100%"
let holdTimer;

const mcbgElement = document.querySelector(".mcbg");
const imgElement = document.querySelector('.img'); 
const mcbgdiv= document.querySelector(".mcbg")
mcbgElement.addEventListener("mousedown", function() {
    // Start the timer when the mouse is held down
    holdTimer = setTimeout(function() {
        imgElement.style.width = '80%';
        imgElement.style.height = '80%';
        btnparentdiv.appendChild(btn);
        
    }, 500); 
});

mcbgElement.addEventListener("mouseup", function() {
    // Clear the timer when the mouse is released
    clearTimeout(holdTimer);
});




document.querySelector(".btndiv").addEventListener('click', function() {
     mcbgdiv.replaceWith(iframe)
     btnparentdiv.remove()
  });