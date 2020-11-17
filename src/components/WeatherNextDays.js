import React from 'react'
import PropTypes from 'prop-types'
import { WeatherCard } from './WeatherCard'

export const WeatherNextDays = ({weatherNextDays}) => {
    
    const weather = weatherNextDays.slice(1)  
  
    return (
        <div>
            {
                weather.map( (weather, i) => 
                   <WeatherCard 
                        key={weather.id}
                        data={i === 0 ? 'Tomorrow' : weather.applicable_date}
                        abbr={weather.weather_state_abbr}
                        altAttribute={weather.weather_state_name}
                        maxTemperature={weather.max_temp}
                        minTemperature={weather.min_temp}
                    />
                )
            }
        </div>
    )
}

WeatherNextDays.propTypes = {
    weatherNextDays: PropTypes.array.isRequired
}

