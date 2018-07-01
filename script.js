var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomColorsbutton = document.getElementById("bothbutton");
var randomLeftColorbutton = document.getElementById("leftbutton");
var randomRightColorbutton = document.getElementById("rightbutton");
linearDisplay ();

color1.addEventListener("input", updatingBackground);

color2.addEventListener("input", updatingBackground);

randomColorsbutton.addEventListener("click", getRandomColors);

randomLeftColorbutton.addEventListener("click", getOneRandomLeftColor);
randomRightColorbutton.addEventListener("click", getOneRandomRightColor);


function getOneRandomLeftColor(){

	color1.value = '#'+Math.floor(Math.random()*16777215).toString(16);
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function getOneRandomRightColor(){

	color2.value = '#'+Math.floor(Math.random()*16777215).toString(16);
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function getRandomColors(){

	color1.value = '#'+Math.floor(Math.random()*16777215).toString(16);
	color2.value = '#'+Math.floor(Math.random()*16777215).toString(16);
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";

}

function updatingBackground(){
	console.log("Color " + color1.value);
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function linearDisplay (){
	// color1.value = "red";
	// color2.value = "yellow";
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

