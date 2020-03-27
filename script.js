var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var del = document.getElementsByClassName("del");
var item = document.getElementsByClassName("item");
let aux=0;
let i = aux;



function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}



function ScratchAfterClick (){

	item[aux].classList.toggle("done");
	
}


function checkForButtonsClicks () {
	
for( let i = 0; i < del.length ;i++) {
	const aux = i;
	del[aux].addEventListener("click",ScratchAfterClick)
}
}



checkForButtonsClicks();
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);