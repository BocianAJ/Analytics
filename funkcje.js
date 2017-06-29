//Configuring the page content for turned on JavaScript
function contentPrep() {
	var content = document.getElementsByClassName("js-content");
	for (x=0; x < content.length; x ++) {
		content[x].style.display = "block";
	}
	document.querySelector("nav::before").style.display = "none";
}