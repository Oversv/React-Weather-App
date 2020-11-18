import React, { useEffect, useState } from 'react'
import { CurrentLocation } from './components/CurrentLocation';
import { ModalSearchCity } from './components/ModalSearchCity';
import { SearchCity } from './components/SearchCity';
import { Weather } from './components/Weather';
import { WeatherPanelInfo } from './components/WeatherPanelInfo';
import getPosition from './helpers/getPosition';
import getWeather from './helpers/getWeather';
import './styles.css'

export const WeatherApp = () => {

  const [modalShow, setModalShow] = useState(false)
  const [woeid, setWoeid] = useState({
    isLoading: true,
    error: null,
    woeid: 0
  })

  const [weather, setWeather] = useState({
    isLoading: true,
    error: null,
    data: null
  }) 

  const [temperatureUnits, setTemperatureUnits] = useState('celsius')
  
  useEffect( ()=>{
    getPosition(setWoeid)
  },[])

  useEffect(()=>{
    getWeather(woeid.woeid, setWeather)
}, [woeid.woeid]) 

  return (
    <> 
      <SearchCity setModalShow={setModalShow}/>
      <CurrentLocation setWoeid={setWoeid}/>

      <ModalSearchCity 
        modalShow={modalShow}
        setModalShow={setModalShow}
        setWoeid={setWoeid}
      />   
      {       
        (weather.isLoading || woeid.isLoading) 
          ? (woeid.error) ? <p>Location not found :(</p> : <p>Loading...</p>          
          : <div>
              <Weather 
                weather={weather.data}
                temperatureUnits={temperatureUnits}
              /> 
              <WeatherPanelInfo 
                weather={weather.data}
                temperatureUnits={temperatureUnits}
                setTemperatureUnits={setTemperatureUnits}
              />
            </div> 
      }     
    </>
  )
}