import React, { useEffect, useState } from 'react'
import { ModalSearchCity } from './components/ModalSearchCity';
import { SearchCity } from './components/SearchCity';
import { Weather } from './components/Weather';
import { WeatherPanelInfo } from './components/WeatherPanelInfo';
import getPosition from './helpers/getPosition';
import getWeather from './helpers/getWeather';
import './styles.css'

export const WeatherApp = () => {

  const [modalShow, setModalShow] = useState(false)
  const [woeid, setWoeid] = useState(0)
  const [weather, setWeather] = useState('') 
  const [temperatureUnits, setTemperatureUnits] = useState('celsius')
  
  useEffect( ()=>{
    getPosition(setWoeid)
  },[])

  useEffect(()=>{
    getWeather(woeid, setWeather)
}, [woeid]) 
  
  return (
    <> 
      <SearchCity setModalShow={setModalShow}/>

      <ModalSearchCity 
        modalShow={modalShow}
        setModalShow={setModalShow}
        setWoeid={setWoeid}
      />   
      {
        (weather === '') 
          ? <p>Location not found :(</p>          
          :<div>
            <Weather 
              weather={weather}
              temperatureUnits={temperatureUnits}
            /> 
            <WeatherPanelInfo 
              weather={weather}
              temperatureUnits={temperatureUnits}
              setTemperatureUnits={setTemperatureUnits}
            />
          </div> 
      }
     
    </>
  )
}