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
            console.error('Error fetching weather data: ', error);
        });
    }, []);


    if (!locData) {
        return <LoadingScreen/>;
    }
   
    return (
        <div className='whole-page'>
            <div className='horizontal-flex'>
                <CitySummary
                cityName={locData.location.name}
                stateName={locData.location.region}
                countryName={locData.location.country}
                currTemperature={locData.current.temperature}
                highTemperature={locData.current.temperature + 5}
                lowTemperature={locData.current.temperature - 5} 
                />

                <CitySummary
                cityName='Chicago'
                stateName='Illinois'
                countryName='United States'
                currTemperature={60}
                highTemperature={65}
                lowTemperature={55} 
                />
            </div>
            
        </div>
    );
};
