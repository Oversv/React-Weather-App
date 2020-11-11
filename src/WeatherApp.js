import React from 'react'
import { usePosition } from 'use-position';
import { WeatherToday } from './components/WeatherToday'
import './styles.css'

export const WeatherApp = () => {

    //Get current location
    const options ={
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }

    const watch = true;
    const {
        latitude,
        longitude     
    } = usePosition(watch, options); 
    
    return (
        <> 
            {
                (latitude === undefined || longitude === undefined)
                    ? <h1>Loading...</h1>
                    : <WeatherToday lat={latitude} lon={longitude} />
            } 
        </>
    )
}