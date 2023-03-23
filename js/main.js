import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/brands.css";
import "../scss/styles.scss";

window.addEventListener("DOMContentLoaded", () => {
	const checkbox = document.querySelector("#checkbox");

	if (document.documentElement.getAttribute("data-theme") === "dark") {
		checkbox.checked = true;
	}

	checkbox.addEventListener("change", (event) => {
		if (event.target.checked) {
			document.documentElement.setAttribute("data-theme", "dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.setAttribute("data-theme", "light");
			localStorage.setItem("theme", "light");
		}
	});
});
