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

export const Weather = ({isLoading, error, weather, temperatureUnits}) => {
    // console.log('Dentro del weather')
    // console.log(isLoading)
    // console.log(error)
    // console.log(weather)

    if(isLoading){

        return(<Section><p>Getting data</p></Section>)

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
                <div>
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
        </Section>
    
        )
    }
}

Weather.propTypes ={
    weather: PropTypes.object,//!Añadir el resto, he cambiado el isRequired
    temperatureUnits: PropTypes.string.isRequired    
}
