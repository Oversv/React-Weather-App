import React from 'react'
import PropTypes from 'prop-types';
import { MdPlace } from "react-icons/md";
import Moment from 'react-moment';
import celsiusToFahrenheit from '../helpers/celsiusToFahrenheit';
import styled from 'styled-components'

const Section = styled.section`
    text-align: center;
`
const Img = styled.img`
    width: 175px;
    height: 175px;
`
const Temperature = styled.p`
    font-size: 144px;
    font-weight: 500;
    color: white;
    margin: 0;    
`
const Span = styled.span`
    font-size: 48px;
    font-weight: 500;
    color: ${({theme}) => theme.second};     
`
const WeatherName = styled.p`
    font-size: 36px;
    font-weight: 600;
`
const Date = styled.p`   
    font-weight: 500;
    word-spacing: 16px;
`
const SpanMoment = styled.span`
    word-spacing: 0px;
`
const City = styled.p`  
    font-weight: 600;
`

export const Weather = ({weather, temperatureUnits}) => {

    let abbr, name, temp, time, title

    //!Controlar el null aquí usar
    if(!!weather){
         abbr = weather.consolidated_weather[0].weather_state_abbr
         name = weather.consolidated_weather[0].weather_state_name
         temp = weather.consolidated_weather[0].the_temp
         time = weather.time
         title = weather.title
    }

    return (        
        <Section>           
            {
                (!!weather)
                    ? <div>
                        <Img src={`assets/img/${abbr}.png`} alt={name}/>
                        
                        {
                            temperatureUnits === 'celsius'
                                ? <Temperature>{Math.round(temp)}<Span>ºC</Span></Temperature>
                                : <Temperature>{Math.round(celsiusToFahrenheit(temp))}<Span>ºF</Span></Temperature>
                        }
                        
                        <WeatherName>{name}</WeatherName>
                        <Date>Today · <SpanMoment><Moment format='ddd, D MMM'>{time}</Moment></SpanMoment></Date>
                        <City><MdPlace />{` ${title}`}</City>
                    </div>
                    
                    : <p>Error</p>            
            }      
        </Section>
    )    
}

Weather.propTypes ={
    weather: PropTypes.object.isRequired,
    temperatureUnits: PropTypes.string.isRequired    
}
