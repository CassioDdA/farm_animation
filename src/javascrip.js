document.getElementById("dayButton").addEventListener("click", function () {
	toggleDayNight("day");
});

document.getElementById("nightButton").addEventListener("click", function () {
	toggleDayNight("night");
});

function toggleDayNight(state) {
	document.querySelectorAll("button").forEach(button => {
		button.classList.remove("active");
	});
	document.querySelector(".container").setAttribute("data-state", state);

	if (state === "day") {
		document.querySelector(".container").style.backgroundColor = "#0080ff";
		document.querySelector(".sun").style.display = "block";
		document.querySelector(".moon").style.display = "none";
		document.getElementById("star-1").style.display = "none";
		document.getElementById("star-2").style.display = "none";
		document.getElementById("star-3").style.display = "none";
		document.getElementById("dayButton").classList.add("active");
	} else {
		document.querySelector(".container").style.backgroundColor = "#113755";
		document.querySelector(".sun").style.display = "none";
		document.querySelector(".moon").style.display = "block";
		document.getElementById("star-1").style.display = "block";
		document.getElementById("star-2").style.display = "block";
		document.getElementById("star-3").style.display = "block";
		document.getElementById("nightButton").classList.add("active");
	}
}
