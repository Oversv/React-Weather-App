import React from 'react'
import PropTypes from 'prop-types'
import { WeatherNextDays } from './WeatherNextDays'
import { WeatherInfoToday } from './WeatherInfoToday'
import { ConvertTemperature } from './ConvertTemperature'
import styled from 'styled-components'

const PanelInfo = styled.div`
    background-color: ${({theme}) => theme.bgPanelInfo};
`

export const WeatherPanelInfo = ({isLoading, error, weather, temperatureUnits, setTemperatureUnits}) => {    
   
    if(isLoading || error){
        return null
    }else{
        return(
            <PanelInfo>
                <ConvertTemperature 
                    setTemperatureUnits={setTemperatureUnits} 
                />
                <WeatherNextDays 
                    weatherNextDays={weather.consolidated_weather} 
                    temperatureUnits={temperatureUnits}
                />
                <WeatherInfoToday 
                    windSpeed={weather.consolidated_weather[0].wind_speed}
                    windDirection={weather.consolidated_weather[0].wind_direction}
                    windDirectionCompas={weather.consolidated_weather[0].wind_direction_compass}
                    humidity={weather.consolidated_weather[0].humidity}
                    visibility={weather.consolidated_weather[0].visibility}
                    airPressure={weather.consolidated_weather[0].air_pressure}
                />
            </PanelInfo>
        )
    }
}
//TODO add all propTypes

WeatherPanelInfo.propTypes = {
    weather: PropTypes.object,
    temperatureUnits: PropTypes.string.isRequired,
    setTemperatureUnits: PropTypes.func.isRequired
}
