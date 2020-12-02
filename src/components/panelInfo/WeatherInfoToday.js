import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Wind } from './cardsToday/Wind'
import { Humidity } from './cardsToday/Humidity'
import { Visibility } from './cardsToday/Visibility'
import { AirPressure } from './cardsToday/AirPressure'

const TodaySection = styled.section`
    margin-top: 51px;
    margin-left: auto;
    margin-right: auto;
    max-width: 760px;    
`
const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;    
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 700;
    color: ${({theme}) => theme.fourth};    
    margin-left: 24px;
    margin-bottom: 32px;
`
const Card = styled.section`
    width: 328px;
    height: 204px;
    color: ${({theme}) => theme.fourth};
    background-color: ${({theme}) => theme.first};
    text-align: center;
    margin: 0 24px 32px 24px;    
`
const SmallCard = styled(Card)`
    height: 159px;
`

const WeatherInfoToday = ({windSpeed, windDirection, windDirectionCompas, humidity, visibility, airPressure}) => {
    
    return (
        <TodaySection>
            <Title>Today's Hightlights</Title>
            <CardContainer>
                <Card>
                    <Wind 
                        windSpeed={windSpeed}
                        windDirection={windDirection}
                        windDirectionCompas={windDirectionCompas}
                    />
                </Card>

                <Card>
                    <Humidity 
                        humidity={humidity}
                    />
                </Card>

                <SmallCard>
                    <Visibility
                        visibility={visibility}
                    /> 
                </SmallCard>

                <SmallCard>
                    <AirPressure 
                        airPressure={Math.round(airPressure)}                
                    />             
                </SmallCard>           

            </CardContainer>
        </TodaySection>
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

export default React.memo(WeatherInfoToday)