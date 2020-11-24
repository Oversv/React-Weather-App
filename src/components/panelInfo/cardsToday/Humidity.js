import React from 'react'
import styled from 'styled-components'

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
    margin-bottom: 12px;
`
const CardUnits = styled.span`
    font-size: 36px;
    font-weight: 500;    
`
const LabelProgressBar = styled.div`
    width: 229px;
    margin: 0 auto;
    display:flex;
    justify-content: space-between;     
`
const ProgressBar = styled.div`
    height: 8px;
    width: 229px;
    background-color: ${({theme})=> theme.fourth};
    margin: 0 auto;
    border-radius: 20px; 
    position: relative;    
` 
const ProgressBarValues = styled.p`
    margin: 0 2px 2px 2px;
    font-size: 12px;
    font-weight: 700;
    color: ${({theme}) => theme.second};
`
const ProgressBarFill = styled.span`    
    display: block;
    height: 8px;
    width: ${props => props.humidity}%;
    background-color: ${({theme})=> theme.progressBarFill};
    border-radius: 20px;   

    &::after{
        position: absolute;
        content:'%';
        top: 16px;
        right: 0;
        font-size: 12px;
        font-weight: 700;
        color: ${({theme}) => theme.second};
    }
`

export const Humidity = ({humidity}) => {
    return (
        <>
            <CardTitle>Humidity</CardTitle>
            <CardValue>{humidity}<CardUnits>%</CardUnits></CardValue>
            
            <LabelProgressBar>
                <ProgressBarValues>0</ProgressBarValues>
                <ProgressBarValues>50</ProgressBarValues>
                <ProgressBarValues>100</ProgressBarValues>
            </LabelProgressBar>

            <ProgressBar>
                <ProgressBarFill humidity={humidity}></ProgressBarFill>
            </ProgressBar>

        </>
    )
}
