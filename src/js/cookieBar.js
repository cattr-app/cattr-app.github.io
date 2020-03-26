if (!("cookie" in window.localStorage)) {
	const button = document.getElementById("cookie_button");
	button.onclick = hideBar;
} else {
	hideBar();
}

function hideBar() {
	const cookieBar = document.getElementsByClassName("cookie_bar")[0];

	if (cookieBar) {
		cookieBar.style.display = "none";
		window.localStorage.cookie = true;
	}
}
