function on(){
	document.getElementById("lamp").src = "on.jpg";
}

function off(){
	document.getElementById("lamp").src = "off.jpg";
}function blink(){
	var intervalo = 0;
	var contador = 0;
	while(contador < 12){
	intervalo += 250;
	setTimeout("document.getElementById('lamp').src='on.jpg';",intervalo);
	intervalo += 250;
	setTimeout("document.getElementById('lamp').src='off.jpg';",intervalo);
	contador++;
	}
}
