// selecting html form JS

let h3 = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2"); // I missed full stop here
let body = document.getElementById("gradient");

// modifying dom 

function setGradient() {
	body.style.background =
		"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	h3.textContent = body.style.background + "";
}

// running above function on event

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);