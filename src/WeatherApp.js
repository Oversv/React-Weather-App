import React, { useEffect, useState } from 'react'
import { ModalSearchCity } from './components/ModalSearchCity';
import { SearchCity } from './components/SearchCity';
import { Weather } from './components/Weather';
import getPosition from './helpers/getPosition';
import './styles.css'

export const WeatherApp = () => {
  console.log('Renderizando APP')

  const [modalShow, setModalShow] = useState(false)
  const [woeid, setWoeid] = useState(0)
  
  useEffect( ()=>{
    getPosition(setWoeid)
  },[])
  
  return (
    <> 
      <SearchCity setModalShow={setModalShow}/>

      <ModalSearchCity 
        modalShow={modalShow}
        setModalShow={setModalShow}
        setWoeid={setWoeid}
      />   
      {
        (woeid === 0) 
          ? <p>Location not found :(</p>
          : <Weather woeid={woeid}/>
      }

    </>
  )
}