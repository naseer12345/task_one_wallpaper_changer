let screenLog = document.querySelector("#screen-log");
const screenwidth = window.screen.width

const tst = document.querySelector(".tst")


// document.querySelector(".tst").addEventListener("mousemove", function(e){
//     screenLog.innerText = `
//     Client X/Y: ${e.clientX}, ${e.clientY}`;
// })

const info = document.getElementById("info")
const subtst = document.getElementById("subtst")
let isMouseDown = false; // Flag to track mouse status
let position = 0; // Position variable
subtst.addEventListener("mousedown", function() {
    isMouseDown = true; // Set flag to true when mouse is down
});

document.addEventListener("mousemove", function(e) {
    if (isMouseDown && position <= 270) { // Only move the element if the mouse is down
        position = e.clientX;
        info.innerHTML = position ;
         let newfont = position / 100;
         let fontsize = newfont + "em";

        info.style.fontSize = fontsize;
        subtst.style.transform = `translateX(${position}px)`;
        if(position >= 270){
         position = 150
       }

    }
});

document.addEventListener("mouseup", function() {
    isMouseDown = false; // Reset flag when mouse is up
    subtst.style.transform = `translateX(${position}px)`;
    
});
