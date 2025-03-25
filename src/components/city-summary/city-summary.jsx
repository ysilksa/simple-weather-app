// Used for one of the city cards on the main page. Users can click "See more" to view
// more detailed information on the city's weather. 

import React from 'react';
//import PropTypes from 'prop-types';
import './city-summary.css'
import '../../styles/fonts.css'
import { ForecastSummary } from './forecast/forecast';
import { CustomButton } from '../button/button';


const CitySummary = ({
    cityName, 
    stateName, 
    countryName,
    currTemperature, 
    highTemperature, 
    lowTemperature, 
    currentData, 
    forecastData

}) => {
    return(
        <div className='summary-container'>
            {/* top half of the city summary */}
            <div className='top-half'>
                <div clas   sName='place-name'>{cityName}, {stateName}, {countryName}</div>
                <div className='image-info-box'>
                    <div className='image-holder'></div>
                    <div className='temperature-box'>
                        <div className='curr-temperature-box'>{currTemperature}°</div>
                        <div className='high-low-temperature-box'> High: {highTemperature} </div>
                        <div className='high-low-temperature-box'> Low: {lowTemperature} </div>
                    </div>
                    
                    
                </div>
            </div>

            {/* bottom half of the city summary */}
            <div className='bottom-half'>
                {/* forecast summaries */}
                <ForecastSummary
                date='March 20'
                weatherDescriptor={'sunny'}
                highTemperature={60}
                lowTemperature={37}/>
                <ForecastSummary
                date='March 21'
                weatherDescriptor={'sunny'}
                highTemperature={60}
                lowTemperature={37}/>
                <ForecastSummary
                date='March 22'
                weatherDescriptor={'sunny'}
                highTemperature={60}
                lowTemperature={37}/>

                {/* see more button  */}
                <CustomButton
                buttonText='See more'/>
            </div>
            
        </div>
    )
}


// prop validation for CitySummary
// CitySummary.propTypes = {
//     cityName: PropTypes.string.isRequired,
//     stateName: PropTypes.string.isRequired,
//     countryName: PropTypes.string.isRequired,
//     currTemperature: PropTypes.number.isRequired,
//     highTemperature: PropTypes.number.isRequired, 
//     lowTemperature: PropTypes.number.isRequired
// }

export { CitySummary };