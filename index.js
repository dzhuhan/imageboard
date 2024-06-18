const page_button_first = document.getElementById("page-button-first");
const page_button_prev = document.getElementById("page-button-prev");
const page_button_next = document.getElementById("page-button-next");
const page_button_last = document.getElementById("page-button-last");

let page_count = 0;

page_button_first.onclick = function() {
	page_count = 1;
	for(var i = 0; i < 5; i++) {
		var page_button = document.getElementById("page-button-" + i);
		page_button.textContent = page_count + i;
	}
}

page_button_prev.onclick = function() {
	page_count--;
	for(var i = 0; i < 5; i++) {
		var page_button = document.getElementById("page-button-" + i);
		page_button.textContent = page_count + i;
	}
}

page_button_next.onclick = function() {
	page_count++;
	for(var i = 0; i < 5; i++) {
		var page_button = document.getElementById("page-button-" + i);
		page_button.textContent = page_count + i;
	}
}

page_button_last.onclick = function() {
	page_count = 333;
	for(var i = 0; i < 5; i++) {
		var page_button = document.getElementById("page-button-" + i);
		page_button.textContent = page_count + i;
	}
}