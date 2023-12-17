const d = new Date();
const dateString = d.toUTCString();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const month = months[d.getUTCMonth() ];
const day = days[d.getDay()]
const both = month + ", " + day
document.getElementById("kk").innerHTML = both;


document.querySelector(".mcbg").addEventListener("mousedown", function(){
    document.querySelector('.img').style.width = '80%';
    document.querySelector('.img').style.height = '80%';

})