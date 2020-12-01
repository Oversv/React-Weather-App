import React from 'react'
import PropTypes from 'prop-types';
import { MdPlace } from "react-icons/md";
import Moment from 'react-moment';
import celsiusToFahrenheit from '../helpers/celsiusToFahrenheit';
import styled from 'styled-components'

const Section = styled.section`
    text-align: center;    
    height: 100vh;
    margin: 0; 
    position: relative;   
    
    &::before{
      content: '';
      background: url("./assets/img/Cloud-background.png") top center no-repeat;
      position: absolute;
      top: 50px;
      right: 0;
      width: 100%;
      height: 100%;
      opacity: 0.1;      
    }

    @media (min-width: 1024px) {
        grid-column: 1;
        grid-row: 2;     
    }      
`
const Img = styled.img`
    width: 175px;
    height: 175px; 
`
const Temperature = styled.p`
    font-size: 144px;
    font-weight: 500;
    color: white;
    margin-top: 30px;
    margin-bottom: 0;    
`
const Span = styled.span`
    font-size: 48px;
    font-weight: 500;
    color: ${({theme}) => theme.second};     
`
const WeatherName = styled.p`
    font-size: 36px;
    font-weight: 600;
    margin-top: 23px;
    margin-bottom: 38px;

    @media (min-width: 1024px) {
        margin-top: 87px;
        margin-bottom: 0;
    }     
`
const Date = styled.p`   
    font-weight: 500;
    word-spacing: 16px;
    margin-top: 0;
    margin-bottom: 22px;

    @media (min-width: 1024px) {
        margin-top: 87px;
    }  
`
const SpanMoment = styled.span`
    word-spacing: 0px;
`
const City = styled.p`  
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;   
`
const SpanIcon = styled.span` 
    font-size: 1.4em;
    margin-right: 5px;
`

export const Weather = ({isLoading, error, weather, temperatureUnits}) => {

    if(isLoading){

        return(<Section><p>Getting data...</p></Section>)

    }else if(error){

        return(<Section><p>OPPS! Data not found :(</p></Section>)

    }else{

        const abbr = weather.consolidated_weather[0].weather_state_abbr
        const name = weather.consolidated_weather[0].weather_state_name
        const temp = weather.consolidated_weather[0].the_temp
        const time = weather.time
        const title = weather.title

        return(
            <Section>       
                <Img src={`assets/img/${abbr}.png`} alt={name}/>
                
                {
                    temperatureUnits === 'celsius'
                        ? <Temperature>{Math.round(temp)}<Span>ºC</Span></Temperature>
                        : <Temperature>{Math.round(celsiusToFahrenheit(temp))}<Span>ºF</Span></Temperature>
                }
                
                <WeatherName>{name}</WeatherName>
                <Date>Today · <SpanMoment><Moment format='ddd, D MMM'>{time}</Moment></SpanMoment></Date>
                <City>
                    <SpanIcon><MdPlace /></SpanIcon>{` ${title}`}
                </City>              
            </Section>    
        )
    }
}

Weather.propTypes ={
    weather: PropTypes.object,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.bool,
    temperatureUnits: PropTypes.string.isRequired    
}
