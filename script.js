




const fetchResults = async () => {
	// async = Asynchronous function
	// Returns AsyncFunction object

	// await = Used to pause async function execution until a promis is fulfilled

	let url = 'http://api.weatherapi.com/v1/current.json?key=fab7bd612d4d499281035124252603&q=Raleigh&aqi=no'

	const res = await fetch(url)

	console.log(res)
}

fetchResults()