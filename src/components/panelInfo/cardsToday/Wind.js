import React from 'react'
import styled from 'styled-components'
import { MdNavigation } from 'react-icons/md';

const CardTitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
`
const CardValue = styled.p`
    font-size: 64px;
    font-weight: 700;
    margin: 0;
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
    width: 21px;
    height: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    //transform: rotate(199.17337245078878deg)
    //TODO buscar como psar la prop, he cambiado los datos de la prop
    padding: ${props => props.windDirection}px;
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
                <Icon><MdNavigation size="0.6em"/></Icon>
                <WindDirectionCompas>{windDirectionCompas}</WindDirectionCompas>
            </ContainerWindDirection> 
        </>
    )
}
