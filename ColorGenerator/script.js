var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");
var rand1, rand2;

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

//Will generate random numbers and apply them to background
//in the form of hex values
function randomColors(){
	rand1 = (Math.random()*0xFFFFFF<<0).toString(16);
	rand2 = (Math.random()*0xFFFFFF<<0).toString(16);

	//If random generated hex is less than 6 digits than default to red or green
	if(rand1.toString().length < 6){
		rand1 = "FF0000";
	}
	if(rand2.toString().length < 6){
		rand2 = "00FF00";
	}

	body.style.background = 
	"linear-gradient(to right, #" 
	+ rand1
	+ ", #"
	+ rand2
	+ ")";
	
	color1.value = "#" + rand1;
	color2.value = "#" + rand2;

	css.textContent = body.style.background + ";";
}

//Random colors set on load or refresh
randomColors();
css.textContent = body.style.background + ";";


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", randomColors);