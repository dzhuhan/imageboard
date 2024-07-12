const login_link = document.getElementById("login-link");
const register_link = document.getElementById("register-link");
const login_content = document.getElementById("login-content");
const register_content = document.getElementById("register-content");

login_link.onclick = function() {
	register_content.style.display = "none";
	login_content.style.display = "flex";
}

register_link.onclick = function() {
	register_content.style.display = "flex";
	login_content.style.display = "none";
}