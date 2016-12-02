var megamanX = 375;
var megamanY  = 0;
var foodEaten = 0;

var health1 = 250;
var health2 = 650;
var timeStart = Date.now()

// randomNumber returns a random number between min and max
function randomNumber(min,max)
{
 return Math.floor(Math.random()*(max-min+1)+min);
}

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

  var health1Y = Number(document.getElementById("health1").getAttribute("y"))
  var health1X = Number(document.getElementById("health1").getAttribute("x"))
  var health2Y = Number(document.getElementById("health2").getAttribute("y"))
  var health2X = Number(document.getElementById("health2").getAttribute("x"))


  if (megamanX > health1X && megamanY < health1Y + 80 && megamanY > health1Y && megamanY < health1Y + 80) {
    console.log("overlap")
    var randX = randomNumber(50,750)
    document.getElementById("health1").setAttribute("x", randX)
    foodEaten = foodEaten + 1
    document.getElementById("score").textContent = foodEaten
  }
  else if(megamanX > health2X && megamanY < health2Y + 80 && megamanY > health2Y && megamanY < health2Y + 80) {
    console.log("overlap")
    var randX = randomNumber(50,750)
    document.getElementById("health2").setAttribute("x", randX)
    foodEaten = foodEaten + 1
    document.getElementById("score").textContent = foodEaten
  }
  if (foodEaten == 5) {
    document.getElementById("screen").pauseAnimation()
    var timeStop = Date.now()
    var duration = timeStop - timeStart
    document.getElementById("totaltime").textContent = duration
  }




})
