import PropTypes from 'prop-types';

const weatherContainer = document.getElementsById('weather');

const apiKey = process.env.WEATHERSTACK_API_KEY;

async function getCurrWeather(cityName) {
    try {
        const response = await fetch(`https://api.weatherstack.com/current
            ? access_key = ${apiKey}
            & query = ${cityName}`);

            const data = await response.json();

            return data; 
    } catch (error) {

        weatherContainer.innerHTML = `<p>Error fetching weather data.</p>`;
    }
}

getCurrWeather.propTypes = {
    cityName: PropTypes.string.isRequired
}

export { getCurrWeather };