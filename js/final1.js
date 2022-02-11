function cambiarFondo(tit){
	var fondo = document.getElementsByClassName("div1-materiales");
	url = "url(imagenes/marmol/" + tit + ".jpg)";
	fondo[0].style.backgroundImage =  url;
}