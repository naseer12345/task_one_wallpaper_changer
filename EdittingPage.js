let screenLog = document.querySelector("#screen-log");
const screenwidth = window.screen.width

const tst = document.querySelector(".tst")

const colors = [
    "#FF5733", // Reddish
    "#33FF57", // Greenish
    "#3357FF", // Blueish
    "#FF33F0", // Pinkish
    "#57FF33", // Lime
    "#FF8333", // Orange
    "#33FFF6", // Cyan
    "#8B33FF", // Purple
    "#FF3333", // Red
    "#33FF8B", // Aquamarine
    "#FFD633", // Yellow
    "#337BFF", // Light Blue
    "#FF338B", // Magenta
    "#75FF33", // Light Green
    "#FF5733", // Vermilion
    "#33C8FF", // Sky Blue
    "#FF33C8", // Hot Pink
    "#9EFF33", // Chartreuse
    "#FF6B33", // Dark Orange
    "#B833FF"  // Lavender
];


const d = new Date();
const dateString = d.toUTCString();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const month = months[d.getUTCMonth() ];
const day = days[d.getDay()]
const both = month + ", " + day
document.getElementById("kk").innerHTML = both;



const kk = document.getElementById("kk");
const kk2 = document.getElementById("kk2");
const fsButtons = document.querySelectorAll(".fs");


fsButtons.forEach((button, index) => {
    // Assign background color from the array
    button.style.backgroundColor = colors[index % colors.length];

    // Add click event listener
    button.addEventListener("click", function() {
        const color = this.style.backgroundColor;
        kk.style.color = color;
        kk2.style.color = color;
    });
});

const fontdiv = document.getElementById("subfonts");


let isMouseDown = false;
let startX, scrollLeft;

fontdiv.addEventListener("mousedown", function(e) {
    isMouseDown = true;
    startX = e.pageX - fontdiv.offsetLeft;
    scrollLeft = fontdiv.scrollLeft;
});

fontdiv.addEventListener("mouseup", function() {
    isMouseDown = false;
    console.log("MouseUp");
});

fontdiv.addEventListener("mousemove", function(e) {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - fontdiv.offsetLeft;
    const walk = (x - startX) * 3;
    fontdiv.scrollLeft = scrollLeft - walk;
});





const subtst = document.getElementById("font-size");
let isMouseDownn = false; // Separate flag for subtst
let position = 0; // Position variable for subtst
subtst.addEventListener("mousedown", function() {
    isMouseDownn = true; // Set isMouseDownn to true when mouse is down
});

document.addEventListener("mousemove", function(e) {
    if (isMouseDownn) {
        position = e.clientX;
        let newfont = position / 100;
        let fontsize = newfont + "em";

        kk2.style.fontSize = fontsize;
        subtst.style.transform = `translateX(${position}px)`;

        if (position >= 270) {
            position = 150;
        }
    }
});

document.addEventListener("mouseup", function() {
    isMouseDownn = false; // Reset isMouseDownn when mouse is up
});