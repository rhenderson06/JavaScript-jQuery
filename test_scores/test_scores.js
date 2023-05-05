"use strict"

const names = ["Ben", "Joel", "Judy", "Anne"]
const scores = [88, 98, 77, 88]

const $ = selector => document.querySelector(selector)

const addScore = () => {
	// get user entries
	const name = $("#name").value;
	const score  = parseInt( $("#score").value )
	let isValid = true
    
    // check entries for validity
  if (name == "") {
		$("#name").nextElementSibling.textContent = "This field is required."
		isValid = false
	} 
	else {
		$("#name").nextElementSibling.textContent = ""
	}
	
	if (isNaN(score) || score < 0 || score > 100) {
		$("#score").nextElementSibling.textContent = "You must enter a valid score."
		isValid = false
	} 
	else {
		$("#score").nextElementSibling.textContent = ""
	}
	
	if (isValid) {
		names[names.length] = name
		scores[scores.length] = score
	  $("#name").value = ""
		$("#score").value = ""
		$("#scores_display").value = ""
	}
    $("#name").focus()
}

const displayScores = () => {
	let scoresDisplay = ""
	let totalPoints = 0
	let average = 0

	for (let i = 0; i < scores.length; ++i) {
		scoresDisplay += names[i] + " = " + scores[i] + "\n"
		totalPoints += scores[i]
	}

	$("#scores_display").value = scoresDisplay
	average = totalPoints / scores.length
	$("#average").value = average.toFixed(2)
}

document.addEventListener("DOMContentLoaded", () => {
	$("#add").addEventListener("click", addScore)
	$("#display_scores").addEventListener("click", displayScores)
	$("#name").focus()
})
