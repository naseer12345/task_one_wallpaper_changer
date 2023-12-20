let screenLog = document.querySelector("#screen-log");
const screenwidth = window.screen.width

const tst = document.querySelector(".tst")


// document.querySelector(".tst").addEventListener("mousemove", function(e){
//     screenLog.innerText = `
//     Client X/Y: ${e.clientX}, ${e.clientY}`;
// })

const subtst = document.getElementById("subtst")

 subtst.addEventListener("mousedown",function(){
    
    document.querySelector(".tst").addEventListener("mousemove", function(e){
        const position = e.clientX
        
        subtst.style.transform = (`translateX(${position}px)`)
    })
 })

 subtst.addEventListener("mouseup", function(){
    subtst.style.transform = (`translateX(${position}px)`)

 })

