const apiKey = process.env.REACT_APP_WEATHERSTACK_API_KEY;

async function getCurrWeather(cityName) {
    try {
        const response = await fetch(`https://api.weatherstack.com/forecast?access_key=${apiKey}&query=${cityName}&forecast_days=1`);

            const data = await response.json();

            console.log(data);

            return data; 
    } catch (error) {
        const weatherContainer = document.getElementById('weather');

        weatherContainer.innerHTML = `<p>Error fetching weather data.</p>`;
    }
}


export { getCurrWeather };