// VARIABLES BEGIN//  // VARIABLES BEGIN//

const bars = document.getElementById("bars");
const navBar = document.getElementById("mynav");
const navClone = document.getElementById("navClone");
const hOne = document.getElementById("hoverCraft1")
const hTwo = document.getElementById("hoverCraft2")
const hThree = document.getElementById("hoverCraft3")


//VARIABLES END//  //VARIABLES END//


function scrollBuddy() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    navBar.style.display = "none"
    navClone.style.display = "flex";
    navClone.style.backgroundColor = "rgba(255, 255, 255, 0.97)"
    navClone.style.top = "0";
    navClone.style.position = "fixed";
    navClone.style.right = "0";
    navClone.style.left = "0";
    navClone.style.zIndex = "1030";
  } 
  else {
    navClone.style.display = "none";
    navBar.style.display = "flex"
  }
}

function floatTopButton() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    document.getElementById("floatButton").style.display = "block";
  }
  else {
    document.getElementById("floatButton").style.display = "none";
  }
}


function navClick() {
  if (navBar.style.backgroundColor != "rgba(255, 255, 255, 0.96)") {
  navBar.style.backgroundColor = "rgba(255, 255, 255, 0.96)";
} 
  else {
    navBar.style.backgroundColor = "transparent";
  }
}

function hoverEffect1() {
  document.getElementById("firstImage").style.animationName = "scaleEffect"
}
function hoverEffect2() {
  document.getElementById("secondImage").style.animationName = "scaleEffect"
}
function hoverEffect3() {
  document.getElementById("thirdImage").style.animationName = "scaleEffect"
}
function hoverUnEffect1() {
  document.getElementById("firstImage").style.animationName = "none"
}
function hoverUnEffect2() {
  document.getElementById("secondImage").style.animationName = "none"
}
function hoverUnEffect3() {
  document.getElementById("thirdImage").style.animationName = "none"
}

//EVENT LISTENERS BEGIN//  //EVENT LISTENERS BEGIN //
window.addEventListener ("scroll", floatTopButton);
hOne.addEventListener ("mouseover", hoverEffect1)
hTwo.addEventListener ("mouseover", hoverEffect2)
hThree.addEventListener ("mouseover", hoverEffect3)
hOne.addEventListener ("mouseout" , hoverUnEffect1)
hTwo.addEventListener ("mouseout", hoverUnEffect2)
hThree.addEventListener ("mouseout", hoverUnEffect3)
window.addEventListener ("scroll", scrollBuddy);
bars.addEventListener ("click", navClick);
