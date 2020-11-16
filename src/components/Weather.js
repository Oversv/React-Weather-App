import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types';
import { MdPlace } from "react-icons/md";
import Moment from 'react-moment';
import getWeather from '../helpers/getWeather';

export const Weather = ({woeid}) => {
    console.log('Renderizando Weather component')
    let abbr, name, temp
    const [weather, setWeather] = useState('') 
    
    useEffect(()=>{
        getWeather(woeid, setWeather)
    }, [woeid]) 
    
    if(weather !== ''){      
       abbr = weather.consolidated_weather[0].weather_state_abbr
       name = weather.consolidated_weather[0].weather_state_name
       temp = weather.consolidated_weather[0].the_temp
    }

    return (
        
        <div>           
            {
                (weather === '')                 
                    ? <h2>Getting data...</h2>
                    : <div>
                        <img src={`assets/img/${abbr}.png`} alt={name}/>
                        <p>{`${Math.round(temp)}ºc`}</p>
                        <p>{name}</p>
                        <p>Today · <Moment format='ddd, D MMM'>{weather.time}</Moment></p>
                        <p><MdPlace /> {weather.title}</p>
                      </div>
            }      
        </div>
    )
    
}

Weather.propTypes ={
    woeid: PropTypes.number.isRequired
}
