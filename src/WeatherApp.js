import React, { useEffect, useState } from 'react'
import { CurrentLocation } from './components/CurrentLocation';
import { ModalSearchCity } from './components/ModalSearchCity';
import { SearchCity } from './components/SearchCity';
import { Weather } from './components/Weather';
import { WeatherPanelInfo } from './components/WeatherPanelInfo';
import getPosition from './helpers/getPosition';
import getWeather from './helpers/getWeather';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import colors from './theme/colors';


const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after{
    box-sizing: border-box
  }
  body{
    color: ${({theme}) => theme.second};
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
  }

  main{
    position: relative;
    height: 100vh;       
    background-color: ${({theme}) => theme.first};    
    
    &::before{
      content: url("./assets/img/Cloud-background.png");
      position: absolute;
      top: 50px;
      left: -160px;
      opacity: 0.1;
      transform: scale(0.85)
    }
  }
`
const TopBar = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 18px 12px;
`

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
      <ThemeProvider theme={colors}>
      <GlobalStyle />
        <main>
          <TopBar>
            <SearchCity setModalShow={setModalShow}/>
            <CurrentLocation setWoeid={setWoeid}/>
          </TopBar>

          <ModalSearchCity 
            modalShow={modalShow}
            setModalShow={setModalShow}
            setWoeid={setWoeid}
          />   
          { 
            //!Refactor: Hacer esta lógica en los componentes
            (weather.isLoading || woeid.isLoading) 
              ? (woeid.error) ? <p>Location not found :(</p> : <p>Loading...</p>          
              : <div>
                  <Weather 
                    weather={weather.data}                  
                    temperatureUnits={temperatureUnits}
                  /> 
                  {/* Refactor: Hacer esta lógica en los componentes */}
                  {/* <WeatherPanelInfo 
                    weather={weather.data}
                    temperatureUnits={temperatureUnits}
                    setTemperatureUnits={setTemperatureUnits}
                  /> */}
                </div> 
          }     

        </main>
      </ThemeProvider>

    </>
  )
}