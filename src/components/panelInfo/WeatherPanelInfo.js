import React from 'react'
import PropTypes from 'prop-types'
import { WeatherNextDays } from './WeatherNextDays'
import { WeatherInfoToday } from './WeatherInfoToday'
import { ConvertTemperature } from './ConvertTemperature'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'

const PanelInfo = styled.section`
    grid-column: 2;
    grid-row: 1 / span 2;
    background-color: ${({theme}) => theme.bgPanelInfo};
    padding-top: 52px;

    @media (min-width: 1024px) {
        padding-top: 42px;         
    }      
`

export const WeatherPanelInfo = ({isLoading, error, weather, temperatureUnits, setTemperatureUnits}) => {    
   
    if(isLoading || error){
        return null
    }else{
        return(
            <PanelInfo>
                <MediaQuery minDeviceWidth={1024}>                    
                    <ConvertTemperature                         
                        setTemperatureUnits={setTemperatureUnits} 
                    />
                </MediaQuery>
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
