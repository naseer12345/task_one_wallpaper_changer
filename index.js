const d = new Date();
const dateString = d.toUTCString();
const day = d.getDate()

document.getElementById("kk").innerHTML = dateString;
