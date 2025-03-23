/*
Name: Jasmine Radi
Date: January 29, 2025
File Name: script.Js
*/

//Hamburger menu function
function hamburger() {
	var menu=document.getElementById("menu-links");
	if (menu.style.display === "block") {
		menu.style.display = "none";
	} else {
		menu.style.display = "block";
	}
}