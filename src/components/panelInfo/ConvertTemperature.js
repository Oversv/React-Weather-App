import React from 'react'
import PropTypes from 'prop-types'

export const ConvertTemperature = ({setTemperatureUnits}) => {
    
    const handleCelsius = () =>{
        setTemperatureUnits('celsius')
    }

    const handleFahrenheit = () =>{
        setTemperatureUnits('fahrenheit')
    }

    return (
        <>
            <p onClick={handleCelsius}>ºC</p>
            <p onClick={handleFahrenheit}>ºF</p>   
        </>
    )
}

ConvertTemperature.propTypes = {
    setTemperatureUnits: PropTypes.func.isRequired
}
