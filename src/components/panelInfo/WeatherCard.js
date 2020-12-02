import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment';
import celsiusToFahrenheit from '../../helpers/celsiusToFahrenheit';
import styled from 'styled-components'

const Card = styled.div`
    width: 120px;
    height: 177px;
    padding: 1em;   
    text-align: center;
    font-size: 15px;
    font-weight: 500;
    color: ${({theme}) => theme.fourth};
    background-color: ${({theme}) => theme.first};
`
const Paragraph = styled.p`
    margin: 0;
`
const ParagraphMinTemperature = styled.p`
    margin: 0;
    color: ${({theme}) => theme.second};
`
const Img = styled.img`
    width: 62px;
    height: 62px;
    margin: 16px 0;
`
const Temperature = styled.div`
    display: flex;
    justify-content: space-evenly;   
`

const WeatherCard = ({data, abbr, altAttribute, maxTemperature, minTemperature, temperatureUnits}) => {
      
    return (
        <Card>            
            {
                data === 'Tomorrow' 
                    ? <Paragraph>{data}</Paragraph>
                    : <Paragraph><Moment format='ddd, D MMM'>{data}</Moment></Paragraph> 
            }

           <Img src={`assets/img/${abbr}.png`} alt={altAttribute}/>
              
            <Temperature>
                {
                    temperatureUnits === 'celsius'
                    ?   <>
                            <Paragraph>{Math.round(maxTemperature)}ºC</Paragraph>
                            <ParagraphMinTemperature>{Math.round(minTemperature)}ºC</ParagraphMinTemperature>
                        </>
                    :   <>
                            <Paragraph>{Math.round(celsiusToFahrenheit(maxTemperature))}ºF</Paragraph>
                            <ParagraphMinTemperature>{Math.round(celsiusToFahrenheit(minTemperature))}ºF</ParagraphMinTemperature>
                        </> 
                }
            </Temperature>
        </Card>
    )
}

WeatherCard.propTypes = {
    data: PropTypes.string.isRequired,
    abbr: PropTypes.string.isRequired,
    altAttribute: PropTypes.string.isRequired,
    maxTemperature: PropTypes.number.isRequired,
    minTemperature: PropTypes.number.isRequired,
    temperatureUnits: PropTypes.string.isRequired
}

export default WeatherCard