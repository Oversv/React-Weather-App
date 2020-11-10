import React from 'react'
import { usePosition } from 'use-position';
import { useFetch } from '../hooks/useFetch';

export const WeatherToday = () => {
     
    const options ={
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }
    const watch = true;
    const {
      latitude,
      longitude,
      error,
    } = usePosition(watch, options);    

    const url = `https://www.metaweather.com/api/location/search/?lattlong=${latitude},${longitude}` 
    const data = useFetch(url)
    console.log(data)
    

    return (
        <div>
            <h1>Weather Today</h1>
            <code>
                lat: {latitude}<br/>
                longitude: {longitude}<br/>
                error: {error}
            </code>
        </div>
    )
}
