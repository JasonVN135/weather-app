
exports.handler = async (event) => {
    const API_KEY = process.env.WEATHER_API_KEY; // Securely stored in Netlify

    // Verify the API KEY exists
    if (!API_KEY) {
        console.error("API_KEY is missing");
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'API_KEY is missing' }),
        };
    }

    console.log(API_KEY);

	// Turns the passed parameter from script.js when it assigned city to the name of the city
    const city = event.queryStringParameters.city || "Raleigh"; // Default to Raleigh if no City was found

	// Creates the url like normal from weatherapi using the API from Netlifty
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`; // URL with the city
	// Try to fetch the data
    try {
		// Fetch the response from the url
        const response = await fetch(url);
        if (!response.ok) throw new Error(`WeatherAPI request failed: ${response.status}`);
        
		// Get the json data from the response
        const data = await response.json();
        console.log(data)
        
        return {
            statusCode: 200,
            body: JSON.stringify(data), // Return the weather data
        };
    } catch (error) {
        console.error("Error fetching from WeatherAPI:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Unable to fetch weather data' }),
        };
    }
};