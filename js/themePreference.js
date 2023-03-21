const storageKey = "theme";

function getThemePreference() {
	if (localStorage.getItem(storageKey)) {
		return localStorage.getItem(storageKey);
	}

	return "light";
}

const theme = getThemePreference();

function setTheme() {
	document.documentElement.setAttribute("data-theme", theme);
	localStorage.setItem("theme", theme);
}

setTheme();
