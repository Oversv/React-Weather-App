import React from 'react'
import styled from 'styled-components'
import { MdNavigation } from 'react-icons/md';

const CardTitle = styled.h2`
    font-size: 16px;
    font-weight: 500;
    margin-top: 22px;
    margin-bottom: 0%;
`
const CardValue = styled.p`
    font-size: 64px;
    font-weight: 700;
    margin-top: 6px;
    margin-bottom: 30px;
`
const CardUnits = styled.span`
    font-size: 36px;
    font-weight: 500;    
`
const ContainerWindDirection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Icon = styled.i`
    background-color: ${({theme}) => theme.third};
    border-radius: 50%;
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center; 
    transform: rotate(${props => props.windDirection}deg);
`
const WindDirectionCompas = styled.p`
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    padding-left: 15px; 
`
export const Wind = ({windSpeed, windDirection, windDirectionCompas}) => {
    
    return (
        <>
            <CardTitle>Wind status</CardTitle>
            <CardValue>{Math.round(windSpeed)}<CardUnits>mph</CardUnits></CardValue>
            <ContainerWindDirection>
                <Icon
                    windDirection={windDirection}
                    ><MdNavigation size="0.8em"/>
                </Icon>
                <WindDirectionCompas>{windDirectionCompas}</WindDirectionCompas>
            </ContainerWindDirection> 
        </>
    )
}

//TODO proptypes 