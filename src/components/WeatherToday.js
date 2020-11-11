import React from 'react'
import { useFetch } from '../hooks/useFetch';
import { Weather } from './Weather';
import PropTypes from 'prop-types';

export const WeatherToday = ({lat, lon}) => {

    const url = `https://www.metaweather.com/api/location/search/?lattlong=${lat},${lon}`         
    const {data, loading} = useFetch(url) 
    let woeid = ''     

    if(!loading){
        woeid = data[0].woeid
    }  

    return (
        <div>           
            {
                (loading) 
                    ? <h1>Loading...</h1>
                    : <Weather woeid={woeid} />
            }        

        </div>
    )
}

WeatherToday.propTypes = {
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired
}
