function change() {
	let color = {
		red: 255,
		green: 255,
		blue: 255
	}

	color.red = Math.floor(Math.random() * 256); // range is 0-255
	color.green = Math.floor(Math.random() * 256);
	color.blue = Math.floor(Math.random() * 256);
	let thergb = "rgb(" + r + "," + g + "," + b + ")"; 
	//console.log(thergb,document.body.style.background); pour afficher ds la console l resultat
	document.body.style.background=thergb;
}