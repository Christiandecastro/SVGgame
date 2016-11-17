var megamanX = 375;
var megamanY  = 0;

document.addEventListener("keydown", function(e) {
if(e.keyCode == 37){

document.getElementById("megamans").setAttribute("x", megamanX - 15)
  megamanX = megamanX - 15;
}
else if(e.keyCode == 39){

document.getElementById("megamans").setAttribute("x", megamanX + 15)
  megamanX = megamanX + 15;
}

  else if(e.keyCode == 38) {
    document.getElementById("megamans").setAttribute("y", megamanY - 15)
    megamanY = megamanY - 15;
  }

  else if(e.keyCode == 40) {
    document.getElementById("megamans").setAttribute("y", megamanY + 15)
    megamanY = megamanY + 15;
  }
})
