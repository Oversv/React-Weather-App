import React from 'react'
import PropTypes from 'prop-types'
import WeatherCard from './WeatherCard'
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 120px));
    gap: 2em 26px;
    justify-content: center; 
    margin: 0 10px;    
`

export const WeatherNextDays = ({weatherNextDays, temperatureUnits}) => {
    
    const weather = weatherNextDays.slice(1)  
  
    return (
        <Container>
            {
                weather.map( (weather, i) => 
                   <WeatherCard 
                        key={weather.id}
                        data={i === 0 ? 'Tomorrow' : weather.applicable_date}
                        abbr={weather.weather_state_abbr}
                        altAttribute={weather.weather_state_name}
                        maxTemperature={weather.max_temp}
                        minTemperature={weather.min_temp}
                        temperatureUnits={temperatureUnits}
                    />
                )
            }
        </Container>
    )
}

WeatherNextDays.propTypes = {
    weatherNextDays: PropTypes.array.isRequired,
    temperatureUnits: PropTypes.string.isRequired
}

