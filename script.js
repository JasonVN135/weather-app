
// Used to gain reference from the html file of different components
// "temp" - Looks for a class named 'temp'
// "time_location p" - Looks for a type p with a class name time_location
const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".time_location p");
const dateAndTimeField = document.querySelector(".time_location span");
const conditionField = document.querySelector(".condition p");
const conditionImageField = document.querySelector(".condition img")
const searchField = document.querySelector(".search_area");
const form = document.querySelector("form");

// When the submit action is performed in html, perform the code
form.addEventListener('submit', searchForLocation)

let target = 'Raleigh';

const fetchResults = async (targetLocation) => {
	// async = Asynchronous function
	// Returns AsyncFunction object

	// await = Used to pause async function execution until a promise is fulfilled

	let url = `http://api.weatherapi.com/v1/current.json?key=fab7bd612d4d499281035124252603&q=${targetLocation}&aqi=no`

	const res = await fetch(url)
	const data = await res.json()

	console.log(data)

	let locationName = data.location.name
	let locationTime = data.location.localtime
	let lociatonTemp = data.current.temp_f
	let locationCondition = data.current.condition.text
	let locationConditionImage = data.current.condition.icon
	populateDetails(lociatonTemp, locationName, locationTime, locationCondition, locationConditionImage)
}

function populateDetails(temp, locationName, time, condition, image) {
	
	let splitDate = time.split(' ')[0]
	let splitTime = time.split(' ')[1]
	let currentDay = getDayName(new Date(splitDate).getDay())

	temperatureField.innerText = temp
	locationField.innerText = locationName
	dateAndTimeField.innerText = `${splitDate} ${currentDay} ${splitTime}`
	conditionField.innerText = condition
	
	conditionImageField.src = image
}

function searchForLocation(e) {
	e.preventDefault()

	target = searchField.value

	fetchResults(target)
}


function getDayName(num) {
	switch (num) {
		case 0:
			return "Sunday"
		case 1:
			return "MOnday"
		case 2:
			return "Tuesday"
		case 3:
			return "Wednesday"
		case 4:
			return "Thursday"
		case 5:
			return "Friday"
		case 6:
			return "Saturday"
	}
}

fetchResults(target)