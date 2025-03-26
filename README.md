# Weather App
A simple weather app that displays the current weather conditions based on user input. Built using **HTML, CSS, and JavaScript**

## Features 
- Search for any location's weather
- Displays temperature, weather condition, date, and time
- Showers a weather icon corresponding to the condition
- Dynamically updates the UI with JavaScript

## Project Structure
weather-app
├── index.html (Main webpage)
├── style.css (CSS styles)
├── script.js (JavaScript logic)
├── README.md (This file)

## How to Use
1. Open 'index.html' in your browser.
2. Enter a location in the search bar.
3. Press Enter or click the search button to fetch the weather data.
4. View the weather details, including temperature, condition, and an icon.

## 🔧 Setup & API Key
This app uses the **WeatherAPI** to fetch weather data.  

### **1️⃣ Get a Free API Key**  
1. Go to [WeatherAPI.com](https://www.weatherapi.com/) and sign up.  
2. Get your **API Key** from the dashboard.  

### **2️⃣ Add the API Key to `script.js`**
Open `script.js` and replace `YOUR_API_KEY` with your actual API key:
```js
const API_KEY = "YOUR_API_KEY";
const BASE_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=`;
