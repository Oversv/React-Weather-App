import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment';
import celsiusToFahrenheit from '../helpers/celsiusToFahrenheit';

export const WeatherCard = ({data, abbr, altAttribute, maxTemperature, minTemperature, temperatureUnits}) => {
    
    return (
        <>
            <hr/>
            {
                data === 'Tomorrow' 
                    ? <p>{data}</p>
                    : <p><Moment format='ddd, D MMM'>{data}</Moment></p> 
            }

           <img src={`assets/img/${abbr}.png`} alt={altAttribute}/>

            {
               temperatureUnits === 'celsius'
               ? <>
                    <p>{Math.round(maxTemperature)}ºC</p>
                    <p>{Math.round(minTemperature)}ºC</p>
                </>
                : <>
                    <p>{Math.round(celsiusToFahrenheit(maxTemperature))}ºF</p>
                    <p>{Math.round(celsiusToFahrenheit(minTemperature))}ºF</p>
                </>    
            }

        </>
    )
}

WeatherCard.propTypes = {
    data: PropTypes.string.isRequired,
    abbr: PropTypes.string.isRequired,
    altAttribute: PropTypes.string.isRequired,
    maxTemperature: PropTypes.number.isRequired,
    minTemperature: PropTypes.number.isRequired,
    temperatureUnits: PropTypes.string.isRequired
}
