import React from 'react';
import './search-page.css'
import { CitySummary } from '../../components/city-summary/city-summary.jsx';

export default function SearchPage() {
    return (
        <div className='whole-page'>
            <div className='horizontal-flex'>
                <CitySummary
                cityName='Chicago'
                stateName='Illinois'
                countryName='United States'
                currTemperature={40}
                highTemperature={43}
                lowTemperature={32}
                />

                <CitySummary
                cityName='Chicago'
                />
            </div>
            
        </div>
    );
};
