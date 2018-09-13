var css= document.querySelector("h3");
var  color1= document.querySelector(".color1");
var  color2= document.querySelector(".color2");
var body= document.getElementById("gradient");
var rand=document.getElementById("random");

body.onload=setGradient();

function setGradient(){
    body.style.background=
	     "linear-gradient(to right, "
	     + color1.value
	     +", "
	     + color2.value
	     + ")";
	css.textContent= body.style.background+ ";";
}

function randomColor(){
	var r1=getRandomInt(0,255);
	var g1=getRandomInt(0,255);
	var b1=getRandomInt(0,255);
    var c1="rgb("+ r1 +"," + g1  + ","  + b1  + ")";
    console.log(c1);

    var r2=getRandomInt(0,255);
	var g2=getRandomInt(0,255);
	var b2=getRandomInt(0,255);
	var c2="rgb("+ r2 +","  +g2  + ","  + b2   + ")";
	console.log(c2);

	
	body.style.background=
	     "linear-gradient(to right, "
	     + c1
	     +", "
	     + c2
	     + ")";

	css.textContent= body.style.background+ ";";

}

function getRandomInt(min,max){
	return Math.floor(Math.random()*(max-min+1));
}

rand.addEventListener("click", randomColor);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);