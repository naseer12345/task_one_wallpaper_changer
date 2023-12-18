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



let holdTimer;

const mcbgElement = document.querySelector(".mcbg");
const imgElement = document.querySelector('.img'); // Make sure this is the correct selector
// Define btnparentdiv and btn if they're used in your code

mcbgElement.addEventListener("mousedown", function() {
    // Start the timer when the mouse is held down
    holdTimer = setTimeout(function() {
        imgElement.style.width = '80%';
        imgElement.style.height = '80%';
        // Make sure btnparentdiv and btn are defined and used correctly here
        // btnparentdiv.appendChild(btn);
    }, 3000); // 3000 milliseconds = 3 seconds
});

mcbgElement.addEventListener("mouseup", function() {
    // Clear the timer when the mouse is released
    clearTimeout(holdTimer);
});
