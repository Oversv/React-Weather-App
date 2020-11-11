import React from 'react'
import { useFetch } from '../hooks/useFetch'
import PropTypes from 'prop-types';
import { MdPlace } from "react-icons/md";
import Moment from 'react-moment';

export const Weather = ({woeid}) => {

    let abbr, name, temp
    const url = `https://www.metaweather.com/api/location/${woeid}/`
    const {data, loading} = useFetch(url)


    if(!loading){      
       abbr = data.consolidated_weather[0].weather_state_abbr
       name = data.consolidated_weather[0].weather_state_name
       temp = data.consolidated_weather[0].the_temp
    }

    return (
        
        <div>           
            {
                (loading)                 
                    ? <h2>Getting data...</h2>
                    : <div>
                        <img src={`assets/img/${abbr}.png`} alt={name}/>
                        <p>{`${Math.round(temp)}ºc`}</p>
                        <p>{name}</p>
                        <p>Today · <Moment format='ddd, D MMM'>{data.time}</Moment></p>
                        <p><MdPlace /> {data.title}</p>
                    </div>
            }      
        </div>
    )
}

Weather.propTypes ={
    woeid: PropTypes.number.isRequired
}
