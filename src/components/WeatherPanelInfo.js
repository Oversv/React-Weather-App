import React from 'react'
import PropTypes from 'prop-types'
import { WeatherNextDays } from './WeatherNextDays'
import { WeatherInfoToday } from './WeatherInfoToday'
import { ConvertTemperature } from './ConvertTemperature'

export const WeatherPanelInfo = ({weather, temperatureUnits, setTemperatureUnits}) => {    
   
    return (
        (!!weather)        
            ? <div>
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
                    humidity={weather.consolidated_weather[0].humidity}
                    visibility={weather.consolidated_weather[0].visibility}
                    airPressure={weather.consolidated_weather[0].air_pressure}
                />
            </div>
            
            :<p>Error</p>
    )
}

WeatherPanelInfo.propTypes = {
    weather: PropTypes.object.isRequired,
    temperatureUnits: PropTypes.string.isRequired,
    setTemperatureUnits: PropTypes.func.isRequired
}

