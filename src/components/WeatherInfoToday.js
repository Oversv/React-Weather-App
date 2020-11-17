import React from 'react'
import PropTypes from 'prop-types'

export const WeatherInfoToday = ({windSpeed, windDirection, humidity, visibility, airPressure}) => {
    
    return (
        <>
            <h2>Today's Hightlights</h2>
            <p>{Math.round(windSpeed)}mph</p>
            <p>{Math.round(windDirection)} Esto es un ICONO</p>
            <p>{humidity}%</p>
            <p>{visibility.toFixed(1)} miles</p>
            <p>{Math.round(airPressure)} mb</p>
        </>
    )
}

WeatherInfoToday.propTypes = {
    windSpeed: PropTypes.number.isRequired,
    windDirection: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    visibility: PropTypes.number.isRequired,
    airPressure: PropTypes.number.isRequired,
}


