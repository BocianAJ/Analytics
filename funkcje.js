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

function showContent(clickedElementA) {
	var contentA = clickedElementA.nextElementSibling;
	var contentBoxes = querySelectorAll("#abonamenty > div.flex-opakowanie");
	if (contentA.classList.contains("hidden-js")) {
		contentA.style.display = "block";
		clickedElementA.style.display = "none";
		if (contentA.nextElementSibling.classList.contains("do-gory")) {
			contentA.nextElementSibling.style.display = "block";
		}
		for (i in contenBoxes) {
			contentBoxes[i].classList.add("flex-rowna-wysokosc");
		}
	}
}
function hideContent(clickedElementB) {
	var contentB = clickedElementB.previousElementSibling;
	var contentBoxes = querySelectorAll("#abonamenty > div.flex-opakowanie");
	if (contentB.classList.contains("hidden-js")) {
		contentB.style.display = "none";
		clickedElementB.style.display = "none";
		if (contentB.previousElementSibling.classList.contains("do-dolu")) {
			contentB.previousElementSibling.style.display = "block";
		}
		for (i in contenBoxes) {
			contentBoxes[i].classList.remove("flex-rowna-wysokosc");
		}
	}
}