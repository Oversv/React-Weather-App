import React, { useEffect, useState } from 'react'
import ModalSearchCity from './components/modal/ModalSearchCity';
import Weather from './components/Weather';
import WeatherPanelInfo from './components/panelInfo/WeatherPanelInfo';
import TopBar from './components/TopBar';
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
    background-color: ${({theme}) => theme.first};
    min-height: 100vh;   

    @media (min-width: 1024px) {
      display: grid;
      grid-template-columns: 460px auto;
      grid-template-rows: 100px auto;           
    }
  }
`

const Info = styled.p`
  text-align: center;
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
          <TopBar 
            setModalShow={setModalShow}
            setWoeid={setWoeid}
          />

          <ModalSearchCity 
            modalShow={modalShow}
            setModalShow={setModalShow}
            setWoeid={setWoeid}
          />
           
          {           
            (woeid.isLoading) 
              ? <Info>Loading...</Info>          
              : (woeid.error) 
                ? <Info>Location not found</Info>
                :<>
                    <Weather 
                      isLoading={weather.isLoading}
                      error={weather.error}
                      weather={weather.data}                  
                      temperatureUnits={temperatureUnits}
                    /> 
                   
                     <WeatherPanelInfo
                      isLoading={weather.isLoading}
                      error={weather.error} 
                      weather={weather.data}
                      temperatureUnits={temperatureUnits}
                      setTemperatureUnits={setTemperatureUnits}
                    /> 
                  </> 
          }     

        </main>        
      </ThemeProvider>
    </>
  )
}