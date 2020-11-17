import React from 'react'
import PropTypes from 'prop-types';
import { MdPlace } from "react-icons/md";
import Moment from 'react-moment';
import celsiusToFahrenheit from '../helpers/celsiusToFahrenheit';

export const Weather = ({weather, temperatureUnits}) => {
    
    let abbr, name, temp   
    
    if(weather !== ''){      
       abbr = weather.consolidated_weather[0].weather_state_abbr
       name = weather.consolidated_weather[0].weather_state_name
       temp = weather.consolidated_weather[0].the_temp
    }
    
    return (
        
        <div>           
            {
                weather === ''                 
                    ? <h2>Getting data...</h2>
                    : <div>
                        <img src={`assets/img/${abbr}.png`} alt={name}/>
                        
                        {
                            temperatureUnits === 'celsius'
                                ? <p>{`${Math.round(temp)}ºC`}</p>
                                : <p>{`${Math.round(celsiusToFahrenheit(temp))}ºF`}</p>
                        }
                        
                        <p>{name}</p>
                        <p>Today · <Moment format='ddd, D MMM'>{weather.time}</Moment></p>
                        <p><MdPlace /> {weather.title}</p>
                      </div>
            }      
        </div>
    )
    
}

Weather.propTypes ={
    weather: PropTypes.object.isRequired,
    temperatureUnits: PropTypes.string.isRequired    
}
