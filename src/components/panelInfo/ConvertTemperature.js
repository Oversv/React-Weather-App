import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Section = styled.section`
  
`

export const ConvertTemperature = ({setTemperatureUnits}) => {
    
    const handleCelsius = () =>{
        setTemperatureUnits('celsius')
    }

    const handleFahrenheit = () =>{
        setTemperatureUnits('fahrenheit')
    }

    return (
        <Section>
            <p onClick={handleCelsius}>ºC</p>
            <p onClick={handleFahrenheit}>ºF</p>   
        </Section>
    )
}

ConvertTemperature.propTypes = {
    setTemperatureUnits: PropTypes.func.isRequired
}
