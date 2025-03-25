import React, { useEffect, useState } from 'react';
import './search-page.css'
import { CitySummary } from '../../components/city-summary/city-summary.jsx';
import { getCurrWeather } from '../../services/current-weather-data';
import LoadingScreen from  '../loading-screen.jsx';



export default function SearchPage() {

    const [locData, setLocData] = useState(null);

    useEffect(() => {
        getCurrWeather('New York').then((data) => {
            setLocData(data);
        }).catch((error) => {
            console.error('Error fetching weather data:', error);
        });

    }, []);

    if (!locData) {
        return <LoadingScreen/>;
    }
    
    // Get today's date in the format YYYY-MM-DD
    //const today = new Date();
    //const todayDate = today.toISOString().split('T')[0];  // "YYYY-MM-DD"
   
    return (
        <div className='whole-page'>
            <div className='horizontal-flex'>
                <CitySummary
                cityName={locData.location.name}
                stateName={locData.location.region}
                countryName={locData.location.country}
                currTemperature={locData.current.temperature}
                highTemperature={20}
                lowTemperature={20} 
                />

                <CitySummary
                cityName='Chicago'
                />
            </div>
            
        </div>
    );
};
