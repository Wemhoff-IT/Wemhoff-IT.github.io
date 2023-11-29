function uhr(){

	let jetzt = new Date();

	let std = jetzt.getHours();
	let min = jetzt.getMinutes();
	let sek = jetzt.getSeconds();

	if(std < 10) std = "0" + std;
	if(min < 10) min = "0" + std;
	if(sek < 10) sek = "0" + std;

	document.querySelector('#uhranzeige').innerHTML = std + ':' + min + ':' + sek ; 
}

// bildergalerie
function tauschen(obj){

	let q = obj.src;
	let t = obj.alt;
	document.querySelector("#gross img").src = q;	
	document.querySelectorAll("h4")[0].innerHTML = t;	
}


// zahlen addieren
function summe(){
	
	let a = document.f.z1.value;
	let b = document.f.z2.value;
	a = parseInt(a);
	b = parseInt(b);
	let c = a + b;

	document.querySelector("#rechenausgabe").innerHTML = c;	

}

// zufällige Seitenfarbe

let farbe = ["white", "lightblue", "lightgreen", "yellow", "burlywood", "peachpuff", "lightcoral", "orange"]

function farbwechsel(){

	// css zuweisung überschreibt die funktion
	let rnd = Math.floor(Math.random()*farbe.length) 
	document.body.style.backgroundColor = farbe[rnd];

}

// Absatz erzeugen und in div legen
function erzeugen(){
	let tx = document.f2.tx.value;
	let absatz = document.createElement("p");

	absatz.innerHTML = tx;

	document.querySelector('#elementausgabe').appendChild(absatz);
}


// Mausverfolger

function mausfolgen(e){

	let lf = e.pageX;
	let tp = e.pageY;

	document.querySelector("#verfolger").style.top	= tp + "px";
	document.querySelector("#verfolger").style.left	= lf + "px";
}

// Animation

let x = 0;
let y = 0;

let r = 2;
let motor;

function bewegung(){

	x += r;
	y += r;
	if(x>600)
	{
		r = -2;
	}
	if(x<0)
	{
		r = 2;
	}
	
	document.querySelector('#kreis').style.left = x + "px";
	document.querySelector('#kreis').style.top = y + "px";
}


function starten(){

	stoppen();
	motor = setInterval(bewegung, 20);			
}

function stoppen(){
	
	clearInterval(motor);	
}
