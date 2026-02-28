// app1.js - weatherstack weather app (Charlotte, NC - Fahrenheit)

//STEP 1: Store your weatherstack API key in a variable
const API_KEY = "96ec3cd2b12be829517e55252d053daf";

//Build the weatherstack API URL (current weather endpoint).
//Access key - your current API key
//query - the location we want weather for (Charlotte, NC)
//units=f - Fahrenheit units
const url =`https://api.weatherstack.com/current?access_key=${API_KEY}&query=Charlotte%20NC&unit=f`;

/* Create an async function that will fetch weather data and print it.
"async" let us use "await" inside the function.*/
const printWeather = async () => {

        try{
        //Make the HTTP request to the API and wait for the response
        const response = await fetch(url);

        //console.log(response);
        const data = await response.json(); // JSON into JavaScript Object

        //If Weatherstack returns an error object, display it and stop.
        //This happens if the API key is invalid, the query is wrong, etc.
        if (data.error){
            console.log("Error is a API request");
            console.log(data.error.info);
            return;
        }

        console.log(data);
        //Extract (pull out) only the fields we need from the JSON object.
        //Location information
        const city = data.location.name; //city name
        const state = data.location.region; //state/region name
        const lat = data.location.lat; //latitude
        const lon = data.location.lon; //longitude
        const localTime = data.location.localtime; //local time @ location


        //Current weather information
        const condition = data.current.weather_descriptions[0]; // description (array -> 
    // first item)
        const tempF = data.current.temperature;       // current temperature (F)
        const feelsF = data.current.feelslike;      // feels like temperature (F)

        //Print a nice formatted weather report to console.
        console.log("Weather Report (Fahrenheit Units)");
        console.log("--------------------------------");
        console.log(`City/State: ${city}, ${state}`);
        console.log(`Coordinates: ${lat}, ${lon}`);
        console.log(`Current Outdoor Condition: ${condition}`);
        console.log(`Current Temperature: ${tempF}°F`);
        console.log(`Feels like Temperature: ${feelsF}°F`);
        console.log(`Current Time: ${localTime}`);
}
catch(error){
    console.log("Network or unexpected error occurred");
    console.log(error)
}

}

printWeather();

//https://api.weatherstack.com/current?access_key=96ec3cd2b12be829517e55252d053daf&query=Charlotte%20NC&unit=f