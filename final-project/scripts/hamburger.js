function toggleMenu() {
	document.getElementById("menu").classList.toggle("responsive");
	
}

function subMenu(number){
	elem = document.getElementsByClassName("sub-menu")[number].style.display;
	console.log('entro ' + elem);
	if (elem ==='block'){
	
		document.getElementsByClassName("sub-menu")[number].style.display = "none";
	}else{
		document.getElementsByClassName("sub-menu")[number].style.display = "block";

	}
}
