import React from "react";
import PropTypes from 'prop-types';
import './forecast.css';

const ForecastSummary = ({
    date,
    weatherDescriptor, 
    highTemperature, 
    lowTemperature
}) => {
    return (
        <div className='forecast-box'>
            {date}
            <div className ='forecast-img'></div>
            <div className='inner-flex'>
                <div>High: {highTemperature}</div>
                <div>Low: {lowTemperature}</div>
                
            </div>
        </div>
    );
}

ForecastSummary.propTypes = {
    weatherDescriptor: PropTypes.string.isRequired,
    highTemperature: PropTypes.number.isRequired,
    lowTemperature: PropTypes.number.isRequired
}

export { ForecastSummary };