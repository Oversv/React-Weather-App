import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Wind } from './cardsToday/Wind'

const Container = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 51px;
`
const Title = styled.h2`
    font-size: 24px;
    font-weight: 700;
    color: ${({theme}) => theme.fourth};
    flex: 1 1 auto;
    margin-left: 21px;
`
const Card = styled.section`
    width: 328px;
    height: 204px;
    color: ${({theme}) => theme.fourth};
    background-color: ${({theme}) => theme.first};
    text-align: center;    
`

export const WeatherInfoToday = ({windSpeed, windDirection, windDirectionCompas, humidity, visibility, airPressure}) => {
    
    return (
        <Container>
            <Title>Today's Hightlights</Title>
            <Card>
                <Wind 
                    windSpeed={windSpeed}
                    windDirection={50}
                    windDirectionCompas={windDirectionCompas}
                />
            </Card>
            <p>{Math.round(windDirection)} Esto es un ICONO</p>
            <p>{humidity}%</p>
            <p>{visibility.toFixed(1)} miles</p>
            <p>{Math.round(airPressure)} mb</p>
        </Container>
    )
}

WeatherInfoToday.propTypes = {
    windSpeed: PropTypes.number.isRequired,
    windDirection: PropTypes.number.isRequired,
    windDirectionCompas: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    visibility: PropTypes.number.isRequired,
    airPressure: PropTypes.number.isRequired,
}
