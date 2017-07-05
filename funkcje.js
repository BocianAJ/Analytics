//Configuring the page content for turned on JavaScript
function contentPrep() {
	var content = document.getElementsByClassName("js-content");
	var hiddenContent = document.getElementsByClassName("hidden-js");
	for (x=0; x < content.length; x ++) {
		content[x].style.display = "block";
	}
	for (x=0; x < hiddenContent.length; x ++) {
		hiddenContent[x].style.display = "none";
	}
}

function toggleContent(clickedElement) {
	var contentToggled = document.querySelectorAll("section.hidden-js");
	if (clickedElement.classList.contains("wiecej")) {
		for (x=0; x < contentToggled.length; x ++) {
			contentToggled[x].style.display = "inherit";
		}
		clickedElement.childNodes[0].innerHTML = "mniej";
		clickedElement.classList.remove("wiecej");
		clickedElement.classList.add("mniej");
	}
	else {
		for (x=0; x < contentToggled.length; x ++) {
			contentToggled[x].style.display = "none";
		}
		clickedElement.childNodes[0].innerHTML = "więcej";
		clickedElement.classList.remove("mniej");
		clickedElement.classList.add("wiecej");
	}
}