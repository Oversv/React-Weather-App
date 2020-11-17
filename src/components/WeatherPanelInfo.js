import React from 'react'
import PropTypes from 'prop-types'
import { WeatherNextDays } from './WeatherNextDays'
import { WeatherInfoToday } from './WeatherInfoToday'

export const WeatherPanelInfo = ({weather}) => {
    return (
        <div>
            <WeatherNextDays weatherNextDays={weather.consolidated_weather} />
            <WeatherInfoToday 
                windSpeed={weather.consolidated_weather[0].wind_speed}
                windDirection={weather.consolidated_weather[0].wind_direction}
                humidity={weather.consolidated_weather[0].humidity}
                visibility={weather.consolidated_weather[0].visibility}
                airPressure={weather.consolidated_weather[0].air_pressure}
            />
        </div>
    )
}

WeatherPanelInfo.propTypes = {
    weather: PropTypes.object.isRequired
}

