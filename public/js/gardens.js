//Displays a list of plants by season and type//

//Herb Garden//
function showHerb() {
  var x = document.getElementById("herb");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
//Succulent Garden//
function showSucc() {
  var y = document.getElementById("succulent");
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
}
//Summer Garden//
function showSummer() {
  var z = document.getElementById("summer");
  if (z.style.display === "block") {
    z.style.display = "none";
  } else {
    z.style.display = "block";
  }
}
//Fall Garden//
function showFall() {
  var fallPlant = document.getElementById("fall");
  if (fallPlant.style.display === "block") {
    fallPlant.style.display = "none";
  } else {
    fallPlant.style.display = "block";
  }
}
//Winter Garden//
function showPlants() {
  var winter = document.getElementById("plants");
  if (winter.style.display === "block") {
    winter.style.display = "none";
  } else {
    winter.style.display = "block";
  }
}
//Spring Garden//
function showSpring() {
  var spring = document.getElementById("spring");
  if (spring.style.display === "block") {
    spring.style.display = "none";
  } else {
    spring.style.display = "block";
  }
}