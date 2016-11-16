var megaman = 375;
document.addEventListener("keydown", function(e) {
if(e.keyCode == 37){

document.getElementById("megamans").setAttribute("x", megaman - 15)
  megaman = megaman - 15;
}
else if(e.keyCode == 39){

document.getElementById("megamans").setAttribute("x", megaman + 15)
  megaman = megaman + 15;
}
})
