var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("rdmBtn");
console.log(randomButton);

console.log(body);
console.log(css);
console.log(color1);
console.log(color2);



function randomDirection () {
	var rand = Math.random();
	console.log(rand);
	var direction = "";
	if(rand < .25){
			direction = "to left";
	} else if (rand >.25 && rand <.50) {
			direction = "to right";
	} else if (rand >.50 && rand <.75) {
		direction = "to top";
	} else {
		direction = "to bottom";
	}
	console.log(direction)
	return direction;
}

function setGradientColor () {
	body.style.background =
	"linear-gradient("
	+ randomDirection() +
	", "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

// conversion found on CSS-Tricks

function RGBToHex(r,g,b) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}

console.log(RGBToHex(255,255,255));

function randomColor () {
	var arr = [];
	for (var i =0; i<3; i++) {
		var rand = Math.random();
		var genRand = Math.floor(rand * 256);
		arr.push(genRand);
	}
	console.log(arr);
	var red = arr[0];
	var green = arr[1];
	var blue = arr[2];
	console.log(RGBToHex(red,green,blue));
	return RGBToHex(red,green,blue);
}

randomColor();
setGradientColor();
color1.addEventListener("input", setGradientColor);
color2.addEventListener("input", setGradientColor);
randomButton.addEventListener("click", function() {
	color1.value = randomColor();
	color2.value = randomColor();
	setGradientColor();
})
