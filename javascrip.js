document.querySelector("button").addEventListener("click", function () {
	const state = document.querySelector("button").getAttribute("data-state");

	document.querySelector("button").setAttribute("data-state", state === "day" ? "night" : "day");

	document.querySelector("button").classList.remove(state);
	document.querySelector("button").classList.add(state === "day" ? "night" : "day");

	if (state === "day") {
	  document.querySelector(".container").style.backgroundColor = "#0080ff";
	  document.querySelector(".sun").style.display = "block";
	  document.querySelector(".moon").style.display = "none";
	  
	 
	  document.getElementById("star-1").style.display = "none";
	  document.getElementById("star-2").style.display = "none";
	  document.getElementById("star-3").style.display = "none";
	} else {
	  document.querySelector(".container").style.backgroundColor = "#113755";
	  document.querySelector(".sun").style.display = "none";
	  document.querySelector(".moon").style.display = "block";
	  
	 
	  document.getElementById("star-1").style.display = "block";
	  document.getElementById("star-2").style.display = "block";
	  document.getElementById("star-3").style.display = "block";
	}
 });
 