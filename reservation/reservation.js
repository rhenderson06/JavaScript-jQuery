"use strict"

$(document).ready( () => {
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/
	const error = "This field is required."

	//move focus to arrival date
	$("#arrival_date").focus()

	//validation when submit is clicked
	$("#reservation_form").submit(evt => {
		let isValid = true
		
		//validate arrival date
		const arrivalDate = $("#arrival_date").val().trim()
		if (arrivalDate === "") {
			$("#arrival_date").next().text(error)
			isValid = false
		}
		else {
			$("#arrival_date").next().text("")
		}
		$("#arrival_date").val(arrivalDate)

		//validate nights
		const nights = $("#nights").val().trim()
		if (nights === "") {
			$("#nights").next().text(error)
			isValid = false
		}
		else if (isNaN(nights)) {
			$("#nights").next().text("Must be numeric.")
			isValid = false
		}
		else {
			$("#nights").next().text("")
		}
		$("#nights").val(nights)

		//validate name
		const name = $("#name").val().trim()
		if (name === "") {
			$("#name").next().text(error)
			isValid = false
		}
		else {
			$("#name").next().text("")
		}
		$("#name").val(name)

		//validate email
		const email = $("#email").val().trim()
		if (email === "") {
			$("#email").next().text(error)
			isValid = false
		}
		else if (!emailPattern.test(email)) {
			$("#email").next().text("Must be a valid email.")
		}
		else {
			$("#email").next().text("")
		}
		$("#email").val(email)

		//validate phone#
		const phone = $("#phone").val().trim()
		if (phone === "") {
			$("#phone").next().text(error)
			isValid = false
		}
		else {
			$("#phone").next().text("")
		}
		$("#phone").val(phone)

		if (!isValid) { //if (isValid === false)
			evt.preventDefault()
		}
	})

	
}) // end ready