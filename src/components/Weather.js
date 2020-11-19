import React from 'react'
import PropTypes from 'prop-types';
import { MdPlace } from "react-icons/md";
import Moment from 'react-moment';
import celsiusToFahrenheit from '../helpers/celsiusToFahrenheit';

export const Weather = ({weather, temperatureUnits}) => {

    const abbr = weather.consolidated_weather[0].weather_state_abbr
    const name = weather.consolidated_weather[0].weather_state_name
    const temp = weather.consolidated_weather[0].the_temp
    const time = weather.time
    const title = weather.title

    return (        
        <div>           
            {
                (!!weather)
                    ? <div>
                        <img src={`assets/img/${abbr}.png`} alt={name}/>
                        
                        {
                            temperatureUnits === 'celsius'
                                ? <p>{`${Math.round(temp)}ºC`}</p>
                                : <p>{`${Math.round(celsiusToFahrenheit(temp))}ºF`}</p>
                        }
                        
                        <p>{name}</p>
                        <p>Today · <Moment format='ddd, D MMM'>{time}</Moment></p>
                        <p><MdPlace /> {title}</p>
                    </div>
                    
                    : <p>Error</p>
            }      
        </div>
    )    
}

Weather.propTypes ={
    weather: PropTypes.object.isRequired,
    temperatureUnits: PropTypes.string.isRequired    
}
